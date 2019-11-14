const express = require('express')
const userRouter = require('../services/user.ctrl.js')
const fileDeal = require('../services/upload.ctrl.js');
const wechatRouter = require('../services/wechat.ctrl.js');
const thirdDataRouter = require('../services/third.ctrl.js')
const apiRouter = express.Router()


apiRouter.use('/user', userRouter)
apiRouter.use('/file', fileDeal)
apiRouter.use('/wechat', wechatRouter);
apiRouter.use('/thirdData', thirdDataRouter)

module.exports = apiRouter;
