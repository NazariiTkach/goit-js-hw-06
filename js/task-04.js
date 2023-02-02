
const Counter = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this.value = initialValue;
  this.step = step;
  this.refs = this.getRefs(rootSelector);
  this.bindEvents();
  this.updateValueUI(); 
};

Counter.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
    refs.incrementButton = refs.container.querySelector('[data-action="increment"]');
  refs.decrementButton = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector("#value");
    
  return refs;
};

Counter.prototype.bindEvents = function () {
  this.refs.incrementButton.addEventListener("click", () => {
    this.increment();
    this.updateValueUI();
  });

  this.refs.decrementButton.addEventListener("click", () => {
    this.decrement();
    this.updateValueUI();
  });
};

Counter.prototype.updateValueUI = function () {
  this.refs.value.textContent = this.value;
};

Counter.prototype.increment = function () {
  this.value += this.step;
};

Counter.prototype.decrement = function () {
  this.value -= this.step;
};

new Counter({ rootSelector: "#counter", step: 1 });