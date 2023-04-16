/* React: JSX Component 
    => https://legacy.reactjs.org/docs/introducing-jsx.html
*/

const root = document.getElementById('app'); // => apuntamos al contenedor HTML

const Hello = ()=>{
    const name = 'Eva'
    return (
        <div>
            <h1>
                My Component {name} With JSX
            </h1>
        </div>
    )
}

//  ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
ReactDOM.render(<Hello />, root)