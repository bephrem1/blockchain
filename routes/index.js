const express = require('express');
const router = express.Router();

const Info = require('../models/info'); // Import Info object with schema already defined
const credentials = require('../credentials');



// GET '/'
router.get('/', function(req, res, next) {
    return res.send("hello world");
});

// User.findOne({
//     resetPasswordToken: req.params.token,
//     resetPasswordExpires: {
//         $gt: Date.now()
//     }
// }, function(err, user) {
//     if (!user) {
//         req.flash('error', 'Password reset token is invalid or has expired.');
//         return res.redirect('back');
//     }
//
//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//
//     //Re-persist user with new credentials and invalidate token and expiration date
//     user.save(function(err) {
//         done(err, user);
//     });
// });

module.exports = router;
