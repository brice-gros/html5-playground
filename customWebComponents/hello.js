export function hello() {
	window.alert("hello")
}

class MyDiv extends HTMLDivElement {
  constructor() {
    // Always call super first in constructor
    super();
	this.style.backgroundColor = "yellow";
  }
  
  setValue(htmlCode) {
	  this.innerHTML = htmlCode
  }
}

export function RegisterComponents() {
	customElements.define('my-div', MyDiv, { extends: 'div' });
}
