import React, { Component } from "react";

class Coin extends Component{
  render () {

    return(
      <div className="Coin">

      <img src={this.props.info.imgSrc} style={{width :'200px',height:'200px'}} alt="coin" />

      </div>

    )
  }
}

export default Coin