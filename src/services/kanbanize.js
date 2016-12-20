import axios from 'axios';

export async function fetchTask (boardid, taskid) {
  const { data } = await axios({
    method: 'post',
    url: 'get_task_details',
    data: {
      boardid,
      taskid,
    },
  });

  return data;
}

export async function addComment (boardid, taskid, comment) {
  const { data } = await axios({
    method: 'post',
    url: 'add_comment',
    data: {
      boardid,
      taskid,
      comment,
    },
  });

  return data;
}
