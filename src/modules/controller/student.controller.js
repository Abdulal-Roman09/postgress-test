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

export const getStudentsFromDB = catchAsync(async (req, res) => {
  const students = await Student.getStudents();

  sendResponse(res, {
    success: true,
    message: "Students fetched",
    statusCode: 200,
    data: students,
  });
});

export const getSingleStudentFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const student = await Student.getStudentById(id);

  if (!student) {
    sendResponse(res, {
      success: false,
      message: "Student not found",
      statusCode: 404,
    });
    return;
  }

  sendResponse(res, {
    success: true,
    message: "Student fetched",
    statusCode: 200,
    data: student,
  });
});

// include new handlers in controller export
StudentController.getStudentsFromDB = getStudentsFromDB;
StudentController.getSingleStudentFromDB = getSingleStudentFromDB;
