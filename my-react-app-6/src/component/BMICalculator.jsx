import { useState } from 'react'

function BMICalculator() {
	const [weight, setWeight] = useState('')
	const [height, setHeight] = useState('')
	const [bmi, setBmi] = useState(null)

	function calculateBMI(event) {
		event.preventDefault()

		const weightValue = Number(weight)
		const heightValue = Number(height)
		const heightInMeters = heightValue / 100
		setBmi(weightValue / (heightInMeters * heightInMeters))
	}

	function resetForm() {
		setWeight('')
		setHeight('')
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
					<label htmlFor="height">Height (cm): </label>
					<input
						id="height"
						type="number"
						min="0"
						step="any"
						value={height}
						onChange={(event) => setHeight(event.target.value)}
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
