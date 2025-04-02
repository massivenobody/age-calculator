# Age Calculator

A modern, responsive web application that calculates and displays a person's age in years, months, and days. Built with React, TypeScript, and Luxon for precise date calculations.

## Features

- Real-time age calculation as you input your birth date
- Precise age display in years, months, and days
- Correct use of punctuation and plurals
- Input validation for date selection
- Clean and intuitive user interface

## Technologies Used

- React 18
- TypeScript
- Luxon (for date manipulation)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/age-calculator.git
cd age-calculator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click on the date input field
2. Select your birth date from the calendar picker
3. Your age will be automatically calculated and displayed below the input field

## Project Structure

```
src/
├── components/
│   └── AgeCalculator.tsx    # Main component
├── utils/
│   └── age.ts              # Age calculation logic
├── App.tsx                 # Root component
├── App.css                 # Main styles
├── index.css              # Global styles
└── main.tsx               # Application entry point
```

## Future Development
As I learn about better date pickers (or maybe even develop my own?) I might come back and get rid of the default HTML5 picker. Other than that, I consider this project completed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
