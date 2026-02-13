import { ServicesLinks } from '@/app/contstants/navigationLinks'
import ServiceCard from './ServiceCard'

const Services = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
					<h2 className='flex-1'>
						Våre tjenester{' '}
						<span className='text-darkGray'>
							– få mest mulig ut av hagen din
						</span>
					</h2>

					<p className='flex-1'>
						Vi tilbyr skreddersydde løsninger for hage og
						uteområder. Enten du trenger regelmessig vedlikehold
						eller en engangsjobb, sørger vi for pålitelig arbeid med
						synlige resultater.
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
