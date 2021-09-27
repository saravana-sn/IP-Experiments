const mysql = require('mysql');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee'
    }
)

// db.connect(err=>
//     {
//         if(err)
//           throw err;
//         console.log("MySQL Database Connected");
//         db.query("CREATE DATABASE Employee" , err=>
//         {
//             if(err)
//               throw err;
//             console.log("Database Created Sucessfully.");
//         })
//     })

// db.connect(err=>{
//     if(err)
//       throw err;
//     console.log("Connected");
//     var q="CREATE TABLE Details(Name varchar(150), Address varchar(20))";
//     db.query(q,err=>{
//         if(err)
//          throw err;
//         console.log("Table Created");
//     })
// })

// db.connect(err=>{
//     if(err)
//       throw err;
//     console.log("Connected");
//     var q="Insert into Details(Name, Address) values ('Raj','Malad')";
//     db.query(q,err=>{
//                 if(err)
//                  throw err;
//                 console.log("Values inserted");
//     })

// })

db.connect(err=>{
    if(err)
      throw err;
    console.log("Connected");
    var q="Insert into Details(Name, Address) values ('Rahul','Goregaon')";
    db.query(q,(err,result)=>{
                if(err)
                 throw err;
                console.log("Values inserted");
                console.log(result.affectedRows);
    })

})