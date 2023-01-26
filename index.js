import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

import mongoose, { mongo } from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';



async function initServer() {

    const app = express();
    app.use(cors());
    dotenv.config();
    const apolloServer = new ApolloServer({typeDefs, resolvers});
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
    app.use((req,res)=>{
        res.send("Server opened");
    })

    try {
        await mongoose.connect(process.env.mongodb)
        console.log('Databese connected')
    } catch(error) {
        console.log(error)
    }

    const PORT = process.env.PORT || 5000

    app.listen(PORT,()=>{
        console.log(`Express server in ${PORT} working `)
    })
}

initServer()