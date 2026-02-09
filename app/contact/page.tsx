import ContactUs from '../components/Sections/Contact/ContactUs'
import Hero from '../components/Sections/Contact/Hero'

const Contact = () => {
	return (
		<>
			<Hero />
			<ContactUs />
			<span className='divider'></span>
			<section>
				<div className='section-wrapper'>
					<h1>FAQ</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Inventore provident, odit officiis id distinctio
						excepturi! Possimus qui libero molestiae, accusantium
						harum quisquam omnis asperiores eius in ullam saepe
						similique nesciunt?
					</p>
				</div>
			</section>
		</>
	)
}

export default Contact
