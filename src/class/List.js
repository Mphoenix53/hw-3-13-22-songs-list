
import React from "react";
import SongFrom from "./SongForm";


class List extends React.Component{

  constructor(props){
    super(props)
    this.state={songs:[
      {artist:'AC DC', title:'shot to thrill', length: 5.21},
      {artist:'AC DC', title:'thunder struck', length: 4.52},
    
    ], showForm: true}
  }

  addSong=(song)=>{
    let updateSong = [song, ...this.state.songs]
    this.setState({
      songs:updateSong
    })
  }

  deleteSong = (songTitle)=> {
    let filteredSongs = this.state.songs.filter(s => s.title !== songTitle)
    this.setState({
      songs:filteredSongs
    })
  }

  renderSongs=()=>{
    return this.state.songs.map(s=>{
      return(
        <div key={s.title} className="border">
          <p>Artist-{s.artist}</p>
          <p>Title-{s.title}</p>
          <p>Length-{s.length}</p>
          <button onClick={()=>this.deleteSong(s.title)}>delete</button>
        </div>
      )
    })
  }

  toggleForm=()=>{
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render(){

    return(

      <div>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button>
        {this.state.showForm && <SongFrom addSong={this.addSong}/>}
        
        <h1>List</h1>
        {this.renderSongs()}
      </div>

    )

  }

}

export default List