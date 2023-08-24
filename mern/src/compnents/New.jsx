import React from 'react';
import Dropdown from './Dropdown';

const options = ['Option 1', 'Option 2', 'Option 3'];

const App = () => {
    const handleOptionSelect = (selectedOption) => {
        console.log('Selected:', selectedOption);
    };

    return (
        <div className="App">
            <h1>Dropdown Example</h1>
            <Dropdown options={options} onSelect={handleOptionSelect} />
        </div>
    );
};

export default App;
