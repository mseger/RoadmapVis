var mongoose = require('mongoose'), Schema = mongoose.Schema

var ProjectSchema = new Schema({
	title: String, 
	owner: String, 
	description: String, 
	task_URL: String, 
	duration: Number, 
	start: Number, 
	end: Number, 
	goal_tag: String, 
	num_people_needed: Number
}); 

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project; 