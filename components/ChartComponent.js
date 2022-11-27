import React, { useEffect, useRef } from "react";
import drawChart from "../helpers/drawChart";

const DonutChart = ({ data }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            drawChart(ref.current, data);
        }
    }, [ref]);

    return (
        <>
            <div className="flex items-center ">
                <div className="container">
                    <div className="graph" ref={ref} />
                </div>

            </div>
            <div className="h-fit ml-5">
                {data.map((obj, i) => {
                    return (
                        <div key={i} className="h-5 w-5 my-2" style={{ backgroundColor: obj.color }}>
                            <p className="ml-7">{obj.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default React.memo(DonutChart);