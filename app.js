
/**
 * Module dependencies.
 */

var express = require('express'), 
	routes = require('./routes'), 
	user = require('./routes/user'), 
	http = require('http'), 
	path = require('path'),
	mongoose = require('mongoose'),  
	Facebook = require('facebook-node-sdk'), 
	project = require('./routes/project'); 

var app = express();

// all environments
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
}); 

// development only
app.configure('development', function(){
	app.use(express.errorHandler());
	mongoose.connect(process.env.MONGOLAB_URI || 'localhost');
})

// GETS
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/projects', project.display);


// PUTS
app.post('/project/new', project.create_new);

// TESTS

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
