import GreenButton from './GreenButton'
import Grid from './Grid'

const IconGridSection = ({
	title,
	grayTitle,
	grid,
	link,
	linkText,
}: {
	title: string
	grayTitle?: string
	grid: { icon: React.JSX.Element; title: string; subTitle: string }[]
	link: string
	linkText: string
}) => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2>
					{title} <span className='text-darkGray'>{grayTitle}</span>
				</h2>

				<Grid className={'mt-10'} grid={grid}></Grid>

				<GreenButton
					className='mt-10 pl-6 py-2 font-semibold justify-self-center'
					text={linkText}
					link={link}
				/>
			</div>
		</section>
	)
}

export default IconGridSection
