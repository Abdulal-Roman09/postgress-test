import express from 'express'
import { StudentController } from '../controller/student.controller.js'

const router = express.Router()

router.post("/create-student", StudentController.createStudentIntoDB)


export const studentRoutes = router
