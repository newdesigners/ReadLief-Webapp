import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Message from '../components/message'

const Messages = () => {
    return (
        <div className="w-full">
            <NavBar />

            <div className="w-10/12 m-auto flex gap-6 mt-32 relative h-fit ">

                {/* FILTER SECTION */}
                <div className='w-4/12'>
                    <div className='bg-appDarkGrey'>
                        <p className='font-semibold text-2xl text-center py-4'>Messages overview</p>
                    </div>
                    <div className='bg-appGrey bg-opacity-50 h-fit pb-4 pt-1'>

                        {/* CATEGORIES */}
                        <div className='w-5/6 m-auto  mt-6'>
                            {/* TITLE */}
                            <div className='flex w-full items-center '>
                                <svg className='mt-0.5 hover:cursor-pointer' width="23" height="16" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5L8.5 9.5L17 0.5" stroke="black" />
                                </svg>

                                <p className='font-medium text-xl px-4'>Category</p>

                                <svg className='mt-0.5' width="100%" height="1" viewBox="0 0 500 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="500" y2="0.5" stroke="black" />
                                </svg>
                            </div>

                            {/* CONTENT */}
                            <div className='ml-14  mt-4'>
                                <input className='accent-black' type="checkbox" id="All" name="All" value="All" />
                                <label className='select-none' for="All"> All</label><br />

                                <input className='accent-black' type="checkbox" id="Shelters" name="Shelters" value="Shelters" />
                                <label className='select-none' for="Shelters"> Shelters</label><br />

                                <input className='accent-black' type="checkbox" id="Patment" name="Patment" value="Patment" />
                                <label className='select-none' for="Patment"> Patment</label><br />

                                <input className='accent-black' type="checkbox" id="Country" name="Country" value="Country" />
                                <label className='select-none' for="Country"> Country</label><br />

                                <input className='accent-black' type="checkbox" id="Contact" name="Contact" value="Contact" />
                                <label className='select-none' for="Contact"> Contact</label><br />

                                <input className='accent-black' type="checkbox" id="Humans" name="Humans" value="Humans" />
                                <label className='select-none' for="Humans"> Humans</label><br />

                                <input className='accent-black' type="checkbox" id="Red Cross" name="Red Cross" value="Red Cross" />
                                <label className='select-none' for="Red Cross"> Red Cross</label><br />

                                <input className='accent-black' type="checkbox" id="Questions" name="Questions" value="Questions" />
                                <label className='select-none' for="Questions"> Questions</label><br />

                                <input className='accent-black' type="checkbox" id="Transport" name="Transport" value="Transport" />
                                <label className='select-none' for="Transport"> Transport</label><br />
                            </div>
                        </div>

                        {/* TELEGRAM GROUPS */}
                        <div className='w-5/6 m-auto mt-10 '>
                            {/* TITLE */}
                            <div className='flex w-full items-center '>
                                <svg className='mt-0.5 hover:cursor-pointer' width="23" height="16" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5L8.5 9.5L17 0.5" stroke="black" />
                                </svg>

                                <p className='font-medium text-xl px-4 w-96'>Telegram Groups</p>

                                <svg className='mt-0.5' width="100%" height="1" viewBox="0 0 500 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="500" y2="0.5" stroke="black" />
                                </svg>
                            </div>

                            {/* CONTENT */}
                            <div className='ml-14 mt-4'>
                                <input className='accent-black' type="checkbox" id="All" name="All" value="All" />
                                <label className='select-none' for="All"> All</label><br />

                                <input className='accent-black' type="checkbox" id="UkrainiansinRomania" name="UkrainiansinRomania" value="UkrainiansinRomania" />
                                <label className='select-none' for="UkrainiansinRomania"> UkrainiansinRomania</label><br />

                                <input className='accent-black' type="checkbox" id="UkraineConstanta" name="UkraineConstanta" value="UkraineConstanta" />
                                <label className='select-none' for="UkraineConstanta"> UkraineConstanta</label><br />

                                <input className='accent-black' type="checkbox" id="UA_Help_Brasov" name="UA_Help_Brasov" value="UA_Help_Brasov" />
                                <label className='select-none' for="UA_Help_Brasov"> UA_Help_Brasov</label><br />

                                <input className='accent-black' type="checkbox" id="OdessaBucharest" name="OdessaBucharest" value="OdessaBucharest" />
                                <label className='select-none' for="OdessaBucharest"> OdessaBucharest</label><br />

                                <input className='accent-black' type="checkbox" id="iasi_ua" name="iasi_ua" value="iasi_ua" />
                                <label className='select-none' for="iasi_ua"> iasi_ua</label><br />

                                <input className='accent-black' type="checkbox" id="BIG_Romania" name="RBIG_Romania" value="BIG_Romania" />
                                <label className='select-none' for="BIG_Romania"> BIG_Romania</label><br />

                                <input className='accent-black' type="checkbox" id="Ukrainias_Bucharest" name="Ukrainias_Bucharest" value="Ukrainias_Bucharest" />
                                <label className='select-none' for="Ukrainias_Bucharest"> Ukrainias_Bucharest</label><br />

                                <input className='accent-black' type="checkbox" id="romaniahelp2022" name="romaniahelp2022" value="romaniahelp2022" />
                                <label className='select-none' for="romaniahelp2022"> romaniahelp2022</label><br />

                                <input className='accent-black' type="checkbox" id="porubnepunk" name="porubnepunk" value="porubnepunk" />
                                <label className='select-none' for="porubnepunk"> porubnepunk</label><br />

                                <input className='accent-black' type="checkbox" id="odessaromania" name="odessaromania" value="odessaromania" />
                                <label className='select-none' for="odessaromania"> odessaromania</label><br />

                                <input className='accent-black' type="checkbox" id="ukrainianmoms1" name="ukrainianmoms1" value="ukrainianmoms1" />
                                <label className='select-none' for="ukrainianmoms1"> ukrainianmoms1</label><br />

                                <input className='accent-black' type="checkbox" id="UkrainaRomania" name="UkrainaRomania" value="UkrainaRomania" />
                                <label className='select-none' for="UkrainaRomania"> UkrainaRomania</label><br />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <div className='h-fit w-8/12 ml-5'>
                    {/* CONTENT HEADER SECTION */}
                    <div className='flex'>
                        <div className='w-9/12 mr-auto flex gap-4 overflow-x-auto overflow-y-hidden pb-1'>
                            <div className='flex items-center bg-appBlue w-fit px-3 py-2 rounded-md'>
                                <p className='pr-5 text-white'>Payment</p>
                                <svg className='mt-0.5' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="3.88912" y1="11.6673" x2="11.6673" y2="3.88912" stroke="white" />
                                    <line x1="11.6673" y1="11.6673" x2="3.88915" y2="3.8891" stroke="white" />
                                </svg>
                            </div>

                            <div className='flex items-center bg-appBlue w-fit px-3 py-2 rounded-md'>
                                <p className='pr-5 text-white'>Shelter</p>
                                <svg className='mt-0.5' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="3.88912" y1="11.6673" x2="11.6673" y2="3.88912" stroke="white" />
                                    <line x1="11.6673" y1="11.6673" x2="3.88915" y2="3.8891" stroke="white" />
                                </svg>
                            </div>
                        </div>

                        {/* SORT BY */}
                        <div className='w-3/12 h-12'>
                            <select className='w-full h-full focus:outline-none bg-appDarkGrey rounded-md px-2 ' name="sort-by" id="sort-by" defaultValue={"Sort By"}>
                                <option className='bg-appGrey' value="latest">Latest</option>
                                <option className='bg-appGrey' value="most-often">Most often</option>
                                <option className='bg-appGrey' value="most-reply">Most reply</option>
                            </select>
                        </div>
                    </div>


                    {/* CONTENT CONTENT */}
                    <div className='flex flex-col gap-4 divide-y-2'>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Messages