import { Send } from 'feather-icons-react'
import Image from 'next/image'
import ContactForm from './Form/ContactForm'

const ContactUs = () => {
	return (
		<section className='relative'>
			<div className='section-wrapper'>
				<div className=' flex flex-col sm:flex-row gap-4 sm:gap-8'>
					<h2 className='flex-1'>
						Bestill en{' '}
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

				<div className='flex flex-col md:flex-row gap-8 mt-10'>
					<div className='relative w-full rounded-2xl overflow-hidden flex-1'>
						<Image
							className='rounded-2xl w-full h-full object-cover'
							src={'/images/kontaktoss.jpg'}
							alt={'Contact image'}
							width={800}
							height={600}
						/>

						<div className='absolute bottom-0 px-4 pb-4'>
							<div className=' blureBox w-full flex-1 rounded-2xl p-4 sm:p-8 flex items-center gap-6'>
								<span className='min-w-10 md:min-w-16 w-10 md:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-darkGreen'>
									<Send className='pt-1 pr-1' />
								</span>

								<div className='text-white'>
									<p className='text-xl !font-bold'>
										24/7 support you can trust
									</p>
									<p>
										Always available to provide reliable
										solutions whenever you need us.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex-1 rounded-2xl bg-lightGray shadow-2xs h-fit min-h-[-webkit-fill-available]'>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
