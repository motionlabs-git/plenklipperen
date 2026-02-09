import { PlayFill } from '@gravity-ui/icons'

const PlayButton = ({ className }: { className?: string }) => {
	return (
		<div
			className={`text-white backdrop-blur-sm bg-darkGray/20 border-black/20 border flex justify-center items-center w-14 aspect-square rounded-full cursor-pointer hover:bg-primary duration-200 ${className}`}
		>
			<PlayFill />
		</div>
	)
}

export default PlayButton
