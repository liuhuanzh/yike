var group = require('../models/group');
var groupdb = require('../models/groupdbserver');
var sockets = require('../models/socket');

module.exports = function(app,io){
	app.get('/groupchart', function(req,res) {
		var id = req.query.id;
	    group.findGroup(req,res,id);
	    //res.render('chart');
	});

	//获取群成员
	app.post('/showUser',function(req,res){
		var groupid = req.body.groupid;
		group.showUser(req,res,groupid);
	});
	//查询群数据库信息
	app.post('/showGroupMessage',function(req,res){
		var groupid = req.body.groupid;
		group.showGroupMessage(req,res,groupid);
		//res.send({success:true});
	});

	//群返回刷新群未读数
	app.post('/toyike',function(req,res){
		var groupid = req.body.groupid;
		var userid = req.session.userId;
		groupdb.updateStatus(groupid,userid);
		res.send({success:true});
	});

	//获取用户朋友列表
	app.post('/groupchart/showMyfriend',function(req,res){
		var id = req.session.userId;
		//login.showFriend(req,res,id);
	})
}
