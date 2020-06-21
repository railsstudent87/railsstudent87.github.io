function activateGallery() {
  
  // let mainImage = document.querySelector("#gallery-photo").querySelector("img");
  let mainImage = document.querySelector("#gallery-photo img");
  let photoTitle = document.querySelector("#gallery-info").querySelector(".title");
  let photoDescription = document.querySelector("#gallery-info").querySelector(".description");

  let currentImage = document.querySelector(".current").querySelector("img");
  
  // let thumbnails = document.querySelector("#gallery-thumbs")
  //                         .querySelectorAll("img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  console.log(thumbnails);
  
  let updatePage = function() {
    currentImage = document.querySelector(".current").querySelector("img");
    photoTitle.innerHTML = currentImage.dataset.title;
    photoDescription.innerHTML = currentImage.dataset.description;
    mainImage.setAttribute("src",currentImage.dataset.largeVersion);
    mainImage.setAttribute("alt",currentImage.dataset.title);
  }
  
  updatePage();
  
  thumbnails.forEach(function(image) {
    image.addEventListener("click", function(event) {
      currentImage.parentNode.classList.remove("current");
      image.parentNode.classList.add("current");
      updatePage();
    });
  });

}