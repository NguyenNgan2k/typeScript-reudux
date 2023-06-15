import React from 'react';
import './App.css';
import Login from './Login';
import GridTable from './store/GridTable';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GridTable />
      </header>
    </div>
  );
}

export default App;
