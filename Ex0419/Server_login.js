//POST방식 예제1) 로그인 성공/실패
//사용자 입력 ID : smhrd, PW : 123 --> 로그인 성공!
//                                --> 로그인 실패!

//POST방식
const http = require("http");
const url = require("url");
const qs = require('querystring');
//querystring 모듈 : post방식으로 보낸 데이터(문자열)을 객체형식으로 변환

http.createServer(function(request,response){

    let body = "";

    //1. (클->서) 요청데이터 전송 확인 
    // -> 영상,큰데이터가 있을 수 있기 때문에 전부 다 들어왔는지 확인
    request.on('data',function(data){
        //data : 사용자가 서버로 보낸 데이터

        body+=data //body=body+data -> 데이터 누적
        console.log(body); //id=smhrd&pw=123
    })

    //2.(한 문자열이기 때문에) 데이터 파싱
    //-> 데이터를 다 받아왔다면 사용하기 편하게끔 변환
    request.on('end',function(){

        let postData = qs.parse(body);
        console.log(postData); //{ id: 'smhrd', pw: '123' }
        console.log(postData.id) //smhrd
        console.log(postData.pw) //123

        response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}) //인코딩 
        if(postData.id == 'smhrd' && postData.pw == '123'){
            response.write("로그인 성공!!")
        }else{
            response.write("로그인 실패!!")
        }

        response.end();
    })

}).listen(3005);


//GET방식 -> 로그인과 같은 중요한정보에서 사용X
// http.createServer(function(request,response){

//     console.log("3005번 서버 확인!")

//     console.log(request.url) ///?id=smhrd&pw=123

//     let query = url.parse(request.url, true).query
//     console.log(query) //{ id: 'smhrd', pw: '123' }
//     console.log(query.id) //smhrd
//     console.log(query.pw) //123

//     response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}) //인코딩 
//     if(query.id=="smhrd" && query.pw=="123"){
//         response.write("로그인 성공")
//     }else{
//         response.write("로그인 실패")
//     }

//     response.end();

// }).listen(3005);