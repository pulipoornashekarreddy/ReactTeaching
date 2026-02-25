import logo from './logo.svg';
import './App.css';

function App() {
  const heading1 = "Hello, Employees! - External CSS";
  const heading2 = "Hello, Employees! - inline Css";
  const heading3 = "Hello, Employees! - inline Css with variable";
  const headingStyleCenter = {textAlign:'center'};
  return (
    <div>
      <h1 className='App'>{heading1}</h1>
      <h2 style={{textAlign:'center'}}>{heading2}</h2>
      <h3 style={headingStyleCenter}>{heading3}</h3>
    </div>
  );
}

export default App;
