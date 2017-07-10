$(document).ready( function(){

	// Función para mostrar y ocultar botones con íconos del menú.
	$("#js-back").remove();

	//Función que asigna el texto "NuevasRecetas"

	(function printNews() {
			$(".callout-news p").text('NUEVAS RECETAS');
		})();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	
	var highlightedRecipes = recipesArray.filter(function(index) {
		return index.highlighted;
	});
	console.log('Higlighted Recipes: ', highlightedRecipes);

	highlightedRecipes.forEach( function(recipe) {
		renderRecipe(recipe);
	} );
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	// Creando elementos HTML
	var recetaLink = $("<a>").addClass('item-recipe').attr('href', '#');

	var attributionSpan = $("<span>").addClass('attribution');
	recetaLink.append(attributionSpan);

	var imgName = 'assets/img/recipes/320x350/'+ recipe.name +'.jpg';
	console.log(imgName);
	var imagen = $("<img>").attr('src', imgName);
	recetaLink.append(imagen);
	console.log(recetaLink);

	var titleRecipeSpan = $("<span>").addClass('title-recipe').text(recipe.title);
	attributionSpan.append(titleRecipeSpan);

	var metadataRecipeSpan = $("<span>").addClass('metadata-recipe');
	attributionSpan.append(metadataRecipeSpan);

	var authorRecipeSpan = $("<span>").addClass('author-recipe').text(recipe.source.name);
	metadataRecipeSpan.append(authorRecipeSpan);

	var bookmarksRecipe = $("<span>").addClass('bookmarks-recipe');
	metadataRecipeSpan.append(bookmarksRecipe);

	var iconBookmarks = $("<span>").addClass('icon-bookmark');
	bookmarksRecipe.append(iconBookmarks);

	// Anidando objetos al HTML
	$(".list-recipes").append(recetaLink);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	
	if (activitiesArray.length > 0) {
		activitiesArray.forEach( function(activity) {
			renderActivity(activity);
			$(".wrapper-message").remove();
		});
	}

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {
	console.log('Voy a pintar la actividad: ', activity);


}


