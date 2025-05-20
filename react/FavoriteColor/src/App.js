import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [colorarrary, setColorarray] = useState([]);
  console.log(colorarrary);
  return <FavoriteColor color={color} setColor={setColor} />;
}
function FavoriteColor({ color, setColor }) {
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={() => setColor('blue')}>
        Blue
      </button>
      <button type='button' onClick={() => setColor('red')}>
        Red
      </button>
      <button type='button' onClick={() => setColor('pink')}>
        Pink
      </button>
      <button type='button' onClick={() => setColor('green')}>
        Green
      </button>
      {/* <p>blue {bluecount}次</p> */}
    </>
  );
}

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });
  function changeColor(color) {
    setCar({ ...car, color: color });
  }
  function changeYear(newyear) {
    setCar({ ...car, year: newyear });
  }
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={() => changeColor('green')}>
        {' '}
        changeColor to green
      </button>
      <button onClick={() => changeColor('blue')}> changeColor to blue</button>
      <br></br>
      <button onClick={() => changeYear(1000)}>改年分</button>
    </>
  );
}

export default Car;
