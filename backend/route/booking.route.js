var express=require('express');
var bookingcontroller=require('../controller/booking.controller')
var router=express.Router();


router.post('/createbooking',bookingcontroller.createBooking);
router.get('/getbookings',bookingcontroller.getBookings);
router.delete('/deletebooking/:id',bookingcontroller.deleteBookings);
router.get('/getbooking/:id',bookingcontroller.getBooking);
router.get('getinvoice/:id',bookingcontroller.getInvoice);
module.exports=router;