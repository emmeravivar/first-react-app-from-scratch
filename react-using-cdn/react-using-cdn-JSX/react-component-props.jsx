/* React: JSX Component 
    => https://legacy.reactjs.org/docs/introducing-jsx.html
*/

const root = document.getElementById('app'); // => apuntamos al contenedor HTML





const Hello = props =>{
  
    const marca = props.marca
    
    return (
        <div>
            <h1>
                La marca de mi coche es:  {marca}
            </h1>
        </div>
    )
}

//  ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
ReactDOM.render(<Hello marca="Ford"/>, root)