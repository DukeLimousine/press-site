// Homebrew Javascript CSV reader. Source data in /generator_data/
let generator = (() => {
  let generatorForm = document.getElementById('generator-form');
  let titles = [];
  let firstNames = [];
  let lastNames = [];
  let dataSourceUrls = ['titles.csv','first_names.csv','last_names.csv'];
  let generatorDataLoc = 'generator_data/';
  
  // Thanks to https://stackoverflow.com/questions/5933565/how-to-create-initialize-the-file-object-using-file-path-html5
  let getFileBlob = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function() {
        cb(xhr.response);
    });
    xhr.send();
  };

  let blobToFile = function (blob, name) {
    blob.lastModifiedDate = new Date();
    blob.name = name;
    return blob;
  };

  let getFileObject = function(filePathOrUrl, filename, cb) {
    getFileBlob(filePathOrUrl, function (blob) {
      cb(blobToFile(blob, filename));
    });
  };

  let processData = (data, dataFileName) => {
    let lbreak = data.split("\n");
    let resultArray;

    switch (dataFileName) {
      case 'titles.csv':
        resultArray = titles;
        break;
      case 'first_names.csv':
        resultArray = firstNames;
        break;
      case 'last_names.csv':
        resultArray = lastNames;
        break;
      default:
        console.log('File not found');
    }

    lbreak.forEach(res => {
      resultArray.push(res.split(",")[0]);
    });

    resultArray = resultArray.shift(); //remove csv header. This might be kind of hacky.
  }

  let dataLoop = () => {
    dataSourceUrls.forEach((dataFileName) => {
      let reader = new FileReader();
      getFileObject(generatorDataLoc + dataFileName, dataFileName, function (fileObject) {
         reader.readAsBinaryString(fileObject);
         reader.onload = (e) => {
           let fileData = e.target.result;
           processData(fileData, dataFileName);
         }
      }); 

    });
  }

  let generatorListener = () => {
      generatorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let title = titles[Math.floor(Math.random() * titles.length)];
      let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      let fullName = title + " " + firstName + " " + lastName;

      generatorForm.querySelector('.js-generator-result').innerHTML = fullName;
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
