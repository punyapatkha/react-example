import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderComponent = () => {
    if (selectedOption === 'component1') {
      return <div>เลือกComponent1</div>;
    } else if (selectedOption === 'component2') {
      return <div>เลือกComponent2</div>;
    } else if (selectedOption === 'component3') {
      // ถ้าข้อมูลเยอะสามารถแยกเป็นไฟล์ย่อยๆตาม component ก็ได้เช่น <Component3 />;
      // return <Component3 />;
      return <div>เลือกComponent3</div>;
    } else {
      // สามารถใช้ null แทน ได้ถ้าไม่ต้องการแสดงอะไรเลยตอนที่ยังไม่เลือก
      // return null;
      return <div>ยังไม่เลือก</div>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="component1">Component 1</option>
        <option value="component2">Component 2</option>
        <option value="component3">Component 3</option>
      </select>
      {/* Render components based on the selected option */}
      {renderComponent()}
      </header>
      
     
    
    </div>
  );
}

export default App;
