// Create web server
// 1. Create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello!</h1>
// 2. Add /hello/NAME, where NAME is any string, to respond with HTML that says <h1>Hello NAME!</h1>
// 3. Add /hello?name=NAME, where NAME is any string, to respond with HTML that says <h1>Hello NAME!</h1>
// 4. Add /comments to respond with <h1>Comments</h1> and a <textarea> that users can type in
// 5. Add POST /comments that will echo back the comment text in a <pre> block

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

app.get('/hello/:name', (req, res) => {
  res.send(`<h1>Hello ${req.params.name}!</h1>`);
});

app.get('/hello', (req, res) => {
  res.send(`<h1>Hello ${req.query.name}!</h1>`);
});

app.get('/comments', (req, res) => {
  res.send(`
    <h1>Comments</h1>
    <textarea></textarea>
    <button>Submit</button>
  `);
});

app.post('/comments', (req, res) => {
  res.send(`
    <h1>Comments</h1>
    <p>${req.body.comment}</p>
  `);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});