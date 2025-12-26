import React, { useState } from 'react'
import images from './assets/images'

const App = () => {
    const [currDragon, setCurrDragon] = useState(0)
    const [bgRemoved, setBgRemoved] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const Dragons = [
        {
            id: 0,
            img: images.ZeroHead,
            bgImg: images.ZeroHeadBG,
        },
        {
            id: 1,
            img: images.OneHead,
            bgImg: images.OneHeadBG,
        },
        {
            id: 2,
            img: images.TwoHead,
            bgImg: images.TwoHeadBG,
        },
        {
            id: 3,
            img: images.ThreeHead,
            bgImg: images.ThreeHeadBG,
        },
    ]

    function changeDragon(num) {
        if (num === currDragon) return

        setIsAnimating(true)
        setTimeout(() => {
            setCurrDragon(num)
            setBgRemoved(false)
            setIsAnimating(false)
        }, 200)
    }

    function removeBG() {
        setIsAnimating(true)
        setTimeout(() => {
            setBgRemoved(true)
            setIsAnimating(false)
        }, 200)
    }

    const currentImg = bgRemoved
        ? Dragons[currDragon].bgImg
        : Dragons[currDragon].img

    return (
        <div className="min-h-screen flex flex-col">
            {/* BG */}
            <img
                src={images.BGForest}
                className="fixed z-0 w-screen h-screen object-cover brightness-50"
                alt=""
            />

            <div className="relative z-10 my-4 w-full flex-1">
                <h1 className="font-title text-center text-6xl md:text-8xl lg:text-9xl text-shadow-orange-500 text-shadow-md text-white leading-12 mb-4 md:mb-0 md:leading-none">
                    Three Head Dragon
                </h1>

                {/* HEAD BUTTONS */}
                <div className="flex justify-center">
                    <div className="bg-white/5 min-w-fit p-2 rounded-full backdrop-blur-xs shadow-md flex gap-2">
                        {[0, 1, 2, 3].map((n) => (
                            <button
                                key={n}
                                onClick={() => changeDragon(n)}
                                className="text-white shadow-sm hover:bg-white/10 transition-all duration-300 cursor-pointer md:px-4 md:py-2 bg-white/5 rounded-3xl font-para md:text-2xl text-xl px-3 py-2 hover:scale-110"
                            >
                                {n} head
                            </button>
                        ))}
                    </div>
                </div>

                {/* IMAGE */}
                <div className="mt-4 mx-2">
                    <div className="flex justify-center h-full md:h-90 items-center">
                        <div className="flex justify-center bg-white/15 backdrop-blur-xs rounded-4xl  p-2 md:p-4 w-fit">
                            <img
                                src={currentImg}
                                alt=""
                                className={`
                w-96 rounded-3xl
                transition-all duration-300 ease-in-out
                ${isAnimating ? 'opacity-0 scale-95 blur-lg' : 'opacity-100 scale-100'}
            `}
                            />
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-center mt-6">
                        <div className="flex items-center transition-all duration-300">
                            {/* REMOVE BG */}
                            <button
                                onClick={removeBG}
                                className={`
                bg-white md:px-5 md:py-3 font-para md:text-2xl text-xl px-3 py-2
                rounded-3xl shadow-md shadow-black cursor-pointer
                hover:scale-105 transition-all duration-300
                overflow-hidden whitespace-nowrap
                ${bgRemoved
                                        ? 'opacity-0 scale-90 w-0 mr-0 p-0 pointer-events-none'
                                        : 'opacity-100 scale-100 w-auto mr-2'}
            `}
                            >
                                Remove BG
                            </button>

                            {/* DOWNLOAD */}
                            <a
                                download
                                href={currentImg}
                                className="bg-white md:px-5 md:py-3 font-para md:text-2xl text-xl px-3 py-2 rounded-3xl shadow-md shadow-black cursor-pointer hover:scale-105 transition-all duration-300"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="relative z-20 bottom-0 text-neutral-400 font-para text-center md:text-right px-2 w-full text-lg md:text-xl ">Developed by an <a href="https://thinakaran.dev/" className='text-white underline' target="_blank" rel="noopener noreferrer">Thinakaran Manokaran</a></footer>
        </div>
    )
}

export default App
