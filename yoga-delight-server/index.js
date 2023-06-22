require('dotenv').config()
const express =require('express');
const app=express();
const  cors =require('cors')
const port =process.env.PORT || 5007;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');



//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.sktmpwb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {

  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const dbConnect = async () => {
  try {
    client.connect();
    console.log(" Database Connected Successfully✅ ");

  } catch (error) {
    console.log(error.name, error.message);
  }
}
dbConnect()


const classesCollection = client.db("yogaDB").collection("classes");
const instructionCollection = client.db("yogaDB").collection("instructor");
const cartCollection = client.db("yogaDB").collection("carts");
const userCollection = client.db("yogaDB").collection("users");

app.get('/', (req, res) => {
  res.send('Lets yoga')
})
//user collection

app.patch('/users/admin/:id', async(req, res) => {
  const id =req.params.id;
  const filter ={ _id : new ObjectId(id)}
  const updateDoc ={
      $set: {
        role :'admin'
      }
      
    }
  const result = await userCollection.updateOne(filter,updateDoc);
  res.send(result);
  
})

app.delete('/users/:id', async (req, res) => {
  const id =req.params.id;
  const query ={ _id : new ObjectId(id)}
  const result = await userCollection.deleteOne(query);
  res.send(result);
})

app.get('/users/admin/:email', async (req, res) => {
  const email =req.params.email;
  const query ={email :email}
  const user = await userCollection.findOne(query);
  const result = {admin :user?.role === 'admin'}
  res.send(result);
})


app.post('/users', async (req, res) => {
  const user = req.body;
  console.log(user);
  const query ={email : user.email}
  const existingUser =await userCollection.findOne(query);
  if(existingUser){
    return res.send({message:'already exists'})
  }
  const result = await userCollection.insertOne(user);
  res.send(result);
})
app.get('/users', async (req, res) => {
  const result = await userCollection.find().toArray();
  res.send(result);
})


//classes collection
app.get('/classes', async (req, res) => {
    const result = await classesCollection.find().toArray();
    res.send(result);
  })


//instructor collection
  app.get('/instructor', async (req, res) => {
    const result = await instructionCollection.find().toArray();
    res.send(result);
  })


//cards collection
app.get('/carts', async (req, res) => {
  const email =req.query.email;
  console.log(email);
  if(!email){
    res.send([]);
  }
  const query ={email:email};
  const result = await cartCollection.find(query).toArray();
  res.send(result);
})

app.delete('/carts/:id', async (req, res) => {
  const id =req.params.id;
  const query ={ _id : new ObjectId(id)}
  const result = await cartCollection.deleteOne(query);
  res.send(result);
})



app.post('/carts', async (req, res) => {
    const body = req.body;
    console.log(body);
    const result = await cartCollection.insertOne(body);
    res.send(result);
  })









app.listen(port, () => {
    console.log(`Lets run the Yoga server site on port : ${port}`)
  })