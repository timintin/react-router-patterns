
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import ColorList from './ColorList';
import AddColor from './AddColor';
import ColorDetails from './ColorDetails';
import './App.css';

function App(props) {
  const { dogs } = props;

  const initialColors = [
    { name: "red", hex: "#FF0000" },
    { name: "green", hex: "#00FF00" },
    { name: "blue", hex: "#0000FF" }
  ];

  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      <Router>
        <Nav dogs={dogs} />
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
          <Route path="/dogs/:name" render={(routeProps) => {
            const name = routeProps.match.params.name;
            const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
            return dog ? <DogDetails dog={dog} /> : 
    <Route path="/:operation/:num1/:num2" render={() => <Calculator />} />
    <Redirect to="/dogs" />
    ;
          }} />
          <Route exact path="/colors" render={() => <ColorList colors={colors} />} />
          <Route path="/colors/new" render={() => <AddColor addColor={addColor} />} />
          <Route path="/colors/:colorName" render={() => <ColorDetails colors={colors} />} />
          
    <Route path="/:operation/:num1/:num2" render={() => <Calculator />} />
    <Redirect to="/dogs" />
    
        </Switch>
      </Router>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
