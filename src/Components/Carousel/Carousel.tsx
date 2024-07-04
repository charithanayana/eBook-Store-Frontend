import { useState } from "react";
import { data } from "./CarouselData";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaCircle, FaCircleDot } from "react-icons/fa6";



function Carousel() {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === data.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return data.length - 1
            return index - 1
        })
    }


    return (
        <>
            <div className="flex items-center w-9/12 mx-auto mt-6">
                {data.map((props, i) => (
                    <div key={props.id} className={imageIndex === i ? "block" : "hidden "}>
                        <img src={props.Image} className="rounded-lg " />
                        <div className="absolute top-0 pl-80 pt-56 " >
                            <h1 className="text-white bg-gray-800/35" >{props.heding}</h1>
                            <p className="text-white bg-gray-800/35" >{props.details}</p>
                        </div>
                    </div>
                ))}
                <button onClick={showPrevImage} className="absolute pt-4 pl-48" style={{ left: 0 }}>
                    <RiArrowLeftWideFill className="size-12 hover:focus-visible:" />
                </button>
                <button onClick={showNextImage} className="absolute pt-4 pr-48" style={{ right: 0 }}>
                    <RiArrowRightWideFill className="size-12 hover:focus-visible:" />
                </button>

                <div style={{ position: "absolute", top: "28rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem" }}>
                    {data.map((_, index) => (
                        <button className="hover:scale-125 duration-700" key={index} onClick={() => setImageIndex(index)}> {index === imageIndex ? <FaCircleDot className="fill-gray-400" /> : <FaCircle />}</button>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Carousel