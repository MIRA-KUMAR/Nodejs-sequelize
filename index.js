const express = require("express");
const sequelize = require('./database');
const User = require('./User');

sequelize.sync().then(() => console.log('DB is ready!'));

const app = express();

app.use(express.json());    // So that express can read the JSON data when given in the body.

// 
// CREATE
app.post('/users', async (req, res) => {
  await User.create(req.body);
  return res.send('User is inserted!');
})


// READ
app.get('/getUsers', async (req, res) => {
  const users = await User.findAll();
  return res.send(users);
})

app.get('/getUsers/:id', async (req, res) => {
  const requestedId = req.params.id;
  const user = await User.findOne({where: {id: requestedId}});
  if (user === null) {
    return res.status(404).send('Not found');
  }
  return res.send(user);
} )


// UPDATE
app.put('/users/:id', async(req, res) => {
  const requestedId = req.params.id;
  const user = await User.findOne({where: {id: requestedId}});
  if(user.username === req.body.username) {
    return res.send('No update required.');
  }
  user.username = req.body.username;
  await user.save();
  return res.status(200).send('Updated.');
})

// DELETE
app.delete('/users/:id', async (req, res) => {
  const requestedId = req.params.id;
  await User.destroy({where: {id: requestedId}});
  return res.status(200).send('User data deleted.');
  
})

app.listen(3000, () => {
  console.log("app is running");
});
