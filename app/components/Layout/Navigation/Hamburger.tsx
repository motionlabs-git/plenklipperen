import React from 'react'

const Hamburger = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<button
			onClick={handleClick}
			aria-label='Open mobile navigation'
			className='bg-primary w-10 aspect-square rounded-full flex items-center justify-center flex-col gap-1 cursor-pointer hover:bg-primaryAccent duration-200 md:hidden'
		>
			<div className='bg-white h-0.5 w-5 rounded-full'></div>
			<div className='bg-white h-0.5 w-5 rounded-full'></div>
			<div className='bg-white h-0.5 w-5 rounded-full'></div>
		</button>
	)
}

export default Hamburger
