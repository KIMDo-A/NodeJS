const http = require("http");
const fs = require("fs").promises

http.createServer(async(req,res)=>{

    console.log("3000번 포트 실행!")

    //요청해서 들어온 경로가 soccer이라면 -> soccer.html리턴
    //요청해서 들어온 경로가 baseball이라면 -> baseball.html리턴
    console.log(req.url); //-> /soccer

    //req.url이 값이 /soccer랑 같다면 soccer.html리턴
    //req.url이 값이 /baseball랑 같다면 baseball.html리턴
    // let baseballPage = await fs.readFile("./baseball.html");
    // let soccerPage = await fs.readFile("./soccer.html");

    // if(req.url == '/soccer'){
    //     res.write(soccerPage)
    // }else if(req.url == '/baseball'){
    //     res.write(baseballPage)
    // }
    // res.end()

    let data = ""
    if(req.url == '/soccer'){
        data = await fs.readFile("./soccer.html");
    }else if(req.url == '/baseball'){
        data = await fs.readFile("./baseball.html");
    }
    res.write(data);
    res.end()

}).listen(3000);