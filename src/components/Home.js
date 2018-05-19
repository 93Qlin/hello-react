import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      status: 0,
      homeLink: props.initialName,
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000)
    console.log("Constructor");
  }
  onMakeOlder() {
    this.age += 3;
    this.setState({
      age: this.state.age + 3
    })
  }
  handleGreet() {
    this.props.greet(this.state.age)
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }
  componentWillMount() {
    console.log("Component will mount")
  }
  componentDidMount() {
    console.log("Component did mount")
  }
  componentWillReceiveProps(nextProps) {
    console.log("Component will receive", nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component should update", nextProps, nextState)
    if (nextState.status === 1) {
      return false;
    }
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("Component unmount");
  }
  render() {
    console.log('render')
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1> Home, name is { this.props.name}, age is {this.state.age }</h1>
            {/* <ul>
              {this.props.user.hobbies.map((habby,index) => <li key={index}>{habby}</li>)}
            </ul> */}
            <p>Status: {this.state.status}</p>
            <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
            <hr/>
            <button className="btn btn-primary" onClick={this.handleGreet.bind(this)}>Greet</button>
            <hr/>
            <hr/>
            <input
              type=""
              defaultValue={this.props.initialName}
              value={this.state.initialName}
              onChange={(event) => {this.onHandleChange(event)}}
              />
            <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Head Link</button>
          </div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  greet: PropTypes.func,
  initialName: PropTypes.string
};