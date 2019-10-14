var express = require('express')
var router = express.Router()
const { authController } = require('../1.controllers')


router.get('/', authController.title)

router.get('/moviesdata', authController.moviesdata)

router.post('/inputmovies', authController.inputmovies)

router.put('/editmovies', authController.editmovies)

router.delete('/deletemovies/:movieId', authController.deletemovies)


router.get('/moviecategories', authController.moviecategories)

router.post('/inputcategories', authController.inputcategories)

router.put('/editcategories', authController.editcategories)

router.delete('/deletecategories/:categoryId', authController.deletecategories)


router.get('/moviesdropdown', authController.moviesdropdown)

router.get('/categoriesdropdown', authController.categoriesdropdown)

router.post('/inputconnection', authController.inputconnection)

router.get('/displayconnection', authController.displayconnection)

router.delete('/deleteconnection/:connectionId', authController.deleteconnection)




// router.get('/getsearch', authController.getsearch)






module.exports = router