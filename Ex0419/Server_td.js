//GET방식 예제2) 
//사용자가 접속한 파일이름이 쿼리스트링으로 숫자를 입력한만큼 td태그를 생성

const http = require("http");
const url = require("url");

http.createServer(function(request, response){

    console.log('3004서버 확인')

    //입력한 열 개수 꺼내오기
    console.log(request.url); // /?num=8
    let query = url.parse(request.url,true).query
    console.log(query) // { colNum: '8' }
    console.log(query.colNum) //8

    response.write("<table>")
    response.write("<tr>")
    for(let i=0; i<query.colNum; i++){
         response.write("<td>"+(i+1)+"</td>")
    }
    response.write("</tr>")
    response.write("</table>")
    
    response.end();

}).listen(3004);