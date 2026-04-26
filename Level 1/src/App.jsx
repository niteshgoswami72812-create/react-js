import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import image from "./assets/vite.svg"

let App=()=>{

  // javascript
  let myname="Nitesh"


  return(
    <div>
      <Navbar />
      <h1>This Is Home Page</h1>
      <img src={image} alt="" />
      <img src="favicon.svg" alt="" />
      <h2>my name is {myname}</h2> //javascript
      <Footer />
    </div>
  )
}

export default App; 