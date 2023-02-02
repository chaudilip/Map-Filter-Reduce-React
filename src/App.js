import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Contact from '../src/Contact';
import details from './details';



function App() {
  return (

    <div>
      <Contact />
      {details.map()}
    {/* <Card 
    name={details[0].name}
    img={details[0].imgURL}
    tel={details[0].phone}
    email={details[0].email} />
    <Card 
    name={details[1].name}
    img={details[1].imgURL}
    tel={details[1].phone}
    email={details[1].email} />
    <Card 
    name={details[2].name}
    img={details[2].imgURL}
    tel={details[2].phone}
    email={details[2].email} /> */}
   </div>
  );
}

export default App;
