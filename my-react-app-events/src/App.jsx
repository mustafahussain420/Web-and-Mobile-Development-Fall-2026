import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import useFetch from './component/useFetch,jsx'

export default function App() {
    const [data] =
      useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
      <>
        {data }
      </>
    )

}