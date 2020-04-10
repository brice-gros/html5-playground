
// create a custom div element
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
  
  // register custom elements : https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
  customElements.define('my-div', MyDiv, { extends: 'div' });
  