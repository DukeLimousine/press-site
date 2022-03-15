var site = site || {};

let generator = (() => {
  let titles = [];
  let firstNames = [];
  let lastNames = [];
  let generatorForm = document.getElementById('generator-form');
  let resultArea = generatorForm && generatorForm.querySelector('.js-generator-result');

  let dataLoop = () => {
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
  }

  let processData = (arr, val) => {
    arr.push(val.split('=>')[1].split(',')[0].replace(/"|}/g,""));
  }

  let generatorListener = () => {
    generatorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let title = titles[Math.floor(Math.random() * titles.length)];
      let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      let fullName = title + " " + firstName + " " + lastName;
      resultArea.innerHTML = fullName;
    });
  }

  return {
    init: () => {
      dataLoop();
      generatorListener();
    }
  };

})();

document.addEventListener("DOMContentLoaded", function() {
  generator.init();
});
