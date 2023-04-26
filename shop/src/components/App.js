import Router from "./Router"
import main from "./styles/main.scss"
import navbar from "./styles/navbar.scss"
import home from "./styles/homePage.scss"
import registration from "./styles/registration.scss"
import catalog from "./styles/catalog.scss"
import search from "./styles/search.scss"
import product from "./styles/product.scss"
import cart from "./styles/cart.scss"

function App(){
    return (
        <div className="App">
         <Router/>
        </div>
    )
}
export default App