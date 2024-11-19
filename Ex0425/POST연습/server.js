//1. 서버생성, 2. 포트번호 동일
//POST방식

const http = require("http");
const qs = require("querystring");
//url은 get방식의 데이터를 변형하기 위한 모듈 -> post는 다름
//querystring : post방식의 body데이터를 객체 형태로 변형하는 모듈

http.createServer((req,res)=>{

    console.log("3000번 포트 실행!")

    //POST방식은 데이터가 body에 담겨서 넘겨옴
    //패킷화 -> 조각조각 넘어온다(보안 때문)
    //1. 패킷화된 데이터를 하나의 변수에 합치기
    //2. 변수를 객체로 변환

    //1. 패킷화된 데이터를 하나로 합치는 작업
    let body = ""; //가져온 데이터를 담아줄 빈 변수 생성
    req.on("data",(data)=>{
        body += data; //body=body+data
        console.log(body) //num=3
    })

    //2.데이터를 객체형태로 변환
    req.on("end",()=>{
        let data = qs.parse(body);
        console.log(data); //{ num: '3' }

        res.write("<table>")
        for(let i=1; i<10; i++){
            res.write(`
                <tr>
                    <td>${data.num} * ${i} = ${data.num * i}</td>
                </tr>
            `)
        }
        res.write("</table>")
        res.end();
    })

}).listen(3000);