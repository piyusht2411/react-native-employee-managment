import { Schema, model } from 'mongoose';

interface Employee {
    employeeId: string;
    employeeName: string;
    designation: string;
    joiningDate: string;
    dateOfBirth: string;
    salary: Number;
    activeEmployee: Boolean;
    phoneNumber:Number;
    address:String;
    createdAt:Date;


  
  }

const employeeSchema = new Schema({
    employeeId:{
        type:String,
        required:true,
        unique:true,
    },
    employeeName:{
        type:String,
        require:true
    },
    designation:{
       type:String,
       required:true 
    },
    joiningDate:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    activeEmployee:{
        type:Boolean,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export default model<Employee>('User', employeeSchema)

