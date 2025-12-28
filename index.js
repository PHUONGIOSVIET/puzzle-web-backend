const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.post("/save",(req,res)=>{
  fs.writeFileSync("data.json", JSON.stringify(req.body));
  res.send({ok:true});
});

app.get("/load",(req,res)=>{
  if(!fs.existsSync("data.json")) return res.send({});
  res.send(JSON.parse(fs.readFileSync("data.json")));
});

app.listen(3001,()=>console.log("API running on 3001"));