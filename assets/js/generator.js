var site = site || {};

document.addEventListener("DOMContentLoaded", function() {
  let generatorForm = document.getElementById('generator-form');
  let titles = [];
  let firstNames = [];
  let lastNames = [];

  function processData(arr, val) {
    arr.push(val.split('=>')[1].split(',')[0].replace(/"|}/g,""));
  }

  if (site.titles) {
    for (const key in site.titles ) {
      processData(titles, site.titles[key]);
    };
  }

  if (site.firstNames) {
    for (const key in site.firstNames ) {
      processData(firstNames, site.firstNames[key]);
    };
  }

  if (site.lastNames) {
    for (const key in site.lastNames ) {
      processData(lastNames, site.lastNames[key]);
    };
  }

  generatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = titles[Math.floor(Math.random() * titles.length)];
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let fullName = title + " " + firstName + " " + lastName;

    generatorForm.querySelector('.js-generator-result').innerHTML = fullName;
  });

});