var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'image, pantalla';

	locals.data = {
		images: [],
		pantallas: [],
	};

	// Load the galleries by sortOrder
	view.query('pantallas', keystone.list('Pantalla').model.find().where('name', "Home"));
	view.query('images', keystone.list('Image').model.find().sort('title'));

	// Render the view
	view.render('es');

};
