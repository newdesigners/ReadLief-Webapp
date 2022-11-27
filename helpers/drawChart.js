import * as d3 from "d3";

const drawChart = (element, data) => {
    const boxSize = 500;

    d3.select(element).select("svg").remove(); // Remove the old svg
    // Create new svg
    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
        .append("g")
        .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

        const arcGenerator = d3.arc().innerRadius(140).outerRadius(250);

    const pieGenerator = d3.pie().value((d) => d.value);

    const arcs = svg.selectAll().data(pieGenerator(data)).enter();
    arcs
        .append("path")
        .attr("d", arcGenerator)
        .style("fill", (d, i) => data[i].color)

    arcs
        .append("text")
        .attr("text-anchor", "middle")
        .text((d) => `${d.data.value}%`)
        .style("fill", "#fff")
        .style("font-size", "30px")
        .attr("transform", (d) => {
            const [x, y] = arcGenerator.centroid(d)
            return `translate(${x}, ${y})`
        })
};

export default drawChart;