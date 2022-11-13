const express1 = require("express")
const cors1 = require("cors")
const app1 = express1();

var corsopt = {
    origin: "http://localhost:8081"
};
app1.use(cors1(corsopt))
app1.use(express1.json());

app1.use(express1.urlencoded({extended: true}));

app1.get('/',(req,res)=>{
    res.json({message: "route working"});
});
const PORT = process.env.PORT || 7890;
require("./app/routes/tutorial.routes.js")(app1);
app1.listen(PORT, () => {
    console.log("port is working")
});