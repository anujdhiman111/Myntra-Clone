const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://adhiman111111:anujdhiman890@cluster0.smakff2.mongodb.net/?retryWrites=true&w=majority',console.log("connection"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email:String,
});

const User = mongoose.model('User', userSchema);

app.post('/sendData', async (req, res) => {
  // console.log("enter",req.body)
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
  // res.send('Welcome to my server1!');

});


app.post('/checkData', async(req, res) => {
  try {
    const { username, password } = req.body;
    let users = await User.find({}).exec();
      for(let u of users){
        if((u.username == username) && (u.password == password)){
          // console.log("Logged")
          res.status(201).json({ message: 'Login successfully' });
        }
      }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

  app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
