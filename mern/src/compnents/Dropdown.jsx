import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="dropdown">
            <select
                value={selectedOption}
                onChange={(e) => handleOptionSelect(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* <p>Selected Option: {selectedOption}</p> */}
        </div>
    );
};

export default Dropdown;
