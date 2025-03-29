import React, { useState } from 'react';
import { calculateAge, formatAge } from '../utils/age';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<string>('');
  const { isValid, diff } = calculateAge(birthDate);

  function handleBirthDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newDate = e.target.value;
    setBirthDate(newDate);
  }

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="age-calculator-picker">
        <label htmlFor="date-of-birth">Enter your birth date:</label>
        <input
            type="date"
            id="date-of-birth"
            aria-label="Date of birth"
            value={birthDate}
            onChange={handleBirthDateChange}
        />
      </div>
      {
        isValid
        ? (
        <p className="age-result">You are <span id="age-calculated">{formatAge(diff)}</span> old</p>
        )
        : null
      }
    </div>
  )
}

export default AgeCalculator;