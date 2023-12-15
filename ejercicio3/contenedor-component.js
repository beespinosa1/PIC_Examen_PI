

function ContenedorComponent(encabezadoContent, cuerpoContent) {
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-component';
  
    const encabezado = document.createElement('div');
    encabezado.className = 'encabezado';
    encabezado.textContent = encabezadoContent || 'Encabezado predeterminado';
  
    const cuerpo = document.createElement('div');
    cuerpo.className = 'cuerpo';
    cuerpo.textContent = cuerpoContent || 'Cuerpo predeterminado';
  
    contenedor.appendChild(encabezado);
    contenedor.appendChild(cuerpo);
  
    return contenedor;
  }
  