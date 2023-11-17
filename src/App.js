import './App.css';
import {useState} from 'react'
import News from './Component/News.js'
import Navbar from './Component/Navbar.js'
import Render from './Component/Render.js'
function App() {
  const [category,setCategory] = useState("general");
  const [country,setCountry] = useState("in");
  return (
<>
<Navbar setCategory={setCategory}
category={category}
country={country}
setCountry={setCountry} />

    <News category={category}
    country={country} />
    <Render />
    </>
  );
}

export default App;
