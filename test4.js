//using Class.contextType in class component
import {Component} from "react"
import { AppContext } from "./context"
export default class Test4 extends Component
{   static contextType=AppContext
    //contextType is internally converted to this.context
    render()
    {
        return(
            <>
            {/* <AppContext.Consumer>
                {(context)=>{
                    return( */}
                        <>
                        <h2>Test4  Class.contextType</h2>
                        <p>count:{this.context.count}</p>
                        <button onClick={this.context.increment}>increment</button>
                        <button onClick={this.context.decrement}>decrement</button>
                        <button onClick={this.context.reset}>reset</button>
                        </>
                    {/* )
                }}
            </AppContext.Consumer> */}
            </>
        )
    }

}