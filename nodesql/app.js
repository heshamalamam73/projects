 const express = require('express'); 
 const app = express();
 const port = 3000;
 const mysql = require('mysql');


const db = mysql.createConnection({
    user:'mido',
    database:'momuzio',
    user:'mido',
    password:'mido2018'
    
})

db.connect((err)=>{
    if(err){
        console.log(err);    
        }

})
app.get('/' , function(req,res) {
    res.send("home page");
})




 app.listen(port, () => {
     console.log(`Server started on port${port}`);
 });