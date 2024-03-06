const mysql=require("mysql");
const jwt=require("jsonwebtoken");
const db =mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
exports.project=(req,res)=>{
    console.log(req.body);
    const  title=req.body.title;
    const Decription=req.body.Decription;
    const funding_goal=req.body.funding_goal;
    const category_name=req.body.category_name;
    const documentation=req.body.documentation;
    const current_Fund=req.body.current_Fund;
   
    db.query('SELECT  Decription FROM project WHERE Description=?',[Description],async(error,result)=>{
      if(error){
          console.log(error);
      }
      if(result.length>0){
    return res.render('project',{
      message:'this project has been alreadyy used '
    })
      }
  
      db.query('INSERT INTO project SET?',{name:name,Decription:Decription,funding_goal:funding_goal,category_name:category_name,documentation:documentation,current_Fund:current_Fund},(error,result)=>{
  if(error){
      console.log(error);
  }else{
      return res.render('project',{
          message:'Succefully register'
        }) ; 
  }
  })
  
  });
}











