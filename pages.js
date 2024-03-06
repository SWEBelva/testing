const express=require("express");
const router=express.Router();
router.get("/", (req, res) => {
    //res.send('Hello World!');
    res.render("index");
});
router.get("/home", (req, res) => {
    //res.send('Hello World!');
    res.render("home");
});
router.get("/type", (req, res) => {
    //res.send('Hello World!');
    res.render("type");
});
router.get("/home2", (req, res) => {
    //res.send('Hello World!');
    res.render("home2");
});
router.get("/dashboard", (req, res) => {
    //res.send('Hello World!');
    res.render("dashboard");
});
// Route to serve check team interface

router.get('/dashboard', (req, res) => {
    const message = req.query.message || 'Welcome to the dashboard!';
    res.render('dashboard', { message });
  });
  
router.get("/await", (req, res) => {
    res.render( "await");
});
router.get("/leaderdashboard", (req, res) => {
    res.render( "leaderdashboard");
});
router.get("/project", (req, res) => {
    res.render( "project");
});

module.exports=router;