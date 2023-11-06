import express from 'express'
import createUser from './user/createUser'
import findAllUser from './user/findAllUsers'
import deleteUser from './user/deleteUser'
 
const userRoutes = express.Router();

userRoutes.route("/new").get(function (req, res) {
    const {name, email} = req.body
    const newUser = createUser(name, email)
    res.json(newUser)
});
 
userRoutes.route("/all").get(function (req, res) {
    const allUsers = findAllUser()
    res.json(allUsers)
});
 
userRoutes.route("/delete/:id").delete((req, res) => {
    const { id } = req.params;
    const deletedUser = deleteUser(id)
    res.json(deletedUser)
});
 
export default userRoutes;