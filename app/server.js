import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import routes from './routes';
import Constants from './config/constants';

const app = express();

// helmet helps secure express apps with various HTTP headers
// https://github.com/helmetjs/helmet
app.use(helmet());

// enable CORS
// https://github.com/expressjs/cors
app.use(cors());

// request logger
// https://github.com/expressjs/morgan
if (!Constants.envs.test) {
  app.use(morgan('dev'));
}

// parse incoming requests
// https://github.com/expressjs/body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// lets you use HTTP verbs such as PUT or DELETE
// https://github.com/expressjs/method-override
app.use(methodOverride());

// public routes
app.use('/public', express.static(`${__dirname}/public`));

// API routes
app.use(Constants.apiPrefix, routes);

app.listen(Constants.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Port: ${Constants.port} Env: ${app.get('env')}`);
});

export default app;
