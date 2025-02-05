import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'

export class App extends Component {
	setup(props) {
		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'app'
		this.state = {
			total: 0,
			donates: [],
			totalTitle: 'Итого: $',
		}

		const totalAmount = document.createElement('h1')
		totalAmount.className = 'total-amount'
		totalAmount.textContent = this.state.totalTitle
		this.$rootElement.appendChild(totalAmount)

		const totalValue = document.createElement('span')
		totalValue.textContent = this.state.total
		totalAmount.insertAdjacentElement('beforeend', totalValue)
		this.$total = totalValue

		const donateForm = new Form({
			onSubmit: this.onItemCreate.bind(this),
		})
		this.$rootElement.appendChild(donateForm.$rootElement)
		const donateList = new List()
		this.$rootElement.appendChild(donateList.$rootElement)
		this.donateList = donateList
	}

	onItemCreate(amount) {
		console.log(amount)
		const item = new ListItem({
			amount: amount,
		})
		this.state.donates.push(item)
		this.donateList.addItem(item)
		this.state.total += amount
		this.$total.textContent = this.state.total
	}
}
