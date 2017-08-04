console.log('Document');

$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 

	// Seleccionar el formulario y puse un listener para cuando le den submit al formulario.
	$("#formulario").submit(function(event){
		// Hay que detener el funcionamiento por default del formulario.
		event.preventDefault();
		//console.log('Default prevented');

		// Se le da formato a la informacion del formulario con serialize.
		var form_data = $('#formulario').serialize();
		//console.log('form_data',form_data);

		// Hicimos un pedido de ajax tipo POST con los datos del formulario.
		$.post( "/abuelita", form_data, function(data){
			//console.log(data);

			// Mostramos el div de la respuesta.
			$('#divrespuesta').show();
			// Después ponemos el resultado (data) en el span grandma_says.
			$('#grandma_says').html(data);
		});

	});


});
