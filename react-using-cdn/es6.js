   /* ES6 Create Element */
   const root = document.getElementById('app'); // => apuntamos al contenedor HTML
   const mainHeading = document.createElement('h1'); // => creamos la tag <h1>
   mainHeading.textContent = 'Hello there!'; // => Insertarmos un texto
   app.appendChild(mainHeading); // => Apuntamos al lugar donde lo queremos pintar

