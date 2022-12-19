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
    const name = '홍길동';
    const title = '홈페이지'
    // 변수값을 홈페이지에 전달
    res.render('pages/index.ejs', { title,name });
    /* 원래문법 */
    // title: title
    // 변수: 값 이름은똑같지만 실제로는 다른거


    
})

// 요청
app.get('/create', function(req, res){
    // form
    const title = 'About'
    let name = req.query.name;
    console.log(name);
    res.render('pages/about.ejs', {title, name});
})


// about
/* app.get('/about', function(req, res){
    res.render('pages/about.ejs', {
        title: 'About',
        // name: '홍길동',
        age: 30,
        adress: '안양',
    })
})
 */

app.get('/coffee', function(req, res){
    const title = 'Coffee'
    let name = req.query.name;
    res.render('pages/detail.ejs', { title, name});
})





// 서버 오픈
const port = 3001;
app.listen(port, () => {
    console.log(`server running at ${port}`);
})