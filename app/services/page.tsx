import ContactUs from '../components/Sections/Contact/ContactUs'
import SummerServices from '../components/Sections/SummerServices/SummerServices'
import PageHeadingSection from '../components/UI/PageHeadingSection'

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/nordas.jpg'}
				title={'Our services'}
				paragraph={
					'Empowering farmers with innovative, eco-friendly practices to meet rising global food demands'
				}
			/>

			<SummerServices />

			<span className='divider'></span>

			<ContactUs />
		</>
	)
}

export default page
