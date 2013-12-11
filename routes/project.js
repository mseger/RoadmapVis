// all routes related to ProjectObject manipulation

var Project = require('../models/projectObject')

// create a new Project
exports.display = function(req, res){
	Project.find().populate(['title', 'owner', 'description', 'task_URL', 'duration', 'start', 'end', 'goal_tag', 'num_people_needed']).exec(function (err, projects_list){
		if(err)
			console.log("Unable to find and display owner's projects: ", err);
		res.render('project', {projects: projects_list})
	}); 
    res.render('project', {title: 'Projects Page'});
};

exports.create_new = function(req, res){
	var newProject = Project({title: req.body.title, owner: req.body.owner, description: req.body.description, task_URL: req.body.task_URL, duration: req.body.duration, start: req.body.start, end: req.body.end, goal_tag: req.body.goal_tag, num_people_needed: req.body.num_people_needed});
	newProject.save(function (err){
		if(err)
			console.log("Unable to save new project: ", err);
		req.session.project = newProject; 
		res.redirect('/home');
	});
}; 
