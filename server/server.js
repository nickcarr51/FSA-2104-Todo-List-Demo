const express = require("express");
const path = require("path");
const app = express();
const { Todo } = require('./db');

const PORT = process.env.PORT || 3000;

const DIST_PATH = path.join(__dirname, '../dist');
const PUBLIC_PATH = path.join(__dirname, '../public');

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use(express.json());

app.get('/todos', async (req, res) => {
  const { complete } = req.query;
  const todos = await Todo.findAll({ where: { complete: complete }});
  res.status(200).send(todos);
})

app.post('/create', async (req, res) => {
  const { text } = req.body;
  try {
    const newTodo = await Todo.create({ text });
    res.status(201).send(newTodo);
  } catch(err) {
    res.status(400).send(err);
  }
})

app.put('/:id', async (req, res) => {
  const { newStatus } = req.body;
  const { id } = req.params;
  try {
    await Todo.update({ complete: newStatus}, { where: { id: id }})
    res.sendStatus(201);
  } catch (err) {
    res.status(304).send(err);
  }
})

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.destroy({ where: { id: id }});
    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err);
  }

})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

