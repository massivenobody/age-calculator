function AgeCalculator() {
  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="age-calculator-picker">
        <label htmlFor="date-of-birth">Enter your birth date:</label>
        <input type="date" id="date-of-birth" />
        <button>Calculate</button>
      </div>
        <p className="age-result">You are <span id="age-calculated"></span> years old</p>
    </div>
  )
}

export default AgeCalculator;