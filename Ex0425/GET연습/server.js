/*
    서버는 반드시 구조를 이해해야 한다.
    서버의 필수 요소는 1) 서버생성 2) 포트지정
    1. 서버 생성 모듈 -> http
    2. get방식 데이터 변형 -> url

*/

//html파일에서 입력했던 숫자를 서버에 보내고, 프론트에서 페이지를 만드는 것이 아닌! 서버에서 페이지 생성
//페이지를 서버에서 만든다 -> sso 서버사이드랜더링! 리액트를 쓸때는 뷰를 리액트가 다하기때문에 노드역할이 줄어듬
//프로젝트할때 디비연결정도


//GET방식
const http = require('http'); // const : 샹수 = 변하지 않는 수, 모듈을 불러와야해서 이름이 변하면 안됌!
const url = require('url');

http.createServer((req,res)=>{

    console.log('3000번 포트 실행');

    //프론트페이지에서 넘겨준 num을 활용해서 구구단 출력!
    console.log(req.url); ///?num=2

    //url속에 있는 데이터를 접근할 수 있도록 객체로 변환!
    let data = url.parse(req.url, true).query
    console.log(data); //{ num: '2' }
    console.log(data.num); //2

    //테이블 태그 생성
    res.write("<table>")
    for(let i=1; i<10; i++){

        //``, ${}
        res.write(`
            <tr>
                <td>${data.num} * ${i} = ${data.num * i}</td>
            </tr>          
            `)
        //res.write(data.num +"*"+i+"="+data.num * i)
    } 

    res.write("</table>")
    res.end();

}).listen(3000);

//GET방식에서는 데이터가 URL을 통해 넘어온다.
//URL모듈을 활용해서 컴퓨터가 이해할 수 있게 변형
//응답할 때는 res객체를 활용한다
//페이지 자체를 서버가 만드는 행위 -> 서버사이드랜더링 (Server-> 백페이지/ Client -> 프론트페이지)