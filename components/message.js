import React from 'react'

const message = () => {
    return (
        <div className='w-full flex gap-10 mt-2 pt-10'>
            <div className='w-fit mr-auto flex flex-col gap-2 items-center justify-start'>
                <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8343 0H2.40571C1.14857 0 0.131424 1.15 0.131424 2.55556L0.119995 23L8.12 19.1667L16.12 23V2.55556C16.12 1.15 15.0914 0 13.8343 0ZM13.8343 19.1667L8.12 16.3811L2.40571 19.1667V2.55556H13.8343V19.1667Z" fill="black" />
                </svg>

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="16.000000pt" height="24.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M2465 5101 c-56 -26 -769 -742 -790 -793 -19 -48 -19 -138 1 -186 44
                    -107 163 -161 281 -127 53 16 69 29 215 173 l158 156 0 -1175 c0 -1117 1
                    -1176 19 -1214 38 -84 117 -135 211 -135 94 0 173 51 211 135 18 38 19 97 19
                    1225 l0 1185 163 -162 c89 -88 176 -168 192 -176 108 -52 242 -11 303 92 22
                    38 27 58 27 116 0 58 -5 78 -27 115 -39 66 -734 755 -780 775 -52 21 -153 19
                    -203 -4z"/><path d="M965 3349 c-358 -45 -642 -268 -701 -551 -12 -58 -14 -237 -12 -1156
                    l3 -1087 26 -66 c37 -97 75 -156 143 -227 114 -119 276 -205 460 -243 87 -18
                    163 -19 1672 -19 1738 0 1653 -3 1828 61 110 40 205 99 290 179 78 75 125 145
                    165 248 l26 67 3 1087 c3 1183 4 1162 -53 1282 -104 220 -342 376 -645 421
                    -71 11 -200 15 -512 15 l-418 0 0 -235 0 -234 453 -3 c441 -3 453 -4 512 -26
                    75 -28 145 -75 173 -116 l22 -32 0 -1042 0 -1042 -34 -38 c-46 -50 -117 -88
                    -212 -112 -75 -19 -115 -20 -1589 -20 -894 0 -1532 4 -1561 9 -115 22 -219 78
                    -268 144 -21 28 -21 29 -21 1061 l0 1032 24 36 c31 45 99 91 176 120 59 22 71
                    23 513 26 l452 3 0 234 0 235 -422 -1 c-233 -1 -454 -5 -493 -10z"/>
                    </g>
                </svg>

                <div className='flex flex-col gap-0 justify-center'>
                    <svg className='ml-0.5' version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="17.000000pt" height="17.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M2240 5105 c-1001 -124 -1842 -833 -2134 -1798 -82 -271 -111 -499
                        -103 -821 10 -404 86 -716 264 -1073 l65 -131 -167 -519 c-155 -481 -167 -522
                        -163 -579 7 -109 73 -175 182 -182 57 -4 98 8 579 163 l519 167 131 -65 c247
                        -123 469 -194 757 -243 130 -22 503 -30 656 -14 1023 104 1890 818 2188 1804
                        74 243 106 468 106 746 0 209 -10 324 -46 505 -168 852 -761 1560 -1580 1885
                        -182 73 -450 138 -656 160 -131 14 -469 11 -598 -5z m675 -419 c458 -85 843
                        -285 1164 -607 274 -273 466 -604 561 -963 57 -218 65 -279 65 -556 0 -277 -8
                        -338 -65 -556 -95 -359 -287 -690 -561 -963 -321 -322 -708 -523 -1164 -607
                        -119 -21 -448 -30 -584 -15 -139 15 -277 44 -408 85 -146 47 -224 80 -410 176
                        -157 82 -158 82 -218 77 -37 -4 -199 -51 -415 -121 -195 -63 -355 -114 -357
                        -113 -1 2 50 162 113 357 70 216 117 378 121 415 5 57 3 64 -42 150 -120 226
                        -159 315 -211 478 -41 131 -70 269 -85 408 -15 136 -6 465 15 584 84 456 285
                        843 607 1164 171 172 349 301 559 406 235 118 429 176 735 219 76 11 494 -2
                        580 -18z"/>
                            <path d="M1455 2791 c-92 -41 -145 -126 -145 -231 0 -148 102 -250 250 -250 148 0 250 102 250 250 0 148 -102 250 -250 250 -42 0 -79 -7 -105 -19z" /> <path d="M2455 2791 c-92 -41 -145 -126 -145 -231 0 -148 102 -250 250 -250 148 0 250 102 250 250 0 148 -102 250 -250 250 -42 0 -79 -7 -105 -19z" /> <path d="M3455 2791 c-92 -41 -145 -126 -145 -231 0 -148 102 -250 250 -250 148 0 250 102 250 250 0 148 -102 250 -250 250 -42 0 -79 -7 -105 -19z" />
                        </g>
                    </svg>
                    <p className='text-sm'>120</p>
                </div>
            </div>

            <div className='flex flex-col'>
                <div>
                    <p className='-mt-1.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ligula nec nisi malesuada, a scelerisque ipsum rutrum. Vivamus porttitor rhoncus arcu, vel lacinia urna semper rhoncus. Nullam maximus venenatis libero, quis luctus ex condimentum at. Nulla ante massa, posuere ac molestie non, interdum id leo. Donec id elementum mi. Maecenas nec vestibulum elit. Curabitur at viverra nisi.</p>
                </div>

                <div className='mt-2 flex items-center'>
                    <div className='flex gap-4'>
                        <div className='flex items-center border-2 border-appRed w-fit px-4 py-0.5 rounded-md'>
                            <p className='text-appRed'>Shelter</p>
                        </div>

                        <div className='flex items-center border-2 border-black w-fit px-4 py-0.5 rounded-md'>
                            <p className='text-black'>Payment</p>
                        </div>
                    </div>

                    <div className='ml-auto'>
                        <span className='flex gap-1'><p className='text-appLightText'>UkraineConstanta</p> <p>2 hours ago</p></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default message