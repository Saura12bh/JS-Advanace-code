function boilwater(callback) {
  console.log("boil water");
  callback();
}

function makeTea(callback) {
  console.log("making tea");
  callback();
}

function maketost(callback) {
  console.log("making toast");
  callback();
}

function serv(callback) {
  console.log("breakfast done");
  callback();
}

// Nested callbacks
boilwater(() => {
  makeTea(() => {
    maketost(() => {
      serv(() => {
        console.log("done");
      });
    });
  });
});

// boil water
// making tea
// making toast
// breakfast done
// done
