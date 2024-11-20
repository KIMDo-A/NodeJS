//app.js 메인서버
//서버를 실행하기 위한 Main파일(express 미들웨어 설정)

const express = require("express"); //express모듈 호출
const app = express(); 
//★app : 실질적으로 일을 함, 연결만하는 통로역할!(=미들웨어)

app.get("/",(req,res)=>{
    //요청이 기본루트로 들어온다면, 요청과 응답을 담아서 서버를 생성해주세요~
    console.log("서버 생성!")

    //main.html파일을 호출(사용자에게 보여줌->res)
    res.sendFile(__dirname+"/public/main.html") //dirname은 라우터폴더까지가져옴!
})

app.get("/baseball",(req,res)=>{
    res.sendFile(__dirname+"/public/baseball.html") 
})

app.get("/soccer",(req,res)=>{
    res.sendFile(__dirname+"/public/soccer.html") 
})

//포트 지정
app.listen(3000);