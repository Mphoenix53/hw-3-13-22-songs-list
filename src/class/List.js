import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import SongFrom from "./SongForm";


class List extends React.Component{

  constructor(props){
    super(props)
    this.state={songs:[
      {title:'shot to thrill', length: 5.21},
      {title:'thunder struck', length: 4.52},
    
    ], showForm: true}
  }

  renderSongs=()=>{
    return this.state.songs.map(s=>{
      return(
        <div className="border">
          <p>Title-{s.title}</p>
          <p>Length-{s.length}</p>
        </div>
      )
    })
  }

  toggleForm=()=>{
    this.setState({
      SongForm: !this.state.SongForm
    })
  }

  render(){

    return(

      <div>
        <button onClick={this.toggleForm}>{this.state.SongForm ? 'hide' : 'show'}</button>
        {this.state.SongForm && <SongFrom />}
        
        <h1>List</h1>
        {this.renderSongs()}
      </div>

    )

  }

}

export default List