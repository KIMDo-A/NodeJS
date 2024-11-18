//GET방식 예제1) 사용자가 입력한 값의 합을 구하는 서버페이지 만들기
console.log("확인");

const http = require("http");
const url = require("url");
//쿼리스트링 데이터 사용가능 모듈 : url

http.createServer(function(request, response){

    console.log("3003서버 확인")

    //첫번째 숫자와 두번째 숫자 가져오기
    console.log(request.url) // /?data1=1&data2=2 -> 한 문자열

    //문자열로된 쿼리스트링을 객체방식으로 변환
    let query = url.parse(request.url,true).query
    console.log(query) // { data1: '1', data2: '2' } -> 객체
    console.log(query.data1) //1 -> 문자임!!
    console.log(query.data2) //2

    //문자 -> 숫자 : parseInt()
    let num1 = parseInt(query.data1) //1 -> 숫자임!!
    let num2 = parseInt(query.data2) //2

    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}) //인코딩
    response.write(num1 +"+"+ num2 +"="+(num1+num2)); //1+2=3

    response.end();

}).listen(3003);
// = http://localhost:3003