import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { Student } from "../model/student.model.js";

export const insertStudentIntoDB = catchAsync(async (req, res) => {

  const { name, email, age, roll } = req.body;
  
  if (!name || !email || !roll) {

    throw new Error("data is not provided")
  }

  const student = await Student.createStudent({ name, email, age, roll });

  sendResponse(res, {
    success: true,
    message: "Student is created",
    statusCode: 201,
    data: student,
  });
});


const getStudentsFromDB = catchAsync(async (req, res) => {
  const students = await Student.getStudents();

  sendResponse(res, {
    success: true,
    message: "Students fetched",
    statusCode: 200,
    data: students,
  });
});

const getSingleStudentFromDB = catchAsync(async (req, res) => {
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

export const updateStudentInDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (Object.keys(data).length === 0) {
    sendResponse(res, {
      success: false,
      message: 'No fields provided to update',
      statusCode: 400,
    });
    return;
  }

  const updated = await Student.updateStudent(id, data);

  if (!updated) {
    sendResponse(res, {
      success: false,
      message: 'Student not found or nothing to update',
      statusCode: 404,
    });
    return;
  }

  sendResponse(res, {
    success: true,
    message: 'Student updated',
    statusCode: 200,
    data: updated,
  });
});

export const StudentController = {
  insertStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentInDB,
};

