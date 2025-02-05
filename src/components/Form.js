import { Component } from '../core/Component'

export class Form extends Component {
	setup(props) {
		this.$rootElement = document.createElement('form')
		this.$rootElement.className = 'donate-form'
		this.state = {
			amount: '',
		}
		const label = document.createElement('label')
		label.className = 'donate-form__input-label'
		label.textContent = 'Введите сумму в $'
		const input = document.createElement('input')
		input.className = 'donate-form__donate-input'
		input.type = 'number'
		input.min = '0'
		input.max = '100'
		input.value = this.state.amount
		input.required = true
		input.addEventListener('input', this.handleInput.bind(this))
		const button = document.createElement('button')
		button.className = 'donate-form__submit-button'
		button.type = 'submit'
		button.textContent = 'Задонатить'
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
		label.appendChild(input)
		this.$rootElement.appendChild(label)
		this.$rootElement.appendChild(button)
		this.$input = input
		this.$button = button
	}
	//getter
	get isValid() {
		return this.state.amount >= 1 && this.state.amount <= 100
	}

	handleInput(event) {
		this.state.amount = event.target.value
		this.$button.disabled = !this.isValid
	}
	handleSubmit(event) {
		event.preventDefault()
		if (this.isValid) {
			this.props.onSubmit(Number(this.state.amount))
			this.state.amount = ''
			this.$input.value = ''
			this.$button.disabled = true
		}
	}
}
