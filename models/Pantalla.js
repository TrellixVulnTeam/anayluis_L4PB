var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pantalla Model
 * =============
 */

var Pantalla = new keystone.List('Pantalla', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Pantalla.add({
	name: { type: String, required: true },
	heroImage: { type: Types.CloudinaryImage },
	frases: {
		uno: { type: Types.Html, wysiwyg: false, height: 40 },
		dos: { type: Types.Html, wysiwyg: false, height: 40 },
		tres: { type: Types.Html, wysiwyg: false, height: 40 },
		cuatro: { type: Types.Html, wysiwyg: false, height: 40 },
		cinco: { type: Types.Html, wysiwyg: false, height: 40 },
		seis: { type: Types.Html, wysiwyg: false, height: 40 },
		siete: { type: Types.Html, wysiwyg: false, height: 40 },
		ocho: { type: Types.Html, wysiwyg: false, height: 40 },
		nueve: { type: Types.Html, wysiwyg: false, height: 40 },
		diez: { type: Types.Html, wysiwyg: false, height: 40 },
	},
	contacto: {
		direccion: { type: Types.Html, wysiwyg: false, height: 40 },
		mail: { type: Types.Html, wysiwyg: false, height: 40 },
		telefono: { type: Types.Html, wysiwyg: false, height: 40 },
		link: { type: Types.Html, wysiwyg: false, height: 40 },
	},
});

Pantalla.register();
