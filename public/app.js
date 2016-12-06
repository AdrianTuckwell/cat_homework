
var CATS_ARRAY = [
  {name: "Pussy", food: "Piltchards"},
  {name: "Garfield", food: "Haddock"}
];

var init = function(){
  for (var i = 0; i < CATS_ARRAY.length; i++) {
    addCat(CATS_ARRAY[i].name, CATS_ARRAY[i].food);
  }
}

var addCat = function(name, food){
  var cat = createCat();
  var catName = createCatName(name);
  var catFood = createCatFood(food);
  var catImage = createCatImage( "picture.jpg" );
  var catSection = document.querySelector("#cats");
  appendCatBits(cat, catName, catFood, catImage, catSection);
}

  //1. Create cat ul
  var createCat = function(){
    var cat = document.createElement('ul');
    cat.className = "cat";
    return cat;
  }

  // 2. Create name
  var createCatName = function(name){
    var catName = document.createElement("li");
    catName.innerText = name;
    return catName;
  }

  // 3. Create fave food
  var createCatFood = function(food){
    var catFood = document.createElement("li");
    catFood.innerText = food;
    return catFood;
  }

  // 4. Create cat image
  var createCatImage = function(img){
    var catImage = document.createElement("img");
    catImage.src = img;
    return catImage;
  }

  // 5. add cat name, food and image to cat
  var appendCatBits = function(cat, catName, catFood, catImage, catSection) {
    cat.appendChild(catName);
    cat.appendChild(catFood);
    cat.appendChild(catImage);
    catSection.appendChild(cat);
  };

  // 6. add cat to cat section

window.onload = init;


//   window.onload = function(){

//   //1. Create cat ul
//   var cat = document.createElement('ul');
//   cat.className = "cat";

//   // 2. Create name
//   var catName = document.createElement("li");
//   catName.innerText = "name: Pussy";

//   // 3. Create fave food
//   var catFood = document.createElement("li");
//   catFood.innerText = "fave food: pilchards";

//   // 4. Create cat image
//   var catImage = document.createElement("img");
//   catImage.src = "https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg"

//   // 5. add cat name, food and image to cat
//   cat.appendChild(catName);
//   cat.appendChild(catFood);
//   cat.appendChild(catImage);

//   // 6. add cat to cat section
//   var catSection = document.querySelector("#cats");
//   catSection.appendChild(cat);
// }