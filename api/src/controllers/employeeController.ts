import { RequestHandler } from 'express';
import Employee from '../db/schema';




export const addEmployee: RequestHandler = async (req, res, next) => {
    try{
        const {employeeId, employeeName, designation, joiningDate, dateOfBirth, salary, activeEmployee, phoneNumber,address } = req.body; 
        const newEmployee = new Employee({employeeId, employeeName, designation, joiningDate, dateOfBirth, salary, activeEmployee, phoneNumber,address});
await newEmployee.save();
res.status(201).json({message:"Employee added successfully", Employee:newEmployee});

    }catch(err:any){
        console.log(err);
        res.status(400).json({message: err.message});
    }

}
export const Employees: RequestHandler = async (req, res, next) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);

    }catch(err:any){
        console.log(err);
        res.status(400).json({message: err.message});

    }
}