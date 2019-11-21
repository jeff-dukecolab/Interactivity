// add a dummy paragraph
function addParagraph() {
  var containerDiv = document.querySelector('#firstSection');
  
  var newParagraph = document.createElement('p');
  newParagraph.appendChild(document.createTextNode('New paragraph!'));

  containerDiv.appendChild(newParagraph);
}

// change the image source
function getPlaceHolderImage() {
  //var theImage = document.querySelector('#secondSection img');
  var theImage = document.querySelectorAll('img');
  console.log(theImage);
  return(theImage);
}

function changeImage() {

  var image = getPlaceHolderImage();
  
  // Math.random returns a number between 0 and 1
  // set a random width and height for placekitten
  var width = Math.floor(100 + (Math.random() * 200));
  var height = Math.floor(100 + (Math.random() * 200));
  
  for(i=0; i<image.length; i++){
    image[i].src = "https://placekitten.com/"+width+"/"+height+"/";
  }  
}

// hide a paragraph
function hideParagraph123() {
  var paragraphToHide = document.querySelector('#paragraphToHide');
  //paragraphToHide.style = 'display: none';
  paragraphToHide.classList.add('hide');
}

// show a paragraph
function showParagraph() {
  var paragraphToHide = document.querySelector('#paragraphToHide');
  //paragraphToHide.style = 'display: block';
  paragraphToHide.classList.remove('hide');
}

// filter our grocery list
function filterList() {
  var inputField = document.querySelector('#groceryFilter');

  var filterValue = inputField.value.toLowerCase();
  
  var listElements = document.querySelectorAll('#firstSection ul li');

  for(var i=0; i<listElements.length; i++) {
    console.log(listElements[i]);
    var listItemText = listElements[i].textContent.toLowerCase();

    var containsFilterTest = listItemText.includes(filterValue);

    if(containsFilterTest)
      listElements[i].classList.remove('hide');
    else
      listElements[i].classList.add('hide')
  }
}

document.querySelector('#mySelector').addEventListener('mouseover', function(){
  console.log('hello');
  var selector = $('mySelector').show();
});