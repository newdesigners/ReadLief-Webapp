import React from 'react'


const TrendingBar = ({ index, label, value, percentage }) => {

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    return (
        <div className="flex items-center h-10 ml-4">
            <p>{index}.</p>
            <div className="flex items-center h-full mx-2" style={{ width: `${100 * value}%` }}>
                <div className="flex px-3 text-white items-center h-full rounded-md justify-between w-full bg-appRed">
                    <div className='flex justify-between w-full gap-4'>
                        <p>{label}</p>
                        <p>{percentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingBar