const { db, Todo } = require('./server/db');

const syncAndSeed = async () => {
  await db.sync({ force: false });

  await Todo.create({ text: 'Grocery Shopping' });
  await Todo.create({ text: 'Cleaning' });
  await Todo.create({ text: 'Walk the dog' });
  await Todo.create({ text: 'Oil Change' });
  await Todo.create({ text: 'Do code stretch' });
}

syncAndSeed();