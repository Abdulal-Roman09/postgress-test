import express from 'express'
import { StudentController } from '../controller/student.controller.js'

const router = express.Router()

router.post("/create-student", StudentController.insertStudentIntoDB)

router.get('/students', StudentController.getStudentsFromDB)

router.get('/students/:id', StudentController.getSingleStudentFromDB)

router.patch('/students/:id', StudentController.updateStudentInDB)


export const studentRoutes = router
