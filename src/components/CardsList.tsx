import React from 'react'
import Card from './Card'
import './Components.css'
import LinkedItem from './LinkedItem'

/**
 * Компонент отображения всех списков с заголовками
 */

const cardsData = [
	{
		title: 'Погода',
		items: [
			{ icon: '☁️', text: 'Москва', link: 'https://example.com/news/1' },
			{ icon: '☁️', text: 'Таганрог', link: 'https://example.com/news/2' },
		],
	},
	{
		title: 'Телепрограмма',
		items: [
			{ icon: '▶️', text: 'ТНТ', link: 'https://example.com/news/1' },
			{
				icon: '▶️',
				text: 'Наедине со всеми',
				link: 'https://example.com/news/2',
			},
		],
	},
]

const CardsList: React.FC = () => {
	return (
		<div className='cards-list'>
			{cardsData.map((card, index) => (
				<Card key={index} title={card.title}>
					{card.items.map((item, itemIndex) => (
						<LinkedItem key={itemIndex} {...item} />
					))}
				</Card>
			))}
		</div>
	)
}

export default CardsList
