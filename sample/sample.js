var tencentyoutuyun = require('..');
var conf  = tencentyoutuyun.conf;
var youtu = tencentyoutuyun.youtu;

// 开发者　和应用信息
var appid = '';
var secretId = '';
var secretKey = '';
var userid = '';


conf.setAppInfo(appid, secretId, secretKey, userid)



// 人脸检测
//youtu.detectface('a.jpg', function(data){
//    console.log("detectface:" + JSON.stringify(data));
//});

// 其他函数调用 类似

//youtu.addface('111', ['a.jpg','a.jpg'], function(data){
//    console.log("addface:" + JSON.stringify(data));
//TencentYouTu});

youtu.facecompare('a.jpg', 'a.jpg', function(data){
    console.log("detectface:" + JSON.stringify(data));
});
