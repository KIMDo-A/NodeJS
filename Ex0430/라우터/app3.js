//app과 router분리하기!(routes폴더)

const express = require("express");
const app = express(); 

const router = require("./routes/router");
//★require = import 

app.use(router);
//app 미들웨어에 router를 사용하겠다고 등록! -> app꺼

app.listen(3000);