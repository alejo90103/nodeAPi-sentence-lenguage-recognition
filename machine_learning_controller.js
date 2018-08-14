'use strict'

const machine = require('./machine_learning');

function getPost(req, res) {
  console.log('POST /api/machine_learning');
  console.log(req.body.text)

  machine.predict(req.body.text)
  return res.status(200).send(`All good`)
}

module.exports = {
    getPost
}
