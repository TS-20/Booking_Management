const express = require('express');
const router =express.Router();
const {verifyToken , verifyAdmin} = require('../middleware/auth')
const cityController = require('../controller/cityController');
router.get('/',cityController.getCities);
router.get('/top', cityController.getTopCities);
router.post('/',verifyToken,verifyAdmin,cityController.createCity);//admin
router.put('/:id',verifyToken,verifyAdmin,cityController.updateCity);//admin
router.delete('/:id',verifyToken,verifyAdmin, cityController.deleteCity);//admin
router.patch('/:id/thumbnail',verifyToken,verifyAdmin,cityController.setThumbnail);//admin

module.exports = router;