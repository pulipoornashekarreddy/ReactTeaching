import logo from './logo.svg';
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function App() {
  const heading1 = "Hello, Employees! - External CSS";
  const heading2 = "Hello, Employees! - inline Css";
  const heading3 = "Hello, Employees! - inline Css with variable";
  const [customText, setCustomText] = useState("Default Text");
  const [rate, setRate] = useState(0);
  const [gst, setGst] = useState(0);
  const headingStyleCenter = {textAlign:'center'};
  return (
    <div>
      <h1 className='App'>{heading1}</h1>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={(event) => setCustomText(event.target.value)}
          defaultValue={customText}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <h4 className='App'>{customText}</h4>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(event) => setRate(event.target.value)}
            defaultValue={rate}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <h4>Rate: {rate}</h4>
        <input onChange={(e)=>setGst(e.target.value)} value={gst}/>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(event) => setGst(event.target.value)}
            value={gst}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <h4>GST: {gst}</h4>
        <h4>Total: {Number(rate) + Number(gst)}</h4>
      </div>
      <h2 style={{textAlign:'center'}}>{heading2}</h2>
      <h3 style={headingStyleCenter}>{heading3}</h3>
    </div>
  );
}

export default App;
