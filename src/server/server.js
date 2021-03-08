import dotenv from 'dotenv';

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

}

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="assets/app.css" type="text/css">
</head>
<body>
  <div id="app"></div>
  <script src="assets/app.js" type="text/javascript"></script>
</body>
</html>`);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server on port 3000');
});
