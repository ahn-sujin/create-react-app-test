import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          {/* <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day">
            <Day /> 
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
