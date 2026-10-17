import { Metadata } from 'next'
import CityPartPage, {
	cityPartMetadata,
} from '../components/Sections/CityPart/CityPartPage'
import { CityPartData } from '../contstants/CityPartsData'

const { arstad: area } = CityPartData

export const metadata: Metadata = cityPartMetadata(area)

const page = () => {
	return <CityPartPage area={area} />
}

export default page
