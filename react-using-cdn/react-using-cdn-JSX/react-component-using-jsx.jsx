/* React: JSX Component 
    => https://legacy.reactjs.org/docs/introducing-jsx.html
*/

const root = document.getElementById('app'); // => apuntamos al contenedor HTML

const carOne = {
    make: 'Ford',
    model: 'Kuga',
    year: '2005'
};


const carType = <h1>Tipo de coche {carOne.make} </h1>


const Hello = () => {
    const {make, year} = carOne
    
    return (
        <div>
            {carType}
            <h2>
                y el modelo es {carOne.model}

            </h2>
            <h2>
                y usando destructuring marca { make } y el año {year}
            </h2>
        </div>
    )
}

//  ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
ReactDOM.render(<Hello />, root)