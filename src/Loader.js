import React from 'react'

class Loader extends React.Component {

    state = {
        loading: false,
        greeting: '' 
    }

    clickBtn = () => {  
        setTimeout(() => {
            this.sayHi()
        }, 3000)

        this.setState({loading: true})
    }


    sayHi = () => {
        return this.setState({loading: false, greeting: 'Hello!' })
    }


    render() {
        return (
            <div>
                <button className='button' onClick={this.clickBtn}>Say Hi</button>
                    {this.state.loading && <div className='loader' />}
                {this.state.greeting && <span>{this.state.greeting}</span>} 
            </div>
        )
    }
}
export default Loader;