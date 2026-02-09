import { ChevronRight as ChevronIcon } from '@gravity-ui/icons'

const ChevronRight = ({ className }: { className?: string }) => {
	return (
		<div
			className={`absolute right-4 bottom-4 rounded-full aspect-square w-10 flex justify-center items-center shadow-sm duration-200 ${className}`}
		>
			<ChevronIcon />
		</div>
	)
}

export default ChevronRight
