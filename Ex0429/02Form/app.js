//npm i express
/*
    프론트에서 get방식으로 보낸 데이터를 처리해주는 서버
*/

const express = require("express");
const app = express();

//POST방식에서는 미들웨어에 POST데이터를 해석하라고 기능을 더해줘야함!
//필수로 등록해줘야함! -> qs모듈과 같은 역할
//꺼내올때는 req.body -> 데이터가 저장
app.use(express.urlencoded({extended : true}));
//url데이터해석해줘 모든데이터가 앱에 접근했을때 쿼리스트링데이터를 알아서 분석해줘
//extended : true -> querystring모듈 사용해줘


//app.get() / app.post() -> get방식과 post방식 각각 들어오는 요청을 따로 처리하겠다
//GET방식
app.get("/", (req,res)=>{
    //get방식으로 /여기로 데이터를 보내면,

    //let data = url.parse(req.url, true).query
    //express에서 get방식 데이터를 불러오는 방법
    //req.query -> 넘어온 데이터가 "객체"화되어서 출력
    let data = req.query
    console.log("get데이터",data); //get데이터 { name: '김도아' }
})

//POST방식
app.post("/",(req, res)=>{

    //let body = ""
    //req.on("data",(data)=>{
    //    body += data})
    let data = req.body
    console.log("post데이터", data); //post데이터 { name: '포스트김도아' }
})

app.listen(3000);
//프론트에서 3000포트로 데이터를 보내면 get에 들어옴