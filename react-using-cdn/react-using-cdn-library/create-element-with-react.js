/* React: Create Element 
    => https://react.dev/reference/react/createElement
*/

// 1. Apuntamos al contenedor HTML  
const root = document.getElementById('app'); 


// 2. creamos el nuevo elemento con el método createElement() de React
const ElementOne = React.createElement('h1', {
    children: 'ElementOne',
});

// 3. Renderizamos con ReactDOM el Elemento
ReactDOM.render(ElementOne, root);


/* Si queremos crear varios elementos podemos utilizar la propiedad Children: 
    1. Apuntamos al contenedor
    2. Creamos los elementos React.CreateElement
    3. Renderizamos los elementos
*/

const SeveralElements = React.createElement('div', {
    className: 'container',
    key: 1,
    children: [
        React.createElement('h1', {
            children: 'Welcome!',
            key: 2,
        }),

        React.createElement('h2', {
            children: 'Madrid:',
            key: 3,
        }),

        React.createElement('h3', {
            children: [
                'The time is: ',
                    `${new Date().getHours()}:
                    ${new Date().getMinutes()}:
                    ${new Date().getSeconds()}`,
                ],
            key: 4,
        }),
    ],
});


ReactDOM.render(SeveralElements, root);

console.log(React)