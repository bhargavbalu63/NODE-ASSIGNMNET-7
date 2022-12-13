const mongoose= require('mongoose')

const studentSchema= new mongoose.Schema({
    id: {type:Number, unique:true, require:true},
    name:{type:String, require:true},
    currentClass:{type:Number, require:true},
    division:{type:String,require:true}
})

const studentInfo =mongoose.model('studentInfo', studentSchema)

module.exports = studentInfo