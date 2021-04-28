var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PRODUCTOS DE EDITION
 * ==========
 */

var Image = new keystone.List('Image', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Image.add({
	title: { type: String, required: true },
	description: { type: String},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },
	categories: { type: Types.Relationship, ref: 'Category', many: false },
	heroImage: { type: Types.CloudinaryImage },
});

Image.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Image.defaultColumns = 'title, info.ancho|20%, state|20%, heroImage|20%';
Image.register();
