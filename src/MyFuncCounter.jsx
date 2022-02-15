import { useState } from "react"

const MyFuncCounter =(props)=>{

    console.log( props);

    const [counter, setCounter] = useState(0)


function increaseCounter () {

 setCounter(counter+1)
 console.log(counter);

}



return(
<div>
<h1  style={{color:props.color}} >{counter}  {props.text}</h1>
<button onClick = {increaseCounter}>increase </button>
</div>
)
}
export default MyFuncCounter