import express from 'express';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const PORT = 3002;
const server = express();

server.get('/', (req, res) => {
  fs.readFile('./server/index.html', 'utf8', (err, data) => {
    const app = renderToString(<App/>);

    res.send(data.replace('{{body}}', app));
  });

});
server.use(express.static('./build/'));

server.listen(PORT);
console.log(`serving from http://localhost:${PORT}`);
