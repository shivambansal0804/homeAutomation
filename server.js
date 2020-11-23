const express = require("express");
const app = express();
const PORT= process.env.PORT|| 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/Public"));
// app.get('/dBoard',(req,res)=>{

//   res.sendFile(__dirname+ "/Public/dashBoard.html");
// });
app.listen(PORT, () => {
  console.log("server started");
});
