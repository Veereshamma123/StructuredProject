function generate_uuid()
{
	var uuidv4 = require('uuid/v4');
	this.id= uuidv4();
	//console.log(uuidv4());
}

module.exports=new generate_uuid();

