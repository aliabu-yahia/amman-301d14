"use strict";

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

// Rendering Manually
Dog.prototype.renderManually = function () {
  $("main").append(`
    <div class="dog-template">
      <h2>${this.name}</h2>
      <img src="${this.image_url}" alt="">
      <p>${this.hobbies}</p>
    </div>
    `);
};
// Using a clone
Dog.prototype.cloneRender = function () {
  let clonedDiv = $(".dog-template").clone();
  clonedDiv.find("h2").text(this.name);
  clonedDiv.find("p").text(this.hobbies);
  clonedDiv.find("img").attr("src", this.image_url);
  clonedDiv.removeClass("dog-template");
  clonedDiv.attr("class", this.name);
  $("section").append(clonedDiv);
};

const ajaxSettings = {
  method: "get",
  dataType: "json",
};

$.ajax("data.json", ajaxSettings).then((data) => {
  data.forEach((dog) => {
    let dogObject = new Dog(dog);

    // render the create dog object
    // dogObject.renderManually();
    dogObject.cloneRender();
  });
});
