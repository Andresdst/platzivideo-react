import dotenv from 'dotenv';
import React from 'react';
import helmet from 'helmet';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { initialState } from '../frontend/initialState';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import getManifest from './getManifest';

const express = require('express'); //ya se soporta ambas importaciones
const webpack = require('webpack');

dotenv.config();
const { ENV, PORT } = process.env;

const app = express();

if (ENV === 'develoment') {
  console.log('Development Config');
  //requiriendo dependencias
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  //definiendo compilador
  const compiler = webpack(webpackConfig);
  const serverConfig = { serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hasManifest) req.hasManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  //app.use(helmet());
  app.use(helmet.dnsPrefetchControl()); app.use(helmet.expectCt()); app.use(helmet.frameguard()); app.use(helmet.hidePoweredBy()); app.use(helmet.hsts()); app.use(helmet.ieNoOpen()); app.use(helmet.noSniff()); app.use(helmet.permittedCrossDomainPolicies()); app.use(helmet.referrerPolicy()); app.use(helmet.xssFilter());
  //app.use(helmet.permittedCrossDomainPolicies());
  //deshanilitar cabezeras manualmente
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return (`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="${mainStyles}" type="text/css">
</head>
<body>
  <div id="app">${html}</div>
  <script>
    // https://redux.js.org/recipes/server-rendering/#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
  <script src="${mainBuild}" type="text/javascript"></script>
  <script src="${vendorBuild}" type="text/javascript"></script>
</body>
</html>
  `);
};

const RenderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState, req.hasManifest));
};

app.get('*', RenderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server on port ${PORT}`);
});
