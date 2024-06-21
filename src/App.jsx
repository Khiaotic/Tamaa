// import { useState } from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from './components/Button';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Collab from "./components/collab";

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    ////Notes: Fragments [<></>] let you group a list of children without adding extra nodes to the DOM/////
    <>
      <h1 className="text-3xl font-bold ">TAMA</h1>
      <div className="pt=[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Content />
      </div>
      <ButtonGradient />
      <Collab />
    </>
  );
};

export default App;
