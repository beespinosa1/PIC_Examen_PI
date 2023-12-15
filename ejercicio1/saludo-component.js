
class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  

      const shadowDom = this.attachShadow({ mode: 'open' });
  
      const saludo = document.createElement('h1');
      saludo.textContent = '¡Hola, Mundo!';

      shadowDom.appendChild(saludo);
    }
  }
  

  customElements.define('saludo-component', SaludoComponent);
  