const router= require('express').Router()   
const StudentInfo= require('../models/studentInfo')   

let value = 1
router.get('/api/student', async (req, res)=>
{

    try {
        const data= await StudentInfo.find()
        res.status(200).json(
            {
                 success: 'success',
                 data
            }
        )

        
    } catch (e) {
        res.json(
            {
                status:'failed',
                message:e.message
            }
        )
       
        
    }
    

})


router.get('/api/student/:id',async(req,res)=>{
    try{
         
         const data= await StudentInfo.find({id:req.params.id});
         //console.log(data.length);
         if(data.length){res.status(200).json({
             status:"success",
             data
         })
     }else{
         res.status(404).json({
            error:"invalid input"
         })
     }
 
     }catch(e){
         res.status(500).json({
             status:"failed",
             message:e.message
         })
 
     }
 })
router.post('/api/student', async (req, res)=>
{

    try {
        req.body.id= value++
        const data= await StudentInfo.create(req.body)
        res.setHeader('content-type','application/x-www-form-urlencoded')
        res.status(200).json(
            {
                 success: 'success',
                 data
            }
        )

        
    } catch (e) {
        res.status(400).json(
            {
                status:'failed',
                message:e.message
            }
        )
       
        
    }
    

})


router.put('/api/student/:id', async (req, res)=>
{

    try {
        const data= await StudentInfo.updateOne({id:req.params.id}, req.body)
        
        res.setHeader('content-type','application/x-www-form-urlencoded')
        if(req.body.name&&req.body.currentClass&&req.body.division){
        
            res.status(200).json({
               data
               })
}else{res.status(400).send('Enter required fields');}

        
    } catch (e) {
        res.status(400).json(
            {
                status:'failed',
                message:e.message
            }
        )
       
        
    }
    

})


router.delete('/api/student/:id', async (req, res)=>
{

    try {
       
        
        const data2=await StudentInfo.find({_id:req.params.id});
        const data= await StudentInfo.deleteOne({_id:req.params.id});
        if(data2.length){
             res.status(200).json({
              data
           })
      }else{res.status(404).send('Invalid id');}

        
    } catch (e) {
        res.status(500).json(
            {
                status:'failed',
                message:e.message
            }
        )
       
        
    }
    

})
module.exports = router;