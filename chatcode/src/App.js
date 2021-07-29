import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Add from './components/Add';
import Chat from './components/Chat';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router>
          <Route path="/" exact component={Add}/>
          <Route path="/chat" component={Chat}/>
        </Router>
      </div>
     );
  }
}
 
export default App;

