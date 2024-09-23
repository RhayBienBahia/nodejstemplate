const { checkout } = require("../routes/router");

const m = {
    main:(req, res) =>{
        res.render('index');
    },
    blog:(req, res) => {
        res.render('blog');
    },
    singleblog:(req, res) => {
        res.render('singleblog');
    },
    contact:(req, res) => {
        res.render('contact');
    },
    login:(req, res) => {
        res.render('login');
    },
    tracking:(req, res) => {
        res.render('tracking');
    },
    cout:(req, res) => {
        res.render('cout');
    },
    shopping:(req, res) => {
        res.render('shopping');
    },
    confirm:(req, res) => {
        res.render('confirm');
    },
    elements:(req, res) => {
        res.render('elements');
    },
    category:(req, res) => {
        res.render('category');
    },
    details:(req, res) => {
        res.render('details');
    }

};

module.exports = m;