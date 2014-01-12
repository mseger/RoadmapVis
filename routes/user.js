
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

// handles Facebook login
exports.login = function(req, res){
	req.facebook.api('/me', function(err, data){
		req.facebook.api('/me/picture?redirect=false&type=large', function(err, picData){
			var existentUser = User.findOne({name: data.name}, function(err, user){
				if(user){
					req.session.user = user;
					res.redirect('/canvas');
				}else{
					var loggedInUser = new User({name: data.name, profPicURL: picData.data.url, roadmaps: []});
					loggedInUser.save(function (err){
						if(err)
							console.log("Unable to save new user.");
						req.session.user = loggedInUser; 
						res.redirect('/canvas');
					});
				}
			});
		});
	});
}

