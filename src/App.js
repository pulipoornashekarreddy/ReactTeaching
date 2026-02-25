import logo from './logo.svg';
import './App.css';

function App() {
  const headingStyleCenter = {textAlign:'center'};
  return (
    <div>
      <h1 className='App'>Hello, Employees! - External CSS</h1>
      <h2 style={{textAlign:'center'}}>Hello, Employees! - inline Css</h2>
      <h3 style={headingStyleCenter}>Hello, Employees! - inline Css with variable</h3>
    </div>
  );
}

export default App;
