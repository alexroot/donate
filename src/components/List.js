import { Component } from '../core/Component'

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'donates-container'
		const title = document.createElement('h2')
		title.className = 'donates-container__title'
		title.textContent = 'Список донатов'
		const donateList = document.createElement('div')
		donateList.className = 'donates-container__donates'
		this.$rootElement.appendChild(title)
		this.$rootElement.appendChild(donateList)
		this.$listContainer = donateList
	}

	addItem(item) {
		this.$listContainer.appendChild(item.$rootElement)
	}
}
