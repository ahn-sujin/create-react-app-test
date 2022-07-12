import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/*" element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
