import Todo from "./models/Todo.js"


const resolvers = {
    Query:{
        getTodos:async() =>{
            const todos=await Todo.find();
            return todos
        },
        getTodo:async(root,args) => {
            const todo= await Todo.findById(args.id)
            return todo
        }
    },
    Mutation:{
        addTodo:async(root,args) => {
            const newTodo=new Todo({title:args.title,description:args.description,date:args.date})
            await newTodo.save();
            return newTodo
        },
        deleteTodo:async(root,args) =>{
            await Todo.findByIdAndDelete(args.id);
            return "Todo Deleted"
        },
        todoUpdate:async(root,args) => {
            const {id,title,description,date} = args;
            const willUpdate={};

            if(title !=undefined) {
                willUpdate.title=title;                        
            }
            if(description !=undefined) {
                willUpdate.description=description;
            }
            if(date !=undefined) {
                willUpdate.date=date;
            }

            const todo=await Todo.findByIdAndUpdate(id,willUpdate,{new:true})

            return todo;
        }
    }
}

export default resolvers
