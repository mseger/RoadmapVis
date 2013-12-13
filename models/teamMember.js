var mongoose = require('mongoose'), Schema = mongoose.Schema

var teamMemberSchema = new Schema({
	name: String, 
	email: String, 
	projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
}); 

var TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember; 