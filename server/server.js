const express = require('express');
const cors = require('cors')
const db = require('./connection.js')
const bodyParser = require('body-parser')
const todoModel = require('./todo_schema')

const app = express();
app.use(cors())
db()
app.listen(8080, () => {
 console.log("Server started on port 8080")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/todo/add', async (req, res) => {  
    try {
    let newTodo = new todoModel();  
    newTodo.title = req.body.title;  
    newTodo.completed = false;  
    await newTodo.save();
    res.send('Bonjour')
    }catch(err){
        res.send(err)
        console.error(err)
    }

})

app.get('/todo/completed', async (req, res) => {  
        try{
         let todos = await todoModel.find()
            res.json(todos);
        //res.send('Salut') 
        }catch(err){
            res.send(err)
            console.error(err)
        }      
})
app.put('/todo/complete/:id', async (req, res) => {  
    try {
     await todoModel.findByIdAndUpdate(req.params.id, 
        {title: req.body.title})
        res.send("update");
    }catch(err){
        res.send(err)
    }
})

 app.delete('/todo/:id', async (req, res) => {  
       
        try{
         let query = { _id: req.params.id }  
         await todoModel.findByIdAndDelete(query) 
            res.send("Todo deleted")   
        }catch(err){      
            res.send(err)
        }       
}) 


