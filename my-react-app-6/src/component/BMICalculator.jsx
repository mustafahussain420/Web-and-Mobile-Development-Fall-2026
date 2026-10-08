import { useState } from 'react'

function BMICalculator() {
	const [weight, setWeight] = useState('')
	const [feet, setFeet] = useState('')
	const [inches, setInches] = useState('')
	const [bmi, setBmi] = useState(null)

	function calculateBMI(event) {
		event.preventDefault()

		const weightValue = Number(weight)
		const heightInMeters = (Number(feet) * 12 + Number(inches)) * 0.0254
		setBmi(weightValue / (heightInMeters * heightInMeters))
	}

	function resetForm() {
		setWeight('')
		setFeet('')
		setInches('')
		setBmi(null)
	}

	function getCategory(value) {
		if (value < 18.5) return 'Underweight'
		if (value < 25) return 'Normal weight'
		if (value < 30) return 'Overweight'
		return 'Obese'
	}

	return (
		<main>
			<h1>BMI Calculator</h1>
			<form onSubmit={calculateBMI}>
				<p>
					<label htmlFor="weight">Weight (kg): </label>
					<input
						id="weight"
						type="number"
						min="0"
						step="any"
						value={weight}
						onChange={(event) => setWeight(event.target.value)}
					/>
				</p>

				<p>
					<label htmlFor="feet">Height (feet): </label>
					<input
						id="feet"
						type="number"
						min="0"
						step="1"
						value={feet}
						onChange={(event) => setFeet(event.target.value)}
					/>
					<label htmlFor="inches"> Inches: </label>
					<input
						id="inches"
						type="number"
						min="0"
						step="any"
						value={inches}
						onChange={(event) => setInches(event.target.value)}
					/>
				</p>

				<button type="submit">Calculate</button>{' '}
				<button type="button" onClick={resetForm}>Reset</button>
			</form>

			{bmi !== null && <p>BMI: {bmi.toFixed(1)} ({getCategory(bmi)})</p>}
		</main>
	)
}

export default BMICalculator
