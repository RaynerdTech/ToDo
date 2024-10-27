// route/user.js
const express = require('express');
const route = express.Router();
const { getUser, /*editUser,*/ deleteUser, updateUserInfo, updatePassword, updateRole } = require('../controllers/users');
const {verify} = require('../middleware/verify')


route.get('/users/:id', getUser);
route.delete('/delete', verify, deleteUser);
route.put('/update', verify, updateUserInfo);
route.put('/password', verify, updatePassword);
route.put('/change-role/:id', verify, updateRole);



module.exports = route;   
  