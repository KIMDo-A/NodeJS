//= server.js (서버 메인페이지)
/*
    Express 프레임워크
    - 기존 Node로만 개발했던 코드를 훨씬 간결하고, 유지보수 하기 편하게 사용하는 프레임워크
    - Node.js기술을 그대로 다 사용이 가능
    - 역할이 서버라는건 공통! 
    1) 서버를 생성 (http는 노드를 위한 모듈임)
    2) 포트번호를 지정
*/

//서버를 생성하기 위해서 express 모듈을 호출
//express안에 url, querystring, fs..다 들어있음!
const express = require("express");

//미들웨어 -> 모든 요청과 응답을 한군데에서 통제하는 역할 -> 메인서버의 역할
const app = express(); //express안에 있는 모든 기능을 넣어주겠다

//정적인 파일을들을 미들웨어 등록
//app.use(express.static(__dirname));
//use : 미들웨어야 사용해~ +기능을 덧붙이는 의미!
//정적인파일 가져올때 꼭 이 경로(__dirname)까지 와!
//정적인파일들은 "public폴더"에 관리 이미지, html, css, js..)
app.use(express.static("public"));

//1) 서버를 생성
app.get("/",(req,res)=>{
    //"/" : 기본경로(메인url로) 들어왔을때 이렇게 처리해~

    console.log("3000포트 서버생성!")
    // res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
    // res.write("<h1>서버가 만들어졌습니다</h1>")
    // res.end();
    // res.send("<h1>보내진 페이지</h1>")
    //write vs send
    //write -> 인코딩(컨텐츠 헤드작성) / end를 반드시 작성 / 장) 여러줄을 보낼 수 있다
    //send -> end, write, head를 하나에 묶어서 사용/ 단) 여러줄을 보낼 수 없다 -> 템플릿(백틱기호 ``)으로 여러줄 사용
    //하지만, 만들어진 페이지인 파일을 보내는 것이 효율적임!

    //html파일을 전송하는 방법
    //express는 파일을 불러들일때 반드시 "★절대경로★"를 작성
    //주의점! 사용자마다 절대경로가 다르기 때문에 알아서 변할 수 있도록 작업
    //__dirname -> 컴퓨터의 현재 작업중인 폴더의 절대경로를 알아오는 키워드
    //res.sendFile('index.html') //에러발생 -> express는 절대경로를 적어야함
    //res.sendFile('./index.html') //-> 상대경로
    //res.sendFile("C:/Users/jgh/Desktop/NodeStudy/Ex0429/01기초/index.html"); //절대경로! 단)내컴퓨터에서만 실행가능함
    console.log(__dirname) //현재 작업하고있는 여기 절대경로 C:\Users\jgh\Desktop\NodeStudy\Ex0429\01기초
    res.sendFile(__dirname+"/index.html")

})

//2) 포트를 지정
//포트 지정은 반드시 페이지 최하단에 작성
app.listen(3000);