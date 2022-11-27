import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Groups = () => {
    return (
        <div className="w-full">
            <NavBar />

            <div className="w-10/12 m-auto flex gap-6 mt-32 relative h-fit ">
                <div className="w-1/2">
                    <div className='flex'>
                        <div className='flex gap-4 ml-0 mr-auto'>
                            <p className='font-medium text-2xl'>7 Groups</p>
                            <p className='font-medium text-2xl'>5 Countries</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p>All group selected</p>
                            <div className='h-4 w-4 bg-white border-2 border-black'></div>
                        </div>
                    </div>

                    <div>
                        <div className='bg-green-300 rounded-md border-2 border-appRed h-32 flex '>
                            <div className='rounded-full'>
                                <img className='rounded-full mt-2 ml-2' src="/groupLogos/1.png" />
                            </div>

                            <div className='flex mt-2 ml-4'>
                                <div>
                                    <p className='text-2xl'>UkraineConstanta</p>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>URL: https://t.me/refuggeesinPoland</p>
                                        <p className='text-xs'>Country: Poland</p>
                                    </div>
                                </div>

                                

                                <div>
                                    <div className='flex flex-col'>
                                        <p>87.8 K</p>
                                        <p>participants</p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p>200 K</p>
                                        <p>messages</p>
                                    </div>
                                    <div>
                                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_67_10)">
                                                <path d="M16.9998 25.3333C16.9998 26.8 18.1998 28 19.6665 28H30.3332C31.7998 28 32.9998 26.8 32.9998 25.3333V9.33333H16.9998V25.3333ZM34.3332 5.33333H29.6665L28.3332 4H21.6665L20.3332 5.33333H15.6665V8H34.3332V5.33333Z" fill="#BE2F2A" />
                                            </g>
                                            <path d="M4.60059 41.3711C4.75098 41.3711 4.9082 41.3802 5.07227 41.3984C5.23633 41.4121 5.38216 41.4326 5.50977 41.46L5.36621 42.5127C5.24316 42.4808 5.10645 42.4557 4.95605 42.4375C4.80566 42.4193 4.66439 42.4102 4.53223 42.4102C4.23145 42.4102 3.94661 42.4717 3.67773 42.5947C3.41341 42.7132 3.18099 42.8864 2.98047 43.1143C2.77995 43.3376 2.62272 43.6087 2.50879 43.9277C2.39486 44.2422 2.33789 44.5931 2.33789 44.9805V49H1.19629V41.5078H2.13965L2.2627 42.8887H2.31055C2.46549 42.6107 2.65234 42.3577 2.87109 42.1299C3.08984 41.8975 3.34277 41.7129 3.62988 41.5762C3.92155 41.4395 4.24512 41.3711 4.60059 41.3711ZM9.80957 41.3711C10.4476 41.3711 10.9945 41.5124 11.4502 41.7949C11.9059 42.0775 12.2546 42.474 12.4961 42.9844C12.7376 43.4902 12.8584 44.0827 12.8584 44.7617V45.4658H7.68359C7.69727 46.3454 7.91602 47.0153 8.33984 47.4756C8.76367 47.9359 9.36068 48.166 10.1309 48.166C10.6048 48.166 11.0241 48.1227 11.3887 48.0361C11.7533 47.9495 12.1315 47.8219 12.5234 47.6533V48.6514C12.1452 48.82 11.7692 48.943 11.3955 49.0205C11.0264 49.098 10.5889 49.1367 10.083 49.1367C9.36296 49.1367 8.73405 48.9909 8.19629 48.6992C7.66309 48.403 7.24837 47.9701 6.95215 47.4004C6.65592 46.8307 6.50781 46.1335 6.50781 45.3086C6.50781 44.502 6.64225 43.8047 6.91113 43.2168C7.18457 42.6243 7.56738 42.1686 8.05957 41.8496C8.55632 41.5306 9.13965 41.3711 9.80957 41.3711ZM9.7959 42.3008C9.18978 42.3008 8.70671 42.499 8.34668 42.8955C7.98665 43.292 7.77246 43.8457 7.7041 44.5566H11.6689C11.6644 44.11 11.5938 43.7181 11.457 43.3809C11.3249 43.0391 11.1221 42.7747 10.8486 42.5879C10.5752 42.3965 10.2243 42.3008 9.7959 42.3008ZM22.9209 41.3711C23.7458 41.3711 24.3678 41.5876 24.7871 42.0205C25.2064 42.4489 25.416 43.1393 25.416 44.0918V49H24.2949V44.1465C24.2949 43.5404 24.1628 43.0869 23.8984 42.7861C23.6387 42.4808 23.2513 42.3281 22.7363 42.3281C22.0117 42.3281 21.4854 42.5378 21.1572 42.957C20.8291 43.3763 20.665 43.9938 20.665 44.8096V49H19.5371V44.1465C19.5371 43.7409 19.4779 43.4036 19.3594 43.1348C19.2454 42.8659 19.0723 42.6654 18.8398 42.5332C18.612 42.3965 18.3226 42.3281 17.9717 42.3281C17.4749 42.3281 17.0762 42.4307 16.7754 42.6357C16.4746 42.8408 16.2559 43.1462 16.1191 43.5518C15.987 43.9528 15.9209 44.4473 15.9209 45.0352V49H14.7861V41.5078H15.7021L15.873 42.5674H15.9346C16.085 42.3076 16.2741 42.0889 16.502 41.9111C16.7298 41.7334 16.985 41.599 17.2676 41.5078C17.5501 41.4167 17.8509 41.3711 18.1699 41.3711C18.7396 41.3711 19.2158 41.4782 19.5986 41.6924C19.986 41.902 20.2663 42.2233 20.4395 42.6562H20.501C20.7471 42.2233 21.0843 41.902 21.5127 41.6924C21.9411 41.4782 22.4105 41.3711 22.9209 41.3711ZM34.207 45.2402C34.207 45.8555 34.1273 46.4046 33.9678 46.8877C33.8083 47.3708 33.5781 47.7786 33.2773 48.1113C32.9766 48.444 32.612 48.6992 32.1836 48.877C31.7598 49.0501 31.279 49.1367 30.7412 49.1367C30.2399 49.1367 29.7796 49.0501 29.3604 48.877C28.9456 48.6992 28.5856 48.444 28.2803 48.1113C27.9795 47.7786 27.7448 47.3708 27.5762 46.8877C27.4121 46.4046 27.3301 45.8555 27.3301 45.2402C27.3301 44.4199 27.4691 43.7227 27.7471 43.1484C28.0251 42.5697 28.4215 42.1299 28.9365 41.8291C29.4561 41.5238 30.0736 41.3711 30.7891 41.3711C31.4727 41.3711 32.0697 41.5238 32.5801 41.8291C33.0951 42.1344 33.4938 42.5765 33.7764 43.1553C34.0635 43.7295 34.207 44.4245 34.207 45.2402ZM28.5059 45.2402C28.5059 45.8418 28.5856 46.3636 28.7451 46.8057C28.9046 47.2477 29.1507 47.5895 29.4834 47.8311C29.8161 48.0726 30.2445 48.1934 30.7686 48.1934C31.2881 48.1934 31.7142 48.0726 32.0469 47.8311C32.3841 47.5895 32.6325 47.2477 32.792 46.8057C32.9515 46.3636 33.0312 45.8418 33.0312 45.2402C33.0312 44.6432 32.9515 44.1283 32.792 43.6953C32.6325 43.2578 32.3864 42.9206 32.0537 42.6836C31.721 42.4466 31.2904 42.3281 30.7617 42.3281C29.9824 42.3281 29.4105 42.5856 29.0459 43.1006C28.6859 43.6156 28.5059 44.3288 28.5059 45.2402ZM37.8164 49L34.9727 41.5078H36.1895L37.8369 46.04C37.9508 46.3499 38.0671 46.6917 38.1855 47.0654C38.304 47.4391 38.3861 47.7399 38.4316 47.9678H38.4795C38.5342 47.7399 38.6253 47.4391 38.7529 47.0654C38.8805 46.6872 38.9967 46.3454 39.1016 46.04L40.749 41.5078H41.9658L39.1152 49H37.8164ZM46.0537 41.3711C46.6917 41.3711 47.2386 41.5124 47.6943 41.7949C48.1501 42.0775 48.4987 42.474 48.7402 42.9844C48.9818 43.4902 49.1025 44.0827 49.1025 44.7617V45.4658H43.9277C43.9414 46.3454 44.1602 47.0153 44.584 47.4756C45.0078 47.9359 45.6048 48.166 46.375 48.166C46.849 48.166 47.2682 48.1227 47.6328 48.0361C47.9974 47.9495 48.3757 47.8219 48.7676 47.6533V48.6514C48.3893 48.82 48.0133 48.943 47.6396 49.0205C47.2705 49.098 46.833 49.1367 46.3271 49.1367C45.6071 49.1367 44.9782 48.9909 44.4404 48.6992C43.9072 48.403 43.4925 47.9701 43.1963 47.4004C42.9001 46.8307 42.752 46.1335 42.752 45.3086C42.752 44.502 42.8864 43.8047 43.1553 43.2168C43.4287 42.6243 43.8115 42.1686 44.3037 41.8496C44.8005 41.5306 45.3838 41.3711 46.0537 41.3711ZM46.04 42.3008C45.4339 42.3008 44.9508 42.499 44.5908 42.8955C44.2308 43.292 44.0166 43.8457 43.9482 44.5566H47.9131C47.9085 44.11 47.8379 43.7181 47.7012 43.3809C47.569 43.0391 47.3662 42.7747 47.0928 42.5879C46.8193 42.3965 46.4684 42.3008 46.04 42.3008Z" fill="#C5C5C5" />
                                            <defs>
                                                <clipPath id="clip0_67_10">
                                                    <rect width="32" height="32" fill="white" transform="translate(9)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">

                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Groups