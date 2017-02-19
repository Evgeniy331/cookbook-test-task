var Recipe = require("../schemas/recipe");
var RecipeVersions = require("../schemas/recipe-versions");

var mongoose = require("mongoose");
var Chance = require("chance");
var chance = new Chance();

module.exports = function () {

		let recipes = [], recipeVersions = [];

		recipes.push(
			new Recipe ({
				title: "Steak", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat  ultricies." + 
				"Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla",
				imageSRC: "sausage-cabbage.jpg",
				creationDate: chance.date({ year: 2016, month: 12  }),
				ingredients: [" 1 white onion", "1 medium head cabbage", "2 large tomatos", "1 clove garlicc", "1/2 cup water",
				"vegetable oil", "salt", "pepper"],
				directions: ["Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu.",
				"Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu."],
				cooking : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat" +
                  "ultricies. Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla" +
                  "semper viverra. Phasellus luctus vehicula ante. Ut tincidunt elementum sapien eu" + 
                  "varius. In hac habitasse platea dictumst. Donec at pulvinar odio. Morbi ac mi est." +
                  "Quisque pellentesque lectus id enim scelerisque consectetur non in augue. Quisque " +
                  "varius dui quis erat cursus bibendum. Nunc tortor ligula, adipiscing non feugiat" +
                  "vitae, dictum ac nulla. Proin urna turpis, luctus vitae bibendum sodales, malesuada" +
                  "non velit. Morbi tincidunt nisi ac lectus ultrices consectetur. Morbi aliquet lobortis" +
                  "porta. Mauris congue tempor urna in porta. Integer elit velit, cursus ac laoreet" +
                  "non, mattis ac ipsum."
			}).toObject()
		);

		recipeVersions.push(
			new RecipeVersions({
				recipeID: recipes[recipes.length - 1]._id,
				versions: [recipes[recipes.length - 1]]
			}).toObject()
		);

		recipes.push(
			new Recipe ({
				title: "Really Good Salad ", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat  ultricies." + 
				"Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla",
				imageSRC: "salad.jpg",
				creationDate: chance.date({ year: 2016, month: 12  }),
				ingredients: [" 1 white onion", "1 medium head cabbage", "2 large tomatos", "1 clove garlicc", "1/2 cup water",
				"vegetable oil", "salt", "pepper"],
				directions: ["Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu.",
				"Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu."],
				cooking : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat" +
                  "ultricies. Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla" +
                  "semper viverra. Phasellus luctus vehicula ante. Ut tincidunt elementum sapien eu" + 
                  "varius. In hac habitasse platea dictumst. Donec at pulvinar odio. Morbi ac mi est." +
                  "Quisque pellentesque lectus id enim scelerisque consectetur non in augue. Quisque " +
                  "varius dui quis erat cursus bibendum. Nunc tortor ligula, adipiscing non feugiat" +
                  "vitae, dictum ac nulla. Proin urna turpis, luctus vitae bibendum sodales, malesuada" +
                  "non velit. Morbi tincidunt nisi ac lectus ultrices consectetur. Morbi aliquet lobortis" +
                  "porta. Mauris congue tempor urna in porta. Integer elit velit, cursus ac laoreet" +
                  "non, mattis ac ipsum."
			}).toObject()
		);

		recipeVersions.push(
			new RecipeVersions({
				recipeID: recipes[recipes.length - 1]._id,
				versions: [recipes[recipes.length - 1]]
			}).toObject()
		);

		recipes.push(
			new Recipe ({
				title: "Sushi Rolls", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat  ultricies." + 
				"Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla",
				imageSRC: "sushi.jpg",
				creationDate: chance.date({ year: 2016, month: 12 }),
				ingredients: [" 1 white onion", "1 medium head cabbage", "2 large tomatos", "1 clove garlicc", "1/2 cup water",
				"vegetable oil", "salt", "pepper"],
				directions: ["Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu.",
				"Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu."],
				cooking : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat" +
                  "ultricies. Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla" +
                  "semper viverra. Phasellus luctus vehicula ante. Ut tincidunt elementum sapien eu" + 
                  "varius. In hac habitasse platea dictumst. Donec at pulvinar odio. Morbi ac mi est." +
                  "Quisque pellentesque lectus id enim scelerisque consectetur non in augue. Quisque " +
                  "varius dui quis erat cursus bibendum. Nunc tortor ligula, adipiscing non feugiat" +
                  "vitae, dictum ac nulla. Proin urna turpis, luctus vitae bibendum sodales, malesuada" +
                  "non velit. Morbi tincidunt nisi ac lectus ultrices consectetur. Morbi aliquet lobortis" +
                  "porta. Mauris congue tempor urna in porta. Integer elit velit, cursus ac laoreet" +
                  "non, mattis ac ipsum."
			}).toObject()
		);

		recipeVersions.push(
			new RecipeVersions({
				recipeID: recipes[recipes.length - 1]._id,
				versions: [recipes[recipes.length - 1]]
			}).toObject()
		);

		recipes.push(
			new Recipe ({
				title: "Long Island", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat  ultricies." + 
				"Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla",
				imageSRC: "long-island.jpg",
				creationDate: chance.date({ year: 2016, month: 12  }),
				ingredients: [" 1 white onion", "1 medium head cabbage", "2 large tomatos", "1 clove garlicc", "1/2 cup water",
				"vegetable oil", "salt", "pepper"],
				directions: ["Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu.",
				"Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu."],
				cooking : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat" +
                  "ultricies. Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla" +
                  "semper viverra. Phasellus luctus vehicula ante. Ut tincidunt elementum sapien eu" + 
                  "varius. In hac habitasse platea dictumst. Donec at pulvinar odio. Morbi ac mi est." +
                  "Quisque pellentesque lectus id enim scelerisque consectetur non in augue. Quisque " +
                  "varius dui quis erat cursus bibendum. Nunc tortor ligula, adipiscing non feugiat" +
                  "vitae, dictum ac nulla. Proin urna turpis, luctus vitae bibendum sodales, malesuada" +
                  "non velit. Morbi tincidunt nisi ac lectus ultrices consectetur. Morbi aliquet lobortis" +
                  "porta. Mauris congue tempor urna in porta. Integer elit velit, cursus ac laoreet" +
                  "non, mattis ac ipsum."
			}).toObject()
		);

		recipeVersions.push(
			new RecipeVersions({
				recipeID: recipes[recipes.length - 1]._id,
				versions: [recipes[recipes.length - 1]]
			}).toObject()
		);

		recipes.push(
			new Recipe ({
				title: "Morning Sandwich", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat  ultricies." + 
				"Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla",
				imageSRC: "sandwich.jpg",
				creationDate: chance.date({ year: 2016, month: 12  }),
				ingredients: [" 1 white onion", "1 medium head cabbage", "2 large tomatos", "1 clove garlicc", "1/2 cup water",
				"vegetable oil", "salt", "pepper"],
				directions: ["Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu.",
				"Praesent luctus lorem non mi tempus pretium. Praesent vehicula justo a erat ornare in pretium leo ornare. Nullam non sem sit amet libero auctor eleifend quis eget lectus.",
				"Nullam fermentum est et nibh dignissim vitae tempor nisi posuere. Mauris risus dolor, porttitor a laoreet eu, varius et lorem. Donec urna velit, euismod at elementum eu, scelerisque at arcu."],
				cooking : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum volutpat" +
                  "ultricies. Nam cursus condimentum massa in pellentesque. Etiam ultrices odio eu nulla" +
                  "semper viverra. Phasellus luctus vehicula ante. Ut tincidunt elementum sapien eu" + 
                  "varius. In hac habitasse platea dictumst. Donec at pulvinar odio. Morbi ac mi est." +
                  "Quisque pellentesque lectus id enim scelerisque consectetur non in augue. Quisque " +
                  "varius dui quis erat cursus bibendum. Nunc tortor ligula, adipiscing non feugiat" +
                  "vitae, dictum ac nulla. Proin urna turpis, luctus vitae bibendum sodales, malesuada" +
                  "non velit. Morbi tincidunt nisi ac lectus ultrices consectetur. Morbi aliquet lobortis" +
                  "porta. Mauris congue tempor urna in porta. Integer elit velit, cursus ac laoreet" +
                  "non, mattis ac ipsum."
			}).toObject()
		);

		recipeVersions.push(
			new RecipeVersions({
				recipeID: recipes[recipes.length - 1]._id,
				versions: [recipes[recipes.length - 1]]
			}).toObject()
		);
		
		return {
			recipeversions: recipeVersions,
			recipes: recipes	
		};
	}
