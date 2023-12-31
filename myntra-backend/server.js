const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');
const fs = require('fs').promises;


const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const accountSid = "AC6c26e7ef35c406b61512200dc9f0fc6d"
const authToken = "91d040605230b0667fcf19bc7677fa99"
const twilioClient = new twilio(accountSid,authToken)

mongoose.connect('mongodb+srv://adhiman111111:anujdhiman890@cluster0.smakff2.mongodb.net/?retryWrites=true&w=majority',console.log("connection"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: Number,
});

const User = mongoose.model('User', userSchema);

// const inputFile = '../outputDummy.json';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  currency: String,
  original_price:Number,
  discount:String,
  description:String,
});

const Product = mongoose.model('Product', productSchema);

// async function saveProductsToMongoDB() {
//   try {
//     const data = await fs.readFile(inputFile, 'utf8');
//     const jsonData = JSON.parse(data);

//     for (const productData of jsonData) {
//       try {
//         const product = new Product(productData);
//         const savedProduct = await product.save();
//       } catch (error) {
//         console.error('Error saving product to MongoDB:', error);
//       }
//     }
//   } catch (error) {
//     console.error('Error reading file or parsing JSON:', error);
//   }
// }

// saveProductsToMongoDB();

app.post('/sendOtp', async (req, res) => {
  console.log("enter",req.body)
  try {
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp)
    await twilioClient.messages
    .create({
      body: `Your OTP for Myntra is ${otp}`,
      from: '+14152372725',
      to: `+91${phoneNumber}`
    })
    .then(() =>{
      res.status(200).json({ message: "OTP sent successfully", otp:otp });
    })
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.post('/checkData', async(req, res) => {
  try {
    const {name, phoneNumber} = req.body;
    let user = await User.findOne({phoneNumber}).exec();

    if (user) {
      res.status(200).json({ message: 'Mobile number exists', exists: true });
    } 
    else {
      const newUser = new User({ name, phoneNumber });
      await newUser.save();
      res.status(200).json({ message: 'User saved successfully', exists: false });
    }
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get('/getProducts', async(req,res) => {
  console.log("entered")
  try {
    const products = await Product.find().limit(20);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});