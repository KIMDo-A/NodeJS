//라우터의 역할만 담당
//app.js -> 메인 서버의 역할
//router.js -> 경로에 관련된 모든 업무를 담당

const express = require("express"); 
const router = express.Router();

const path = require("path"); 
//★path : 라우터와 같이 사용해 "경로"를 제작해주는 라이브러리
//라우터를 활용할 때는 파일의 경로를 수정해주는 경우가 많다!!!

router.get("/",(req,res)=>{
   
    console.log("app3.js서버")
    //res.sendFile(__dirname+"/public/main.html")
    //-> 오류 routes안에서 public을 찾고있기 때문!
    res.sendFile(path.join(__dirname,"..","public","main.html"))
    //path야 내가 원하는 경로들을 묶고 싶어!
    //..(나가기)을 쓰려면 path사용! /를 쓰지 않아도 됌!
})

router.get("/baseball",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","baseball.html")) 
})

router.get("/soccer",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","soccer.html")) 
})

module.exports = router;
//우리가 모듈을 만들었으므로, 모든 파일에서 해당 코드를 사용할 수 있게끔 작성★
//반드시 모듈의 마지막에 작성, router라는 이름으로 ~
//모듈명은 반드시 파일명과 같게 작성할 것! -> 누구나 알아 볼 수 있게!