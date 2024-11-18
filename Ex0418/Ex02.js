//사용자가 입력한 데이터 확인하기
//3002을 포트번호로 지니는 서버 생성하기

console.log("확인")
const http = require("http");
const url = require("url");
//url : 주소값에 있는 쿼리스트링 문자열을 "객체"형식으로 변환 모듈

http.createServer(function(request, response){
    //request(=req) : 요청정보 (누가,언제,어떤방식 ..)
    //response(=res) 순서 중요! 

    //요청 방식 확인 : request.method
    if(request.method == 'GET'){
        console.log('GET')

    }else if(request.method == 'POST'){
        console.log('POST')
    }

    console.log("3002서버접속 성공");

    //request : 요청정보
    //console.log(request)

    //request.url : 쿼리스트링으로 보낸 데이터를 "문자열"로 꺼내오겠다!
    console.log(request.url) //'?data=123' -> 하나의 문자열임!

    //123만 가져올 수 있도록 객체로 바꾸기 -> {data:123}
    //url.parse(request.url,true) : 쿼리스트링 부분만 사용하겠습니다
    let query = url.parse(request.url,true).query
    //쿼리스트링으로 보낸 문자열('?data=123')을 객체형식으로 변환하겠습니다!
    console.log(query) // { data: '123' }
    console.log(query.data) //123

    response.end();

}).listen(3002);