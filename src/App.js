import React from 'react'

class App extends React.Component {

    state = {
        isSignedIn: false
    }

    buttonSignedIn = () => {
        setTimeout(() => {
            this.greeting()
        }, 3000)
    }

    greeting = () => {
        this.setState({isSignedIn: true})
        
    }


    render() {
        return (
            <div>
                {this.state.isSignedIn ?
                <div>Hello!</div> :
                <button onClick={this.buttonSignedIn}>Sign In</button>
                }
            </div>
        )
    }
}
export default App;