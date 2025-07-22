const express = require('express')
const UserController = require('../Controllers/UserController')
const projectContoller=require('../Controllers/projectController')


const router = express.Router()
const jwtmiddle = require('../Middlewares/jwtMiddleware')
const multermiddle=require('../Middlewares/multerMiddlewareConfig')






//user
router.post('/login',UserController.userLogin)
router.post('/reg',UserController.UserRegister)
router.put('/updateprofile',jwtmiddle,multermiddle.single("profile"),UserController.profileUpdate)

//projects
router.post('/addproject',jwtmiddle,multermiddle.single("image"),projectContoller.addproject)
router.get('/allprojects',projectContoller.allProject)
router.get('/userproject',jwtmiddle,projectContoller.userProject)
router.get('/getproject/:id',jwtmiddle,projectContoller.getProjectWithId)
router.delete('/deleteproject/:id',jwtmiddle,projectContoller.deleteProject)
router.put('/editproject/:id',jwtmiddle,multermiddle.single("image"),projectContoller.updateProject)

module.exports = router