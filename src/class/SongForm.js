import React from "react";

class SongFrom extends React.Component{
  constructor(props){
    super(props)
    this.State={
      title:'',
      length:''
    }
  }

  handelChange=(e)=>{
    this.setState({
      length:e.target.value
    })
  }

  render(){

    return(

      <div>
        <h1>Song Form</h1>
        <form>
          <p>Title</p>
          <input value={this.state.title} onChange={this.handelChange}/>
          <p>Song length</p>
          <input value={this.state.length} onChange={this.handelChange}/>
          <button>add</button>
        </form>

      </div>

    )

  }

}

export default SongFrom