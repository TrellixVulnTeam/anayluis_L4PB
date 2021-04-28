var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
});


Category.add({
	name: { type: String, required: true },
	info:  { type: String },
	heroImage: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 80 },

});

Category.relationship({ ref: 'Product', path: 'products', refPath: 'categories' });
Category.register();
