import data from './data.json'

const App = () => {
    return (
        <div>
            {data.map(element => {
                return (
                    <div id={element.id} className='style_app'>
                        <h3>{element.name.first}</h3>
                        <h4>{element.name.last}</h4>
                    </div>
                )
            })}   
        </div>
    )
}

export default App