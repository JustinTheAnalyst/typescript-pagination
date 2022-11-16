import React from 'react';
import './App.css';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div className="App">
        <Pagination contentPerPage={10} offset={10} total={1000}/>
    </div>
  );
}

export default App;
