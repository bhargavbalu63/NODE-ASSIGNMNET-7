const express = require('express')

const app = express()
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json())



const port = 8080
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/School',{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log('connected to DB');})
// Parse JSON bodies (as sent by API clients)

const StudentsRoute= require('./routes/routes')
app.use('/', StudentsRoute)

app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;   
















// app.get('/api/student',async (req,res)=>{
    
//     try {
//           const blog= await studentArray
         
//         res.json(
//             {
//                 blog:studentArray
//             }
//         )
        
//     } catch (e) {
        
//     }

// })

// app.get('/api/student/:id',async (req,res)=>{
   
//     try {
       
//           const blog= await studentArray.find( each  => each.id == req.params.id)
//           console.log(req.params.id)
//         res.json(
//             {
                
//                 blog:studentArray
//             }
//         )
        
//     } catch (e) {
        
        
//     }

// })
// app.post('/api/student',async (req,res)=>{
//     try {
        
//           const blog= await studentArray.push(req.body)
         
//         res.json(
//             {
//                 blog:studentArray
//             }
//         )
        
//     } catch (e) {
        
//     }

// })
// app.put('/api/student/:id', (req,res)=>{
   
//     try {
       
//           const blog=  studentArray.findIndex( each  => each.id == req.params.id)
//          studentArray[blog] =req.body
//         res.json(
//             {
                
//                 blog:studentArray
//             }
//         )
        
//     } catch (e) {
        
//     }

// })