import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Azman'}>
        <ChannelContext.Provider value={'Codevolution'} >
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
