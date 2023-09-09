import { useState } from 'react'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

interface propType {
    name: string
    imgArray: any[]
    dependencyArray: string[]
    link: string
}

export default function ProjectInfo(props: propType) {
    const [imagesArray, setImagesArray] = useState(props.imgArray);
    const [index, setIndex] = useState(0);

    return (
        <>
            <div>
                <div className='mx-auto w-1/2 text-center font-bold sm:text-base md:text-lg lg:text-xl'>{props.name}</div>
                <div className='h-2'></div>
                {
                    imagesArray.length !== 0 && <img src={imagesArray[index]} className='w-[90%] h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-contain mx-auto' alt="" />
                }
                <div className='h-1'></div>
                <div className='w-full h-4'>
                    <div className=' w-1/2 lg:w-1/4 mx-auto flex justify-around'>
                        {
                            props.imgArray.map((image, counter) => {
                                return (
                                    <div key={image} className={`w-4 h-4 rounded-full border-2 ${index === counter && 'bg-black'}`} onClick={() => setIndex(counter)}></div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    props.link !== '' && 
                    <div className='w-full'>
                        <div className='h-4'></div>
                        <div className='w-5/6 mx-auto md:w-1/2 lg:w-1/4'>
                            <a href={props.link} className='flex gap-2 items-center'>
                                <span className='text-sm'>Go to project!</span>
                                <BsFillArrowRightSquareFill size={25} className='text-green-500'></BsFillArrowRightSquareFill>
                            </a>
                        </div>
                    </div>
                }
                <div className='h-2'></div>
                <div className='w-full'>
                    <div className='w-[90%] mx-auto flex justify-center gap-2 flex-wrap'>
                        {
                            props.dependencyArray.map((dependency) => {
                                return (
                                    <div key={dependency} className='text-xs px-2 py-1 bg-blue-500 rounded text-white'>{dependency}</div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </>
    )

}