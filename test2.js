//using react useContext hook
import { AppContext,countryContext } from "./context";
import Test3 from "./test3";
import {useContext} from "react";
function Test2()
{
    //assigning the context object to local component context using useState hook
    const context=useContext(AppContext)
    const country=useContext(countryContext)
    return(
        <>
        {/* <AppContext.Consumer>
            {(context)=>{
                return( */}
                    <>
                    <h2>Test2 using hooks</h2>
                    <p>{country.name}</p>
                    <p>count: {context.count}</p>
                    <button onClick={context.increment}>increment</button>
                    <button onClick={context.decrement}>decrement</button>
                    <button onClick={context.reset}>reset</button>
                    <Test3/>
                    </>
                {/* )
            }}
        </AppContext.Consumer> */}
        </>
    )
}

export default Test2