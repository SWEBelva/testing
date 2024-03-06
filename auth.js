
const mysql=require("mysql");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const db =mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
exports.index=(req,res)=>{
    console.log(req.body);
    const  name=req.body.name;
    const email=req.body.Email;
    const Phone_number=req.body.Phone_number;
    const user=req.body.user;
    const residence_address=req.body.residence_address;
    const country=req.body.country;
    const cv=req.body.CV;
    const year=req.body.year;
    const CNI_number=req.body.CNI_number;
    const password=req.body.password;
    const passwordconfirm=req.body.passwordconfirm;
    const Certificate=req.body.Certificate;
    const  Source_of_fund=req.body.Source_of_fund;
    const  title=req.body.title;
    const Decription=req.body.Decription;
    const funding_goal=req.body.funding_goal;
    const category_name=req.body.category_name;
    const documentation=req.body.documentation;
    const current_Fund=req.body.current_Fund;
    db.query('SELECT email FROM user WHERE email=?',[email],async(error,result)=>{
        if(error){
            console.log(error);
        }
        if(result.length>0){
      return res.render('home',{
        message:'this email has been'
      })
        }
        else if(password!=passwordconfirm){
            return res.render('home',{
                message:'Password does not match'
              }) ;   
        }
        

 let hashedPassword = await bcrypt.hash(password,8);
  console.log(hashedPassword);

   db.query('INSERT INTO user SET?',{username:name,email:email,Phone_number:Phone_number,residence_address:residence_address,country:country,Source_of_fund:Source_of_fund,year_of_birth:year,password:password,CNI_number:CNI_number},(error,result)=>{
    if(error){
        console.log(error);
    }else{
        return res.render('home',{
            message:'Succefully register'
          }) ; 
    }
    res.redirect('/await?message=Data%20submitted%20successfully!');
   })
  
    });
    db.query('SELECT email FROM projectleader WHERE email=?',[email],async(error,result)=>{
        if(error){
            console.log(error);
        }
        if(result.length>0){
      return res.render('home2',{
        message:'this email has been'
      })
        }
        else if(password!=passwordconfirm){
            return res.render('home2',{
                message:'Password does not match'
              }) ;   
        }
    
    let hashedPassword = await bcrypt.hash(password,8);
    console.log(hashedPassword);
    
    db.query('INSERT INTO projectleader SET?',{name:name,email:email,Phone_number:Phone_number,residence_address:residence_address,country:country,year_of_birth:year,password:password,CNI_number:CNI_number,certificates:Certificate,cv:cv},(error,result)=>{
    if(error){
        console.log(error);
    }else{
        return res.render('home2',{
            message:'Succefully register'
          }) ; 
    }
    })
    
    });
}


