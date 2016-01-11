/**
 * Created by joelmiller on 1/8/16.
 */
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var router = express.Router();

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});

router.get('/', function(request, response){
	console.log('Index router hit');
	response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.post('/add', function(request, response){
	var kitty = new Cat({name:request.body.name});

	kitty.save(function(err){
		if(err){
			console.log('Meow, there was an error', err);
		}
		//response.send(kitty.toJSON());
	})
});

router.get('/cats', function(request, response){
	Cat.find({}).exec(function(err, cats){
		if(err){
			console.log('Meow, there was an error', err);
		}

		console.log('cats', cats);
		response.send(cats);
	})
});

module.exports = router;