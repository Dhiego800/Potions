let potionJson = {
  "potions": {
    "1": {
      "id": 1,
      "name": "Aging Potion",
      "image": "aging-potion.png",
      "price": 29.99,
      "effect": "Causes the drinker to advance in age",
      "ingredients": [
        "Red Wine",
        "Prune Juice",
        "Hairy Fungus",
        "Tortoise Shell",
        "Caterpillar",
        "Bat Tongue"
      ]
    },
    "2": {
      "id": 2,
      "name": "Bulgeye Potion",
      "image": "bulgeye-potion.png",
      "price": 19.99,
      "effect": "It affects one's eyes, causing them to swell",
      "ingredients": [
        "Beetle eyes",
        "Eel eyes"
      ]
    },
    "3": {
      "id": 3,
      "name": "Dragon Tonic",
      "image": "dragon-tonic.png",
      "price": 64.99,
      "effect": "A tonic used to cure sick dragons",
      "ingredients": [
        "Eagle Owl feathers",
        "Peacock feathers",
        "Giant Purple Toad warts"
      ]
    },
    "4": {
      "id": 4,
      "name": "Love Potion",
      "image": "love-potion.png",
      "price": 29.99,
      "effect": "The one who drinks it falls deeply in love with the first person they see",
      "ingredients": [
        "Petals from a red rose",
        "Essence of violet",
        "Canary flight and down feathers",
        "Newt eyes"
      ]
    },
    "5": {
      "id": 5,
      "name": "Polyjuice Potion",
      "image": "polyjuice-potion.png",
      "price": 99.99,
      "effect": "Allows the drinker to assume the form of someone else",
      "ingredients": [
        "Lacewing flies",
        "Leeches",
        "Powdered bicorn horn",
        "Knotgrass",
        "Fluxweed",
        "Shredded Boomslang skin"
      ]
    },
    "6": {
      "id": 6,
      "name": "Sleeping Draught",
      "image": "sleeping-draught.png",
      "price": 29.99,
      "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
      "ingredients": [
        "Sprigs of Lavender",
        "Measures of Standard Ingredient",
        "Blobs of Flobberworm Mucus",
        "Valerian sprigs"
      ]
    }
  }
}

const $ = document.querySelector.bind(document);
const potion1 = $('#potion1');
const listProducts = $(".ul-products");
const bg = $('.bg');

function getProducts(){

	for(let i = 1; i < 7; i++ ){

	let productItem = `
					<li data-item="${potionJson.potions[i].id}">
					<figure class="figure-potion"><img src="img/${potionJson.potions[i].image}" /></figure>
					<strong>${potionJson.potions[i].name}</strong><em>${potionJson.potions[i].price}</em>
				</li>
				`;

	listProducts.innerHTML+= productItem;

	}
};

function setInfoProduct(){
	const potionsLi = document.querySelectorAll(".ul-products li");
	const closePopup = $(".modal-right .close");

	potionsLi.forEach(function(item) {
	 	item.addEventListener("click", function(){
	 		let id = item.dataset.item;
	 		let modalName = $(".modal-name");
	 		let modalInfo = $(".modal-info");
	 		let modalPrice = $(".modal-price");
	 		let imgModal = $(".img-modal");
	 		let listModal = $(".ul-modal");

	 		for(let i = 1; i < 7; i++ ){
	 			if(id == i) {
	 				modalName.textContent = potionJson.potions[i].name;
	 				modalInfo.textContent = potionJson.potions[i].effect;
	 				modalPrice.textContent = potionJson.potions[i].price;
	 				imgModal.setAttribute("src", "img/" + potionJson.potions[i].image);

	 				let ingredients = potionJson.potions[i].ingredients;

	 				listModal.innerHTML = "";
	 				ingredients.forEach( (item) => {
	 				  listModal.innerHTML += `
	 				  	<li>${item}</li>
	 				  `;
	 				})
	 			}
	 		}

	 		bg.classList.add("ativo");
	 	});
	});

	closePopup.addEventListener("click", () => {
		bg.classList.remove("ativo");
	  
	});



}

document.addEventListener("DOMContentLoaded", function(){
	getProducts();
	setInfoProduct();
})