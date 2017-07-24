import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
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
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory  addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
