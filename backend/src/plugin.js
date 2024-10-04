import fastifyStatic from '@fastify/static';
import addRoutes from './routes.js';


const setUpStaticAssets = (app, buildPath) => {
  app.register(fastifyStatic, {
    root: buildPath,
  });

  app.setNotFoundHandler((req, res) => {
    res.sendFile('index.html');
  });
};

export default async (app, options = { staticPath: 'build' }) => {
  setUpStaticAssets(app, options.staticPath);
  addRoutes(app, options?.state || {});
  return app;
};
