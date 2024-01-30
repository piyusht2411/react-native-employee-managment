import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Attendance = model("Attendance", attendanceSchema);

module.exports = Attendance;