import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Todos from './components/Todos.jsx';

function App() {

  

  return (
    <Fragment>
      {/* OR you can use <></> for wrap heade and main */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <Todos />
        
      </main>
    </Fragment>
  );
}

export default App;
