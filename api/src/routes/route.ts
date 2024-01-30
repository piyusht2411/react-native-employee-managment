import express, {Router, Express, Request, Response , Application} from 'express';
import { addEmployee, Employees } from '../controllers/employeeController';

const router = Router();
router.post('/addEmployee', addEmployee);
router.get('/employees', Employees);
export default router;