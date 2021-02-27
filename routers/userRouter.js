const express = require('express')
const userRouter = express.Router()
const userModel = require('../models/userModel')

//// get all user data /////
userRouter.get('/', async (req, res) => {
    try{
        const users = await userModel.find()
        res.json(users) 
    } catch(err) {
        res.send('Error' + err)
    }
})

//// get specified user data /////
userRouter.get('/:id', async (req, res) => {
    try{
        const user = await userModel.findById(req.params.id)
        res.json(user) 
    } catch(err) {
        res.send('Error' + err)
    }
})

//// send data to server ////
userRouter.post('/', async (req, res) => {
    const user = new userModel({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website
    })

    try{
        const saveUser = await user.save()
        res.json(saveUser)
    } catch(err) {
        res.send('error while posting. '+ err)
    }
})

//// update data ////
userRouter.put('/:id', async (req, res) => {
    
    const {
        name,
        userName,
        email,
        phone,
        website
    } = req.body

    try{
        const user = await userModel.findById(req.params.id)
        
        user.name = name
        user.userName = userName
        user.email = email
        user.phone = phone
        user.email = email

        const updateUser = await user.save()
        res.json(updateUser) 
    } catch(err) {
        res.send('error while updating. ' + err)
    }
})

//// delete data ////
userRouter.delete('/:id', async (req, res) => {
    try{
        const user = await userModel.findById(req.params.id)

        const userDelete = await user.remove()
        res.json(userDelete) 
    } catch(err) {
        res.send('error while deleating. ' + err)
    }
})

module.exports = userRouter