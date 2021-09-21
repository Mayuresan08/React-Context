import { AppContext } from "./context";
import Test1 from "./test1";
import {useState} from "react"
function Appc()
{
const [count,setCount]=useState(0)

const increment=()=>{setCount(count+1)}
const decrement=()=>{setCount(count-1)}
const reset=()=>{setCount(0)}


return(
    <>
        <h2>App  Component</h2>
       <p>count:{count}</p>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>reset</button>
       <AppContext.Provider value={
           {name:"zen",
           //passing value to descendants and will re-render if the context state changes
        count:count,
        //passing function to child in context object
    increment:increment,
    decrement:decrement,
    reset:reset
}
       }>
           <Test1/>
       </AppContext.Provider>
       {/* <Test1/> */}
    {/* <AppContext.Consumer>
        {(context)=>{
            return <test name={context.name}
        //   return  <p> {context.name}</p>
        }
        }
    </AppContext.Consumer> */}
    </>
)

}

export default Appc