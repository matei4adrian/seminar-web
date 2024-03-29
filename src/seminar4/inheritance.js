class Robot {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const r0 = new Robot("some robot");
r0.move();

class Weapon {
  constructor(description) {
    this.description = description;
  }

  fire() {
    console.log(`${this.description} is firing`);
  }
}

const w0 = new Weapon("pew pew laser");
w0.fire();

class CombatRobot extends Robot {
  constructor(name) {
    super(name);
    this.weapons = [];
  }

  addWeapon(w) {
    this.weapons.push(w);
  }

  fire() {
    console.log("firing all weapons");
    for (const w of this.weapons) {
      w.fire();
    }
  }
}

const r1 = new CombatRobot("some combat robot");
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly = function () {
  console.log(`${this.name} is flyng`);
};

r1.fly();

class Software {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class BrowserPlugin {
  constructor(name) {
    this.name = name;
  }

  install() {
    console.log(`${this.name} was installed succesfully`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(p) {
    this.plugins.push(p);
    console.log(`${p.name} was added successfully`)
    p.install();
  }
}

const b = new Browser("Edge");
b.run();
const p = new BrowserPlugin("AdBlock");
b.addPlugin(p);
