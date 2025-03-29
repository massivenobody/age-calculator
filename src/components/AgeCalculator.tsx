import React, { useState } from 'react';
import { DateTime, DurationObjectUnits } from 'luxon';

function AgeCalculator() {
  const [birthDateString, setBirthDateString] = useState<string>('');
  const birthDate = DateTime.fromFormat(birthDateString, 'yyyy-MM-dd');
  // Calculate diff and negate to get positive values.
  const diff = birthDate.diffNow(['years', 'months', 'days']).negate().toObject();

  // Show result if date is valid and all diff values are positive
  let showResult = birthDate.isValid && Object.keys(diff).length > 0;
  if (showResult) {
    // Round down days to whole number
    diff.days = Math.floor(diff.days!);
    showResult = (diff.years! > 0 || diff.months! > 0 || diff.days! > 0);
  }

  function handleBirthDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newDate = e.target.value;
    setBirthDateString(newDate);
  }

  function getAgeString(diff: DurationObjectUnits) {
    let finalString = '';
    if (diff.years! > 0) {
        finalString += `${diff.years} year`;
        if (diff.years! > 1) finalString += 's';
        if (diff.months! > 0 && diff.days! > 0) finalString += ', ';
        if (diff.months! > 0 && diff.days! <= 0) finalString += ' and ';
        if (diff.months! <= 0 && diff.days! > 0) finalString += ' and ';
    }
    if (diff.months! > 0) {
        finalString += `${diff.months} month`;
        if (diff.months! > 1) finalString += 's';
        if (diff.years! > 0 && diff.days! > 0) finalString += ',';
        if (diff.days! > 0) finalString += ' and ';
    }
    if (diff.days! > 0) {
        finalString += `${diff.days} day`;
        if (diff.days! > 1) finalString += 's';
    }
    return finalString;
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
            value={birthDateString}
            onChange={handleBirthDateChange}
        />
      </div>
      {
        showResult
        ? (
        <p className="age-result">You are <span id="age-calculated">{getAgeString(diff)}</span> old</p>
        )
        : null
      }
    </div>
  )
}

export default AgeCalculator;