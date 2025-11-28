import express from 'express'
import { StudentController } from '../controller/student.controller.js'

const router = express.Router()

router.post("/create-student", StudentController.createStudentIntoDB)

router.get('/students', StudentController.getStudentsFromDB)
router.get('/students/:id', StudentController.getSingleStudentFromDB)


export const studentRoutes = router
