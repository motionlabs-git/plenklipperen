import { ServicesLinks } from '@/app/contstants/navigationLinks'
import ServiceCard from './ServiceCard'

const Services = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
					<h2 className='flex-1'>
						Naše služby{' '}
						<span className='text-darkGray'>
							profesjonell konsultasjon i dag
						</span>
					</h2>

					<p className='flex-1'>
						Bare fyll ut det korte skjemaet, så vil teamet vårt
						raskt svare med den mest effektive og personlige
						løsningen som er skreddersydd for dine unike behov og
						mål.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10'>
					{ServicesLinks.map((service) => (
						<ServiceCard
							key={service.link}
							title={service.title}
							text={service.text}
							image={service.image}
							link={service.link}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
