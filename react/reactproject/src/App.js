import logo from './logo.svg';
import './App.css';
import menu from './data';
import Meunlist from './component/Menu';
import Category_xx from './component/Category';
import { useState } from 'react';

function App() {
  const [newmenu, setMenu] = useState(menu);
  return (
    <section className='menu'>
      {/*<!-- title -->*/}
      <div className='menu'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      {/*<!-- filter buttons -->*/}
      <Category_xx/>
    </section>
    {/*<!-- javascript -->*/}
    <script src="appcopy.js"></script>
    </div>
  );
}

export default App;
