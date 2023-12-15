class ReceptorComponent extends HTMLElement {
    connectedCallback() {
      this.render();
      this.setupEventListeners();
    }
  
    render() {
      this.innerHTML = `
        <div id="message-component">
          <p id="message">Haz clic en el botón para ver el mensaje.</p>
        </div>
      `;
    }
  
    setupEventListeners() {
      document.addEventListener('actualizar-mensaje', (event) => {
        const nuevoMensaje = event.detail.mensaje;
        const messageElement = this.querySelector('#message');
        messageElement.textContent = nuevoMensaje;
      });
    }
  }
  
  customElements.define('receptor-component', ReceptorComponent);
  