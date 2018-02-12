class Animal {
  constructor({ color, nbPattes, race }) {
    this.color = color;
    this.nbPattes = nbPattes;
    this.race = race;
  }

  crier() {
    console.log("wow");
  }
}

class Chien extends Animal {
  constructor(props) {
    super(props);
  }
}

class Chat extends Animal {
  constructor(props) {
    super(props);
  }
  crier() {
    console.log("miaou");
  }
}

const milou = new Chien({
  color: "white",
  nbPattes: 4,
  race: "chicdzvbzd"
});
console.log(milou);
milou.crier();

const felix = new Chat({
  color: "orange",
  nbPattes: 4,
  race: "batard"
});
console.log(felix);
felix.crier();

// Fonctional

const Animal = ({ color, nbPattes, race }) => {
  return {
    color,
    nbPattes,
    race
  };
};

const crier = cri => console.log(cri);

const Chien = ({ color, nbPattes, race }) => {
  return {
    ...Animal({ color, nbPattes, race }),
    crier: function() {
      crier("wow");
    }
  };
};
const Chat = props => {
  return {
    ...Animal(props),
    crier: () => console.log("miaou")
  };
};

const Canard = ({ color, nbPattes, race }) => {
  const obj = Animal({ color, nbPattes, race });
  const { color, nbPattes } = obj;
  const color = obj.color;
  const nbPattes = obj.nbPattes;

  return {
    color,
    nbPattes,
    crier: () => crier("coincoin")
  };
};
