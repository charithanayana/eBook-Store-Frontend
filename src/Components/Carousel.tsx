import { CarouselData } from './CarouselData'
import sl1 from '../assets/Image/sl1.png'
import sl2 from '../assets/Image/sl2.jpg'
import sl3 from '../assets/Image/sl3.jpg'
import sl4 from '../assets/Image/sl4.jpg'

const IMAGES = [sl1, sl2, sl3, sl4]

export default function Carousel() {
  return <div className='w-9/12 h-2/3 mx-auto mt-6 rounded-md '>
    <CarouselData imageUrls={IMAGES} />
  </div>
}

