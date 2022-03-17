import React from "react";

class SongFrom extends React.Component{
  constructor(props){
    super(props)
    this.state={
      artist:'',
      title:'',
      length:''
    }
  }

  handelChange=(e)=>{
    console.log('value:', e.target.value)
    console.log('artist:', e.target.value)
    this.setState({
      [e.target.name]:e.target.value
    })

  }

  handelSubmit=(e)=>{
    e.preventDefault()
    this.props.addSong(this.state)
  }

  render(){

    return(

      <div>

        <h1>Song Form</h1>
        <form onSubmit={this.handelSubmit}>
          <p>Artist</p>
          <input name='artist' value={this.state.artist} onChange={this.handelChange}/>
          <p>Title</p>
          <input name='title' value={this.state.title} onChange={this.handelChange}/>
          <p>Song length</p>
          <input name='length' value={this.state.length} onChange={this.handelChange}/>
          <button>add</button>
        </form>

      </div>

    )

  }

}

export default SongFrom