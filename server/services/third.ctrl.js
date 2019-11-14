/**
 * @desc 课程模块控制器
 * @dateTime 2018-11-28
 **/

var express = require('express');
var request = require('request');
var path = require('path')
const thirdRouter = express.Router();

/*
 * 获取天气接口
 * */
thirdRouter.post('/getWeather',async(req, res) => {
  var props = req.body;
  var url = 'http://wthrcdn.etouch.cn/weather_mini?city=北京';
  request({
      url: url,
      method: "get",
      headers: {
          "content-type": "application/json",
      }
  }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          console.log(body) // 请求成功的处理逻辑
          res.json({
            code:200,
            data:body
          });
      }
  });
})
module.exports = thirdRouter;
