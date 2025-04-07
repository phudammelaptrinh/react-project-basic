//method return a random number from 0 to 25 

const rgbValue = () =>{
  return Math.floor(Math.random()*256);
}

//method generate an array of random color 

const generateColors = (numColors) => {
  let colors = []

  for(let i = 0;i<numColors;i++){
    const red = rgbValue();
    const blue  = rgbValue();
    const green =rgbValue();
    colors.push(`rgb($(red),$(blue),$(green))`)
  }
  return colors

}

export {rgbValue, generateColors}
