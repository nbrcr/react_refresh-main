/* eslint-disable react/prop-types */
import "./App.css";

// Hvad er fejlen her og hvordan løses den?

// Greeting-komponenten modtager ikke props men forsøger at bruge en 'name' prop
const Greeting = ({ name }) => {
  // Returnerer en hilsen med navnet fra props
  return <h1>Hello, {name}!</h1>;
};

// App-komponenten sender en 'name' prop til Greeting-komponenten
const App = () => {
  return (
    <>
      <Greeting name='Alice' />
    </>
  );
};

export default App;