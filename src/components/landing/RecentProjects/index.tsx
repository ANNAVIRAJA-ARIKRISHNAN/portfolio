import React from 'react'

import Card from './Card'
import { RecentProjectData } from './data'
import Button from '../../common/Button'

import './style.scss'
function RecentProjects() {
	return (
		<div id='recent-projects' className='recent-projects'>
			<div className='recent-projects__container'>
				<div className='section__title'>
					<h3>Projects</h3>
				</div>
				<div className='recent-projects__cards'>
					{RecentProjectData.map(
						(card: any) =>
							card.image && (
								<Card {...card}>
									{card.buttons.map((button: any) => (
										<a
											rel='noopener noreferrer'
											href={button.link}
											target='_blank'>
											<Button
												variant='normal'
												label={button.label}
											/>{' '}
										</a>
									))}
								</Card>
							),
					)}
				</div>
			</div>
		</div>
	)
}

export default RecentProjects
