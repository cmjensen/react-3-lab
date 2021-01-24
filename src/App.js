import {Component} from 'react';
import './App.css';
import data from './data'
import Header from './Components/Header'
import Buttons from './Components/Buttons'
import User from './Components/User'

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            value: 0
        }
    }

    nextButton = () => {
      if(this.state.value > 25) {
          this.state.value = 25;
      } else this.setState({value: this.state.value+1})
    }
    
    prevButton = () => {
      if(this.state.value < 1) {
        this.state.value = 1;
      } else this.setState({value: this.state.value-1})
        
    }

    render() {
        return (
            <div className='App'>

                <Header />
                <User data={this.state.data[this.state.value]}
                />
                <Buttons 
                  prevButton ={this.prevButton}
                  nextButton={this.nextButton}/>
            </div>
        );
    };
}

export default App;