import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Message from '../components/message'


import { useState, useEffect } from 'react'

const Messages = () => {

    const [messages, setmessages] = useState([
        {
            "msgContent": "Good day, help to find accommodation in <LOCATION> for two girls with two children, 6 and 10 years old.",
            "count": 17,
            "tags": ["Accomodation"]
        }
    ])

    useEffect(() => {
        let mainMessages = [
            {
                "msgContent": "Good afternoon, who can help a 16-year-old girl with a dog/dachshund get a job in Poland?",
                "count": 14,
                "tags": ["Job"]
            },
            {
                "msgContent": "We are looking for housing, rent, for a long time, 3 women, 1 child, 2 cats Up to 3000 zlotys",
                "count": 21,
                "tags": ["Accomodation", "Payment"]
            },
            {
                "msgContent": "Good afternoon, I will rent a room/apartment for two women, in the <LOCATION> area and around, preferably in the village 🙏",
                "count": 12,
                "tags": ["Accomodation", "Payment"]
            },
            {
                "msgContent": "Can you please tell me how to get from <LOCATION> to <LOCATION>?",
                "count": 7,
                "tags": ["Transportation"]
            },
            {
                "msgContent": "A 17-year-old boy will be able to cross the border of Poland on his own",
                "count": 12,
                "tags": ["Transportation"]
            },
            {
                "msgContent": "I am looking for housing for a fee, the city of <LOCATION> or <LOCATION>",
                "count": 32,
                "tags": ["Transportation"]
            },
            {
                "msgContent": "Help to find housing two women and a child 16 years old. Warsaw and the region. Possible with work",
                "count": 21,
                "tags": ["Accomodation", "Job"]
            },
            {
                "msgContent": "Good afternoon, if it is possible to help with housing, Poland, the city of Opole. We are 2 adults and 2 small children",
                "count": 32,
                "tags": ["Transportation"]
            },
            {
                "msgContent": "I am looking for a rented apartment for 3 people in the city of <LOCATION>",
                "count": 21,
                "tags": ["Accomodation"]
            },
            {
                "msgContent": "Who can please help with housing for free for me and my mother, we can help around the house, clean.",
                "count": 20,
                "tags": ["Accomodation", "Job"]
            },
            {
                "msgContent": "Good afternoon! Looking for housing and work in <LOCATION> or <LOCATION>",
                "count": 34,
                "tags": ["Accomodation", "Job"]
            },
            {
                "msgContent": "Good day! I am looking for accommodation in <LOCATION> for 3 adults and 4 small children.",
                "count": 23,
                "tags": ["Accomodation"]
            },
            {
                "msgContent": "I live in temporary housing in <LOCATION>. I and my two children, 16 and 4, are looking for a long-term, kindergarten, school and job.",
                "count": 5,
                "tags": ["Accomodation", "Job"]
            },
            {
                "msgContent": "People are already in Poland, <LOCATION>. We need somewhere to live, without animals. By car, they will come themselves.",
                "count": 2,
                "tags": ["Transportation", "Accomodation"]
            }
        ]

        mainMessages.map((obj, i) => {
            setTimeout(() => {
                add(obj)
            }, (i + 1) * 1500);
        })
    }, [])

    function add(obj) {
        setmessages(oldArray => [obj, ...oldArray])
    }

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
                                <label className='select-none' htmlFor="All"> All</label><br />

                                <input className='accent-black' type="checkbox" id="Shelters" name="Shelters" value="Shelters" />
                                <label className='select-none' htmlFor="Shelters"> Shelters</label><br />

                                <input className='accent-black' type="checkbox" id="Patment" name="Patment" value="Patment" />
                                <label className='select-none' htmlFor="Patment"> Patment</label><br />

                                <input className='accent-black' type="checkbox" id="Country" name="Country" value="Country" />
                                <label className='select-none' htmlFor="Country"> Country</label><br />

                                <input className='accent-black' type="checkbox" id="Contact" name="Contact" value="Contact" />
                                <label className='select-none' htmlFor="Contact"> Contact</label><br />

                                <input className='accent-black' type="checkbox" id="Humans" name="Humans" value="Humans" />
                                <label className='select-none' htmlFor="Humans"> Humans</label><br />

                                <input className='accent-black' type="checkbox" id="Red Cross" name="Red Cross" value="Red Cross" />
                                <label className='select-none' htmlFor="Red Cross"> Red Cross</label><br />

                                <input className='accent-black' type="checkbox" id="Questions" name="Questions" value="Questions" />
                                <label className='select-none' htmlFor="Questions"> Questions</label><br />

                                <input className='accent-black' type="checkbox" id="Transport" name="Transport" value="Transport" />
                                <label className='select-none' htmlFor="Transport"> Transport</label><br />
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
                                <label className='select-none' htmlFor="All"> All</label><br />

                                <input className='accent-black' type="checkbox" id="UkrainiansinRomania" name="UkrainiansinRomania" value="UkrainiansinRomania" />
                                <label className='select-none' htmlFor="UkrainiansinRomania"> UkrainiansinRomania</label><br />

                                <input className='accent-black' type="checkbox" id="UkraineConstanta" name="UkraineConstanta" value="UkraineConstanta" />
                                <label className='select-none' htmlFor="UkraineConstanta"> UkraineConstanta</label><br />

                                <input className='accent-black' type="checkbox" id="UA_Help_Brasov" name="UA_Help_Brasov" value="UA_Help_Brasov" />
                                <label className='select-none' htmlFor="UA_Help_Brasov"> UA_Help_Brasov</label><br />

                                <input className='accent-black' type="checkbox" id="OdessaBucharest" name="OdessaBucharest" value="OdessaBucharest" />
                                <label className='select-none' htmlFor="OdessaBucharest"> OdessaBucharest</label><br />

                                <input className='accent-black' type="checkbox" id="iasi_ua" name="iasi_ua" value="iasi_ua" />
                                <label className='select-none' htmlFor="iasi_ua"> iasi_ua</label><br />

                                <input className='accent-black' type="checkbox" id="BIG_Romania" name="RBIG_Romania" value="BIG_Romania" />
                                <label className='select-none' htmlFor="BIG_Romania"> BIG_Romania</label><br />

                                <input className='accent-black' type="checkbox" id="Ukrainias_Bucharest" name="Ukrainias_Bucharest" value="Ukrainias_Bucharest" />
                                <label className='select-none' htmlFor="Ukrainias_Bucharest"> Ukrainias_Bucharest</label><br />

                                <input className='accent-black' type="checkbox" id="romaniahelp2022" name="romaniahelp2022" value="romaniahelp2022" />
                                <label className='select-none' htmlFor="romaniahelp2022"> romaniahelp2022</label><br />

                                <input className='accent-black' type="checkbox" id="porubnepunk" name="porubnepunk" value="porubnepunk" />
                                <label className='select-none' htmlFor="porubnepunk"> porubnepunk</label><br />

                                <input className='accent-black' type="checkbox" id="odessaromania" name="odessaromania" value="odessaromania" />
                                <label className='select-none' htmlFor="odessaromania"> odessaromania</label><br />

                                <input className='accent-black' type="checkbox" id="ukrainianmoms1" name="ukrainianmoms1" value="ukrainianmoms1" />
                                <label className='select-none' htmlFor="ukrainianmoms1"> ukrainianmoms1</label><br />

                                <input className='accent-black' type="checkbox" id="UkrainaRomania" name="UkrainaRomania" value="UkrainaRomania" />
                                <label className='select-none' htmlFor="UkrainaRomania"> UkrainaRomania</label><br />
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
                        {messages.map((obj, i) => {
                            if (obj && obj.msgContent) {
                                return <Message key={i} msg={obj.msgContent} tags={obj.tags} count={obj.count} />
                            }
                        })}

                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Messages