import { gql } from "apollo-server-express";


const typeDefs =gql`
    scalar Date
    type Todo {
        id:ID,
        title:String,
        description:String,
        date:Date
    }

    type Query {
        getTodos:[Todo],
        getTodo(id:ID):Todo
    }

    type Mutation{
        addTodo(title:String,description:String,date:Date):Todo
        deleteTodo(id:ID):String
        todoUpdate(id:ID,title:String,description:String,date:Date):Todo

    }
`

export default typeDefs