const express = require('express');
const path = require('path');
const app = express();

app.use('/files', express.static(path.join(__dirname, 'files')));


app.get('/v-extechsolution/html-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'html.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/python-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'python.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/css-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'css.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/css-advance-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'css_advance.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/javascript-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'javascript.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/reactjs-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'reactjs.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/sql-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'sql.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/clanguage-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'clanguage.pdf');
    res.sendFile(filePath);
  });

  app.get('/v-extechsolution/cplus-pdf-download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'c++.pdf');
    res.sendFile(filePath);
  });


app.listen(3099, () => {
  console.log('server connected');
});
