var fs = require("fs");

// const fichierA = "./example.js";
// fs.readFile(fichierA, "utf-8", function callback(err, contenuA) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("contenu", contenuA);

//   // on traite le fichier
// });
// console.log("la suite");

// EXAMPLE CALLBACK HELL

// // Lecture fichierA
fs.readFile(fichierA, function(err, contenuA) {
  if (err) {
    // Erreur
    console.log("FAIL: " + err.message);
  } else {
    // Lecture fichierB
    fs.readFile(fichierB, function(err, contenuB) {
      if (err) {
        // Erreur
        console.log("FAIL: " + err.message);
      } else {
        // Concaténation
        var contenuC = contenuA + "\n" + contenuB;
        // Écriture fichierC
        fs.writeFile(fichierC, contenuC, function(err) {
          if (err) {
            // Erreur
            console.log("FAIL: " + err.message);
          } else {
            // Succès :)
            console.log("OK");
          }
        });
      }
    });
  }
});

// // callback HELL

// getData(function(a) {
//   getMoreData(a, function(b) {
//     getMoreData(b, function(c) {
//       getMoreData(c, function(d) {
//         getMoreData(d, function(e) {
//           //...
//         });
//       });
//     });
//   });
// });

// // REFACTO

const handleFileC = function(err) {
  if (err) {
    console.log("FAIL: " + err.message);
  }
  // Succès :)
  console.log("OK");
};

const processFileB = function(err, contenuB) {
  if (err) {
    console.log("FAIL: " + err.message);
  }
  // Concaténation
  const contenuC = contenuA + "\n" + contenuB;
  fs.writeFile(fichierC, contenuC, handleFileC);
};

const processFileA = function(err, contenuA) {
  if (err) {
    console.log("FAIL: " + err.message);
  }
  fs.readFile(fichierB, processFileB);
};

fs.readFile(fichierA, processFileA);
