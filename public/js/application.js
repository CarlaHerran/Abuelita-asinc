console.log('Document');

$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
	console.log('Document ready');
	$("#formulario").submit(function(event){
		event.preventDefault();
		console.log('Default prevented');
		var form_data = $('#formulario').serialize();
		console.log('form_data',form_data);
	});
});
