import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
class App extends Component {
  constructor() {
    super()
    this.state = {
      homeLink: "Home",
      homeMounted: true
    }
  }
  onGreet(age) {
    alert(age);
  }
  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    })
  }
  onChangeHomeMounted(newName) {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }
  render() {
    const user = {
      name: "Anna",
      hobbies: ["Sports", "Reading"]
    }
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = ( < Home
        name={"max"}
        age={12}
        user={user}
        greet={this.onGreet}
        changeLink={this.onChangeLinkName.bind(this)}
        initialName={this.state.homeLink}
      />
    );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>hello 12</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {homeCmp}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount Home component</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
