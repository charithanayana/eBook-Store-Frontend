import { useEffect, useState } from "react"
import { FaCircle, FaCircleDot } from "react-icons/fa6";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

type CarouselProps = {
  imageUrls: string[]
}

export function CarouselData({ imageUrls }:
  CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0)
  

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  /* useEffect(() => {
    setInterval(() =>{
      setImageIndex((Index) => (Index === imageUrls.length < 3 ? 1 : imageIndex + 1))
    },3000)
  },[]) */

  return <div style={{ width: "100%", height: "100%", position: "relative" }} >
    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
      {imageUrls.map(url => (
        <img key={url} src={url} className="rounded-lg duration-1000 " style={{ translate: `${-100 * imageIndex}%` }} />
      ))}
    </div>

    <button onClick={showPrevImage} className="absolute top-1/3 pt-8" style={{ left: 0 }}>
      <RiArrowLeftWideFill className="size-12 hover:focus-visible:" />
    </button>
    <button onClick={showNextImage} className="absolute top-1/3 pt-8" style={{ right: 0 }}>
      <RiArrowRightWideFill className="size-12 hover:focus-visible:" />
    </button>
    <div style={{ position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem" }}>
      {imageUrls.map((_, index) => (
        <button className="hover:scale-125 duration-700" key={index}  onClick={() => setImageIndex(index)}> {index === imageIndex ? <FaCircleDot className="fill-gray-400"/> : <FaCircle />}</button>
      ))}
    </div>
  </div>


}