// index.js

const express = require('express');
const app = express();
const ejs = require('ejs');

// ejs를 view 엔진으로 설정
app.set('view engine', 'ejs'); 

// 정적파일 경로 지정
app.use(express.static('public'));


// home
app.get('/', function(req, res){
    // ejs 는 views 파일을 꼭 만들어서 그안에 넣어야함 폴더를 기준으로 파일이불러와지는거라
    res.render('pages/index.ejs');
})


// about
app.get('/about', function(req, res){
    res.render('pages/about.ejs')
})






// 서버 오픈
const port = 3001;
app.listen(port, () => {
    console.log(`server running at ${port}`);
})