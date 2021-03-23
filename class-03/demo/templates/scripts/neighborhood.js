"use strict";

const templateId = "#neighborhood-template";

const neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood(rawDataObject) {
  for (let propertyName in rawDataObject) {
    this[propertyName] = rawDataObject[propertyName];
  }
}

// Part 1: Build it all with jQuery
Neighborhood.prototype.buildWithJQuery = function () {
  let newDivContainer = $("<div></div>").clone();
  newDivContainer.append(`
  <h2>${this.name}</h2>
  <p>${this.city}</p>
  <p>${this.population}</p>
  <p>${this.founded}</p>
  ${this.body}`);

  $("#neighborhoods").append(newDivContainer);
};

// Part 2: Use jQuery to clone
Neighborhood.prototype.cloneWithJQuery = function () {
  const clonedContainer = $(".template").clone();
  clonedContainer.removeClass("template");

  clonedContainer.find("h2").text(this.name);
  clonedContainer.find(".city").text(this.city);
  clonedContainer.find(".population").text(this.population);
  clonedContainer.find(".founded").text(this.founded);
  clonedContainer.find(".body").text(this.body);

  $("#neighborhoods").append(clonedContainer);
};
// Part 3: Mustache

Neighborhood.prototype.renderWithMustache = function () {
  // Get the template from the HTML doc
  // let template = $(templateId).html();
  let template = $("#neighborhood-template").html();
  // Use mustache render function ro render the new HTML and we are going to merge it with the selected template
  let html = Mustache.render(template, this);

  // last step is to append it
  $("#neighborhoods").append(html);
};

// Creation of objects
neighborhoodDataSet.forEach((neighborhoodObject) => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach((neighborhood) => {
  // neighborhood.buildWithJQuery();
  // neighborhood.cloneWithJQuery();
  neighborhood.renderWithMustache();
});
