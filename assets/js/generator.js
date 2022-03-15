---
---

document.addEventListener("DOMContentLoaded", function() {
  let generatorForm = document.getElementById('generator-form');
  let titles = [];
  let firstNames = [];
  let lastNames = [];

  function processData(arr, val) {
    arr.push(val.split('=>')[1].split(',')[0].replace(/"/g,""));
  }

  {% for value in site.data.titles %}
    processData(titles, '{{value}}' );
  {% endfor %}
  {% for value in site.data.first_names %}
    processData(firstNames, '{{value}}' );
  {% endfor %}
  {% for value in site.data.last_names %}
    processData(lastNames, '{{value}}' );
  {% endfor %}

  generatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = titles[Math.floor(Math.random() * titles.length)];
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let fullName = title + " " + firstName + " " + lastName;

    generatorForm.querySelector('.js-generator-result').innerHTML = fullName;
  });

});