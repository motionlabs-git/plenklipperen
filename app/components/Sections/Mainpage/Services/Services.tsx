import Icon from '../../../../components/UI/Icon'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from '@gravity-ui/icons'
import ServiceCard from './ServiceCard'

const Services = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<div className=' flex gap-8'>
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

				<div className='flex gap-8 mt-10'>
					<ServiceCard />
					<ServiceCard />
					<ServiceCard />
				</div>
			</div>
		</section>
	)
}

export default Services
