// all routes related to ProjectObject manipulation

var Project = require('../models/projectObject')

// display existing projects
exports.displayProjects = function(req, res){
	Project.find({}).exec(function (err, project_list){
		if(err)
			return("Could not surface project list: ", err);
		res.render('project', {projects: project_list});
	})
}

// create a new Project
exports.create_new = function(req, res){
	var newProject = Project({title: req.body.title, owner: req.body.owner, description: req.body.description, task_URL: req.body.task_URL, duration: req.body.duration, start: req.body.start, end: req.body.end, goal_tag: req.body.goal_tag, num_people_needed: req.body.num_people_needed});
	newProject.save(function (err){
		if(err)
			console.log("Unable to save new project: ", err); 
		console.log("Created a new project! ", newProject);
		res.redirect('/projects');
	});
}; 

// delete all Projects



// delete one individual Project 
