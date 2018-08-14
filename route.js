'use strict'

const express = require('express')
const router = express.Router()

const machineCtrl = require('./machine_learning_controller');

router.route('/')
    .post(machineCtrl.getPost)

module.exports = router
