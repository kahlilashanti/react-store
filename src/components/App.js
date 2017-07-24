import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    //getInitialState if you're using ReactCreateClass
    this.state={
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {//here's how we add fish to the form
    //update state -> take a copy of your current state and then update it for best practices
    const fishes = {...this.state.fishes};
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    //which state would you like to update?
    this.setState({ fishes })
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
            <ul className="list-of-fishes">
              {Object.keys(this.state.fishes)
                      .map(key => <Fish key={key} details={this.state.fishes[key]} />)
              }
            </ul>
        </div>
        <Order />
        <Inventory  addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
