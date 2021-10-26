class Stream {
  #value;
  #nextValue;
  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
    Stream.#count++;
  }
  get value() {
    return this.#value;
  }
  get next() {
    this.#value = this.#nextValue(this.#value);
    return this.#value;
  }
  get nextEven() {
    if (this.#value % 2 === 0) {
      this.#value = this.#nextValue(this.#value);
    } else {
      this.#value += 1;
      this.#value = this.#nextValue(this.#value);
    }
    return this.#value;
  }
  static get count() {
    return Stream.#count;
  }
}
class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}
class NextIntegerStream extends Stream {
  constructor() {
    super(0, (value) => value + 1);
  }
}
class EvenStream extends Stream {
  constructor(value) {
    super(value, (value) => value + 2);
  }
}

const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();
const nextEven1 = new EvenStream(2);
const nextEven2 = new EvenStream(1);
for (let i = 0; i < 10; i++) {
  console.log(`constant[${i}] = ${constant.next}`);
  console.log(`nextInteger[${i}] = ${nextInteger.next}`);
  console.log(`nextEvene1[${i}] = ${nextEven1.nextEven}`);
  console.log(`nextEven2[${i}] = ${nextEven2.nextEven}`);
}
console.log(Stream.count);
