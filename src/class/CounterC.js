import React from "react";

class Counterc extends React.Component{

  render(){
    console.log('called counter render method')
    return (
      <div className="border">
        <h1>Counter</h1>
      </div>
    )
  }

}
export default Counterc