// import React from 'react';
// import Navbar from "./components/Navbar"
// import About from "./components/About"
// import Portfolio from "./components/Portfolio"
// import Contact from "./components/Contact"
// import "./App.css"
// import { Route } from "react-router-dom"


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container">
//         <About />
//         <br></br>
//         <br></br>
//         <Portfolio />
//         <br></br>
//         <br></br>
//         <Contact />
//         <div className="row">
//           <div className="secretLink">
//             <a><img alt="ncb logo" src="http://ryanabney.com/nora/ncb.png"></img></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route } from "react-router-dom"
import "./App.css"
// pages
import Home from "./pages/home.js"
import Singer from "./pages/singer.js"


function App() {
  
  
    return (
      <div className="App">
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          exact path="/singer"
          component={Singer} />
      </div>
    );
  
}

export default App
