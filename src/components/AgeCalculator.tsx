import { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<string>('');

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
        <p className="age-result">You are <span id="age-calculated"></span> old</p>
    </div>
  )
}

export default AgeCalculator;