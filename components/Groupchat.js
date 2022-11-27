import React from 'react'

const Groupchat = ({ deleted, logo}) => {
    return (
        <div className={"border-2 border-appRed rounded-md h-24 pb-24 " + (deleted ? "bg-appRed" : "bg-white")}>
            <div className="flex ml-2 mt-2">
                <img className="rounded-full" src={`/grouplogos/${logo}.png`}></img>
                <p className={"ml-2 " + (deleted ? "text-white" : "text-black")}>UkraineConstanta</p>
            </div>
            <div className="flex leading-5 w-full items-center justify-center gap-10">
                {!deleted ? (
                    <>
                        <div className="text-center">
                            <p className="font-bold">87.7 K</p>
                            <p>participants</p>
                        </div>

                        <div className="text-center">
                            <p className="font-bold">200 K</p>
                            <p>messages</p>
                        </div>
                    </>
                ) :
                    <div className='flex w-full gap-2 items-center mt-1'>
                        <svg className='ml-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_21_661)">
                                <path d="M25.3334 8.54666L23.4534 6.66666L16 14.12L8.54669 6.66666L6.66669 8.54666L14.12 16L6.66669 23.4533L8.54669 25.3333L16 17.88L23.4534 25.3333L25.3334 23.4533L17.88 16L25.3334 8.54666Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_21_661">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='mb-0.5 text-white font-bold'>Group deleted 11:10 AM</p>
                    </div>}
            </div>
        </div>
    )
}

export default Groupchat