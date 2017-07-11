$(document).ready( function(){
	// Función para mostrar y ocultar botones con íconos del menú.
	$("#js-menu").remove();

	// Alert
	console.log("El documento HTML se ha cargado.");

	// Navegación con pestañas
	$(".js-show-recipe").click(function(event) {
		if ($("#container").hasClass('make')) {
			$("#container").removeClass('make');
			console.log("Se elimina clase make de #container");
			$(".js-show-recipe").addClass('active');
			$(".js-show-make").removeClass('active');
		}
	});
	$(".js-show-make").click(function(event) {
		if (!$("#container").hasClass('make')) {
			$("#container").addClass('make');
			console.log("Se agrega clase make a #container");
			$(".js-show-make").addClass('active');
			$(".js-show-recipe").removeClass('active');
		}
	});
});