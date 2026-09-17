import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Car } from './models/car'

function App() {

  const myCar = new Car('Toyota', 'Corolla', 2024);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App
