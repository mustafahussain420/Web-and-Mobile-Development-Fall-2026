import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Car } from './models/car'
import { hybridCar } from './models/hybridCar'

function App() {

  const myCar = new Car('Toyota', 'Corolla', 2024);
  const myHybridCarPrius = new hybridCar('Toyota', 'Prius', 2024, 'Hybrid', '8 kWh')
  const myHybridCarVolt = new hybridCar('Chevrolet', 'Volt', 2024, 'Hybrid', '18 kWh')

  return (
    <div>
      <h1>Car Details</h1>
      <p>{myCar.info()}</p>
      <p>{myHybridCarPrius.info()}</p>
      <p>{myHybridCarVolt.info()}</p>
    </div>
  );
}

export default App
