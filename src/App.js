import { Provider } from 'react-redux';
import store from "./redux/store"
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Headers from './components/Headers'
import List from './components/List'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
            <Headers/> 

        <Routes>
        <Route path="/" exact Component={List}/>
        <Route path='/product/:id'  Component={Detail}/>
        <Route>404 page not found</Route>
        </Routes>
      

  </div>
  );
}

export default App;
