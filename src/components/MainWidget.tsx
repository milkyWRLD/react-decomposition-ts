import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import LinksContent from './LinksContent'

/**
 * Основной компонент. Строка поиска и ссылки на другие ресурсы
 */

const links = [
	{ reference: '.', name: 'Видео' },
	{ reference: '.', name: 'Картинки' },
	{ reference: '.', name: 'Новости' },
]

const MainWidget: React.FC = () => {
	return (
		<>
			<div className='main-content'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yandex_official_logo.svg/220px-Yandex_official_logo.svg.png'></img>
				<div className='base-container'>
					<div className='links-content'>
						<LinksContent links={links} />
					</div>
					<div className='search-container'>
						<input></input>
						<button className='btn btn-warning'>Найти</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainWidget
