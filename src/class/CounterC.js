import React from "react";

class Counterc extends React.Component{

  
  constructor(props){
    super(props)
    this.state={count:0}
  }

  add = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    console.log('called counter render method')
    return (
      <div className="border">
        <h1>Counter</h1>
        <p>count {this.state.count}</p>
        <button onClick={this.add}>ADD</button>
      </div>
    )
  }

}
export default Counterc