require('dotenv').config();
const express=require('express')
const cors=require('cors')
const app=express()
const port=process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.utwtqwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
         const charity=client.db('charity');
         const total_donation=charity.collection('total_donation');
          const leaderboard=charity.collection('leaderboard');
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
      app.get('/total-donation',async(req,res)=>{
        const result=await total_donation.find({}).toArray();
        res.send(result);
      })
      app.get('/leaderboard',async(req,res)=>{
        const result=await leaderboard.find({}).sort({totalDonations:-1}).toArray();
        res.send(result);
      })

  } finally {
    
  }
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log("connected")
})