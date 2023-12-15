class EmisorComponent extends HTMLElement {
    connectedCallback() {
      this.render();
      this.setupEventListeners();
    }
  
    render() {
      this.innerHTML = `
        <div id="button-component">
          <button id="update-button">Actualizar Mensaje</button>
        </div>
      `;
    }
  
    setupEventListeners() {
      const updateButton = this.querySelector('#update-button');
  
      updateButton.addEventListener('click', () => {
        const customEvent = new CustomEvent('actualizar-mensaje', { 
          detail: { mensaje: '¡Mensaje actualizado desde emisor-component!' } 
        });
        this.dispatchEvent(customEvent);
      });
    }
  }
  
  customElements.define('emisor-component', EmisorComponent);
  