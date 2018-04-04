const express = require('express');
const router = express.Router();

var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var db = mongojs('mongodb://Skairsnik:pass1@ds139585.mlab.com:39585/tack-it');

/* GET api listing. */

router.get('/', (req, res) =>
{
	res.send('api works');
}); // end router.get()

// Get Messages
router.get('/messages/', function(req, res)
{
	db.messages.find(function (err, messages)
	{
		if(err)
		{
			console.log("ERROR:" + err);
			res.send(err);
		}// end if
		else
		{
			res.json(messages);
		}// end else
	}); // end db.messages.find()
});// end router.get()

router.get('/messages/:param/', function (req, res)
{
	db.messages.find({ title: { $regex: req.params.param } }, function (err, messages)
	{
		if (err)
		{
			console.log("ERROR:" + err);
			res.send(err);
		}// end if
		else
		{
			res.json(messages);
		}// end else if
	}); // end db.messages.find()
});// end router.get()

router.get('/message/:_id/', function (req, res)
{
	db.messages.find(ObjectId(req.params._id), function (err, message)
	{
		if (err)
		{
			console.log("ERROR:" + err);
			res.send(err);
		}// end if
		else
		{
			res.json(message);
		}// end else if
	}); // end db.message.find()
});// end router.get()

router.post('/togos/', function(req, res)
{
	var outGoing = req.body;
	
	db.messages.insert(outGoing, function(err, togos)
	{
		if(err)
		{ 
			res.send(err);
		}// end if
		else
		{
			res.send("SUCCESS");
		}// end else
	}); // end db.insertOne()
});// end router.post()
module.exports = router;