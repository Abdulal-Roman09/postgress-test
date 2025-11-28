import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { Student } from "../model/student.model.js";

export const createStudentIntoDB = catchAsync(async (req, res) => {

  const { name, email, age, roll } = req.body;

  // Simple validation
  if (!name || !email || !roll) {

    throw new Error("data is not provided")
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
  createStudentIntoDB
};
