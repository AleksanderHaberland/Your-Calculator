const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/index2', (req, res) => {
    res.render('index2');
});

router.get('/oblicz', (req, res) => {
    res.render('oblicz');
});

router.get('/wzory', (req, res) => {
    res.render('wzory');
});

router.get('/fl_Kal', (req, res) => {
    res.render('fl_Kal');
});

router.get('/fk_Kal', (req, res) => {
    res.render('fk_Kal');
});

router.get('/dn_Kal', (req, res) => {
    res.render('dn_Kal');
});



module.exports = router;