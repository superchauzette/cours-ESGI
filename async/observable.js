//  Observable

// C'est un Conteneur

// type simple numnber string
[2];
Promise.resolve(2);
Observable.of(2)[
  // Type complexe
  ([2, 3, 5], ["toto", "titi"])
];

Promise.resolve([2, 3, 5]);
Promise.resolve(Promise.resolve(2)).then(d => console.log(d)); // => 2

Observable.of([2, 3, 5]);
Observable.of(Observable.of(2), Observable.of(3));

// Array synchro
// Promise et observable sync et async

// Promise delivre une valeur à travers le temps
// Observable plusieur valeur à travers le temps

// 3 canals de sortie
Observable.of(2)
  .subcribe(
    data => console.log(data),
    err => console.log(err),
    () => console.log("completed")
  )

  [
    // Opérateur

    (1, 2, 3, 4, 5)
  ].map(x => x + 2);

Promise.resolve([1, 2, 3, 4, 5])
  .then(tab => tab.map(x => x + 2))
  .then(newtab => console.log(newtab));

Observable.of(1, 2, 3, 4, 5)
  .map(x => x + 2)
  .subcribe(
    data => console.log(data),
    err => console.log(err),
    () => console.log("completed")
  );
