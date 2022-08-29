const { response} = require('express')

const usuariosGet =   (req, res = response ) => {

    const { q, nombre = 'no name', apikey } =req.query

    res.send({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
  }

const usuariosPost =   (req, res = response ) => {
  
  const { nombre, Edad } = req.body;
  
  res.json({
      msg: 'post API - Post',
      nombre,
      Edad
  })
}

  
const usuariosPut =   (req, res = response ) => {

    const {id} = req.params

    res.send({
        msg: 'get API - Put',
        id
    })
  }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}