console.log("app.js file for node");
console.log(new Date());
console.log("Added Line 3");
console.log("edited in browser");
const app=require('express');
app.get('/',(req,res)=>{
    res.json({message:"server running"});
});
app.listen(7000,()=>{
    console.log("server running on 7000");
});
