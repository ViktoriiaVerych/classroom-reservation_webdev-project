// const dbConnection = "mongodb+srv://vverych:password@cluster0.h8qreby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//
// module.exports = dbConnection;

//
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vverych:<password>@cluster0.h8qreby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
//
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



const mongoose = require('mongoose');

// MongoDB connection string
// Replace <username>, <password>, and <your_database_name> with your actual MongoDB credentials and database name
const dbURI = 'mongodb+srv://vverych:<password>@cluster0.h8qreby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10, // Maintain up to 10 socket connections
};

// Function to connect to the database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbURI, options);
        console.log('Successfully connected to the MongoDB database');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
};

// Function to close the database connection
const closeDatabaseConnection = async () => {
    try {
        await mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error closing the database connection: ', error);
    }
};

module.exports = { connectToDatabase, closeDatabaseConnection };
