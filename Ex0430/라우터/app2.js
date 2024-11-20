//router를 활용해서 파일의 경로를 지정해주기

const express = require("express");
const app = express(); 
const router = express.Router();
//★router : express안에 있는 router기능 가져오기

app.use(router);
//app 미들웨어에 router를 사용하겠다고 등록!

//app -> router로 바꾸기
router.get("/",(req,res)=>{
    
    console.log("서버 생성!")
    res.sendFile(__dirname+"/public/main.html") 
})

router.get("/baseball",(req,res)=>{
    res.sendFile(__dirname+"/public/baseball.html") 
})

router.get("/soccer",(req,res)=>{
    res.sendFile(__dirname+"/public/soccer.html") 
})

app.listen(3000);