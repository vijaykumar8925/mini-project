import React ,{Component}  from 'react';
import ExpensesTracker from './components/tracker/tracker.component';
import './App.css';

class App extends Component {
   

  render() {
    return(
       <div>
        <ExpensesTracker/>
       </div>
    )
  }  
}
export default App;
