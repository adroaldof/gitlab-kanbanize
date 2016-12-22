import * as kanbanize from '../services/kanbanize';

const wrap = (fn) => (...args) => fn(...args).catch(args[2]);

export default (app) => {
  app.post('/gitlab', wrap(async(req, res) => {
    const eventType = req.headers['x-gitlab-event'];
    if (eventType != 'Merge Request Hook') {
      return res.status(200).send();
    }

    const body = req.body;
    const config = req.app.get('config');
    const boardId = config.env.boardId;
    const cardId = body.object_attributes.source_branch.split('/')[0];

    const card = await kanbanize.fetchTask(boardId, cardId);
    const comment  = buildComment(body);

    await kanbanize.addComment(boardId, cardId, comment);

    res.status(200).send();
  }));
};

function buildComment (body) {
  const verb = actions[body.object_attributes.action];

  if (!verb) {
    throw new Error('Action unknown');
  }

  const user = body.user.name;
  const userAvatar = body.user.avatar_url;
  const projectName = body.object_attributes.target.name;
  const projectUrl = body.object_attributes.target.url;
  const mergeRequestUrl = body.object_attributes.url;

  return `
    <img style="width: 25px; margin-right: 5px" src="${userAvatar}">
    <a href="${mergeRequestUrl}">Merge Request</a>
    ${verb} by ${user} at the project
    <a href="${projectUrl}">${projectName}</a>
  `;
}

const actions = {
  close: 'closed',
  merge: 'merged',
  open: 'opened',
  reopen: 'reopened',
}
