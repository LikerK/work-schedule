const buildState = (defaultState) => {
  const state = {
    days: [
      { name: 'Понедельник', lessons: [{ name: 'Alex', time: '18:00' }, { name: 'Kirill', time: '17:00' }], active: true },
      { name: 'Вторник', lessons: [{ name: 'Alex', time: '18:00' }, { name: 'Kirill', time: '17:00' }], active: false },
      { name: 'Среда', lessons: [{ name: 'Alex', time: '18:00' }, { name: 'Kirill', time: '17:00' }], active: false }
    ]
  };

  if (defaultState.days) {
    state.push(...defaultState.days);
  }
  return state;
}

export default (app, defaultState = {}) => {
  const state = buildState(defaultState);

  app.get('/api/v1/data', (_req, reply) => {
    reply.send(state.days);
  });

  app.get('/', (_req, reply) => {
      reply.sendFile('index.html');
  });
};
