
var CATS_ARRAY = [
  {name: "Pussy", food: "Piltchards"},
  {name: "Garfield", food: "Haddock"}
];


window.onload = function(){


  //1. Create cat ul
  var cat = document.createElement('ul');
  cat.className = "cat";

  // 2. Create name
  var catName = document.createElement("li");
  catName.innerText = "name: Pussy";

  // 3. Create fave food
  var catFood = document.createElement("li");
  catFood.innerText = "fave food: pilchards";

  // 4. Create cat image
  var catImage = document.createElement("img");
  catImage.src = "https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg"

  // 5. add cat name, food and image to cat
  cat.appendChild(catName);
  cat.appendChild(catFood);
  cat.appendChild(catImage);

  // 6. add cat to cat section
  var catSection = document.querySelector("#cats");
  catSection.appendChild(cat);
}





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