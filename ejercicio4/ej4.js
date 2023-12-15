class UserListComponent extends HTMLElement {
    connectedCallback() {
      this.getDataFromAPI();
    }
  
    getDataFromAPI() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => this.displayData(data))
        .catch(error => console.error(error));
    }
  
    displayData(data) {
      const table = document.createElement('table');
      table.classList.add('user-table');
  
      // Crea la fila de encabezado
      const headerRow = document.createElement('tr');
      const headers = ['ID', 'Nombre', 'Correo Electrónico', 'Ciudad'];
      headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
      });
      table.appendChild(headerRow);
  
      // Crea filas de datos
      data.forEach(user => {
        const row = document.createElement('tr');
        const userData = [user.id, user.name, user.email, user.address.city];
        userData.forEach(cellData => {
          const cell = document.createElement('td');
          cell.textContent = cellData;
          row.appendChild(cell);
        });
        table.appendChild(row);
      });
  
      this.appendChild(table);
    }
  }
  
  customElements.define('user-list-component', UserListComponent);
  