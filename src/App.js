import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Display from "./components/display";
import Mainpage from "./components/mainpage";
import Navbartop from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
    
     
       <Switch>
         <Route path="/" exact>
          <Mainpage />
         </Route>
         <Route path="/quiz" exact>
          <Display />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
