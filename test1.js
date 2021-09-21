
import { AppContext } from "./context"
import Test2 from "./test2"

function Test1()
{
    return(
        <>
        <AppContext.Consumer>
            {(context)=>{
                return(
                    <>
                    <h2>Test1 component {context.name}</h2>
                    <p>count: {context.count}</p>
                    <button onClick={context.increment}>increment</button>
       <button onClick={context.decrement}>decrement</button>
       <button onClick={context.reset}>reset</button>
                    <Test2 />
                    </>
                )
            }}
        </AppContext.Consumer>
        </>
    )
}

export default Test1