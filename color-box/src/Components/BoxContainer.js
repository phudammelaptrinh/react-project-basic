import React ,{Component} from "react";
import './BoxContainer.css'
import Box from './Box'
import { rgbValue,generateColors } from "../utils/helper";

class BoxContainer extends Component{


  //number of color boxes 
  static defaultProps ={
    num : 18
  }

  constructor(props){
    super(props)
    this.state = {

      colors: generateColors(this.props.num)
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(c){


    //create new random rgb color

    let newColor 
    do
    {
      newColor = `rgb(
      ${rgbValue()},
      ${rgbValue()},
      ${rgbValue()}
      )`
    }
    while(newColor ===c )

      this.setState(st => ({
        colors : st.colors.map(color =>{
          if(color != c)
            return color
          return newColor
        })
      }))
  }
  render(){
    return(
      <div className="BoxContainer">
        {this.state.colors.map(colors =>(
          <Box color={colors} changeColor={this.changeColor}/>
        ))}
      </div>
    )
  }


}

export default BoxContainer


