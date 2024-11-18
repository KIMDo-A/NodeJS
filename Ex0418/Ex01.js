//node 기반으로 BackEnd 서버 만들기

console.log("첫 노드 실행");

//require : 모듈을 가져오는 기능 (react의 import와 동일!)
//http 모듈 : 클라이언트에서 요청을 받고 응답해주는(요청을 처리한다) 서버의 기본 모듈 
const http = require("http");

//http.createServer : 서버생성 (클라이언트에서 접근(요청)할수 있게끔 서버를 만들어 준다)
http.createServer(function(request, response){
    //function(매개변수2가지){} : 서버에 접근하면, 이 함수 실행
    //createServer함수안에 또 함수 실행  => 콜백함수(특정 함수 안에서 호출되어 실행되어지는 함수)
    //request : 요청(클 -> 서버)에게 보낸 정보 -> 주소 입력
    //response : 응답(서버 -> 클)

    //요청 정보 확인(어느 컴퓨터에서 요청을 했는지!)
    let ip = request.connection.remoteAddress //요청을 보낸 컴퓨터의 주소값
    console.log(ip)
    if(ip=="::ffff:192.168.219.52"){    //선생님이 접속했을때
        console.log("선생님 환영합니다")
    }else if(ip=="::1"){                //내가 접속했을 때
        console.log("나야~")
    }else{
        "손님 환영합니다"
    }

    // 응답 콘솔창
    console.log("서버 실행중 입니다")

    //200 -> 정상 응답 (할때, 인코딩utf-8)
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}) //인코딩 -> 글자가안깨짐
    response.write("<h1>응답성공</h1>") //화면에 보임 �묐떟�깃났

    response.end();
    //여기까지 응답을 마무리 하겠다! (하지않으면 계속 돌아감)
    //입력해야 클라이언트는 서버가 다 보여줬다는 것을 알 수 있음!

}).listen(3001);
//listen(포트번호) : 포트번호 설정
//(react가 3000이였음!)
//URL : 해당하는 주소로 컴퓨터 서버에 접근하겠습니다(요청을 보내겠습니다)
//http://localhost:3001 -> 이 서버 접근하는 방법 : 요청 보내주기(url입력)
//http://127.0.0.1:3001
//http:172.30.120.111:3001
//localhost : cmd-ipconfig-IPv4주소