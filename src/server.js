import express from 'express';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';
import Layout from './components/Layout';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => { // Request, response
  // console.log('REQ.QUERY:', req.query);
  // const { elbrusMessage } = req.query;
  // console.log(`Elbrus Message: ${elbrusMessage}`);
  const initState = { hello: '' };
  const layout = createElement(Layout, { initState });
  const html = renderToString(layout);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/new', (req, res) => {
  const { mess } = req.body;
  const initState = {
    hello: mess,
    arr: [
      'str1', 'str2', 'str3', 'bye', 'uzhe pora zakanchivat',
    ],
  };
  const layout = createElement(Layout, { initState });
  const html = renderToString(layout);
  res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, () => console.log(`Server has started on PORT ${3000}`));
