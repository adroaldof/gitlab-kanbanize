import debug from 'debug';

export default (namespace) => {
  const baseDebug = debug(`gitlab-kanbanize:${namespace || '*'}`);

  /* eslint no-console:0 */
  return {
    log (...args) {
      baseDebug.log = console.log.bind(console);
      baseDebug.apply(baseDebug, args);
    },
    error (...args) {
      baseDebug.apply(baseDebug, args);
    },
  };
};
