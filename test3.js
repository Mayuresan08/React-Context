// chaining consumers for multiple contexts
import { AppContext ,countryContext} from "./context";
import Test1 from "./test1";
import Test4 from "./test4";
function Test3()
{
    return(
        <>
        <AppContext.Consumer>
            {(context)=>{
                return(
                    <countryContext.Consumer>
                        {(country)=>{
                            return(
                            <>
                                <h2>Test3 chaining context using consumers</h2>
                                <p>count: {context.count}</p>
                                <p>country:{country.name}</p>
                                <Test4/>
                            </>)
                        }}
                    </countryContext.Consumer>
                )
            }}
        </AppContext.Consumer>
        </>
    )
}

export default Test3