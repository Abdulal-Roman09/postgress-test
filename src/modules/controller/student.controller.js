import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { Student } from "../model/student.model.js";

export const createStudent = catchAsync(async (req, res) => {
  const { name, email, age, roll } = req.body;

  // Simple validation
  if (!name || !email || !roll) {
    return sendResponse(res, {
      success: false,
      message: "Name, email, and roll are required",
      statusCode: 400,
      data: null,
    });
  }

  // Create student (using your model method)
  const student = await Student.createStudent({ name, email, age, roll });

  // Send response
  sendResponse(res, {
    success: true,
    message: "Student is created",
    statusCode: 201,
    data: student,
  });
});

export const StudentController = {
  createStudent,
};
