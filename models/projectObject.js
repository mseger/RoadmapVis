var mongoose = require('mongoose'), Schema = mongoose.Schema

var ProjectObjectSchema = new Schema({
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

var ProjectObject = mongoose.model('ProjectObject', ProjectObjectSchema);

module.exports = ProjectObject; 