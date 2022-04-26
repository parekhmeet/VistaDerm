import Home  from './pages/home/Home';
import Login  from './pages/Login/Login';
import Appointment from './pages/appointment/Appointment';
import Editt from './components/Edit/edit';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element= {<Home />} />  
        <Route path="login" index element= {<Login />} />
        <Route  path="Appointment" index element= {<Appointment />} />  
        <Route  path="Editt" index element= {<Editt />} />
        <Route  path="Features" index element= {<Appointment/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
