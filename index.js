const dataset = [];

function addMetadataToDataset(){
    dataset.push(...metadata.authors["List of Authors"].map(a => {
        const age = Number(a["Age"].split(" ")[0]);
        return {
            name: a["Author"].replace(/\s/g, ''),
            linesAdded: Number(a["+ lines"]),
            linesRemoved: Number(a["- lines"]),
            activeDays: Number(a["Active days"]),
            commits: Number(a["Commits (%)"].split(" ")[0]),
            age: isNaN(age) ? 1 : age,
        }
    }));
}

addMetadataToDataset();

/* parts */
const metrics = [
    {
        key: "linesAdded",
        description: "Lines Added",
        colour: "red",
        part: "rightArm"
    },
    {
        key: "linesRemoved",
        description: "Lines Removed",
        colour: "blue",
        part: "leftArm"
    },
    {
        key: "commits",
        description: "Commits",
        colour: "green",
        part: "body"
    },
    {
        key: "activeDays",
        description: "Active Days",
        colour: "#fa1abc",
        part: "leftLeg"
    },
    {
        key: "age",
        description: "Length on Project",
        colour: "#34eb52",
        part: "rightLeg"
    },
];

const bodyMetrics = metrics.filter(m => m.part === "body");
const leftLegMetrics = metrics.filter(m => m.part === "leftLeg");
const leftArmMetrics = metrics.filter(m => m.part === "leftArm");
const rightLegMetrics = metrics.filter(m => m.part === "rightLeg");
const rightArmMetrics = metrics.filter(m => m.part === "rightArm");

const maxRadius = 100;
const cos45 = Math.sqrt(2)/2;
const startCx = 300;
const startCy = 200;

const metricTotals = calculateMetricTotals();

function calculateMetricTotals(){
    const totals = {};
    for(const m of metrics){
        totals[m.key] = 0;
        for(const d of dataset){
            totals[m.key] += d[m.key];
        }
    }
    return totals;
}

function calculateRadius(key, val){
    const ratio = val / metricTotals[key];
    return maxRadius*ratio;
}

const zoom = d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform)
});

const svg = d3.select("body")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .call(zoom)
    .append("g");

const developers = svg.append("g");

const drag = d3.drag()
    .on("start", function(){
        d3.select(this).attr("stroke", "black").attr("stroke-width", "3px");
    }).on("end", function(){
        d3.select(this).attr("stroke", null).attr("stroke-width", null);
    }).on("drag", function(d){
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        d3.select(this).attr("transform", `translate(${d.x}, ${d.y})`)
    }
);

const gs = developers.selectAll("g").data(dataset)
    .enter()
    .append("g")
    .attr("id", d => d.name)
    .attr("transform",(d, i) => {
        d.x = i*500;
        d.y = 0;
        return `translate(${d.x}, ${d.y})`;
    })
    .call(drag);

// bodies
gs.each(function(){
    let cx = startCx;
    let cy = startCy;
    for(let i = 0; i < bodyMetrics.length; i++){
        const b = bodyMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx",cx)
            .attr("cy", d => {
                if(i > 0){
                    cy += calculateRadius(b.key, d[b.key]);
                }
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b.key, d[b.key]);
                cy += r;
                return r;
            })
            .attr("fill", b.colour)
            .classed(b.key, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b.description} : ${d[b.key]}`)
    }
});

// heads
gs.each(function(parent){
    const r = maxRadius / 3;
    let cx = startCx;
    let cy = startCy - calculateRadius(bodyMetrics[0].key, parent[bodyMetrics[0].key]) - r;
    const headg = d3.select(this)
        .append("g")
        .on("mouseover", onMetricOver)
        .on("mouseout", onMetricOut);

    headg.append("svg:title")
        .text(parent.name);

    headg.append("circle")
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r", r)
        .classed("head", true);

    const arc = d3.arc().innerRadius(10)
        .outerRadius(15)
        .startAngle(90 * (Math.PI/180))
        .endAngle(270 * (Math.PI/180));

    headg.append("circle")
        .attr("cx",cx - 10)
        .attr("cy",cy - 10)
        .attr("r", r/10)
        .classed("eye", true);

    headg.append("circle")
        .attr("cx",cx + 10)
        .attr("cy",cy - 10)
        .attr("r", r/10)
        .classed("eye", true);

    headg.append("path")
        .attr("d", arc)
        .classed("smile", true)
        .attr("transform", `translate(${cx}, ${cy})`)
});

// left arms
gs.each(function(parent){
    let cx = startCx - calculateRadius(bodyMetrics[0].key, parent[bodyMetrics[0].key]);
    let cy = startCy;
    for(let i = 0; i < leftArmMetrics.length; i++){
        const b = leftArmMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                if(i === 0){
                    cx -= calculateRadius(b.key, d[b.key]);
                } else {
                    cx -= cos45*calculateRadius(b.key, d[b.key]);
                }
                return cx;
            })
            .attr("cy", d => {
                if(i > 0){
                    cy -= cos45*calculateRadius(b.key, d[b.key]);
                }
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b.key, d[b.key]);
                cx -= cos45*r;
                cy -= cos45*r;
                return r;
            })
            .attr("fill", b.colour)
            .classed(b.key, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b.description} : ${d[b.key]}`)
    }
});

// right arms
gs.each(function(parent){
    let cx = startCx + calculateRadius(bodyMetrics[0].key, parent[bodyMetrics[0].key]);
    let cy = startCy;
    for(let i = 0; i < rightArmMetrics.length; i++){
        const b = rightArmMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                if(i === 0){
                    cx += calculateRadius(b.key, d[b.key]);
                } else {
                    cx += cos45*calculateRadius(b.key, d[b.key]);
                }
                return cx;
            })
            .attr("cy", d => {
                if(i > 0){
                    cy -= cos45*calculateRadius(b.key, d[b.key]);
                }
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b.key, d[b.key]);
                cx += cos45*r;
                cy -= cos45*r;
                return r;
            })
            .attr("fill", b.colour)
            .classed(b.key, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b.description} : ${d[b.key]}`)
    }
});

// left legs
gs.each(function(parent){
    const lastBodyMetric = bodyMetrics[bodyMetrics.length-1].key;
    const lastBodyNode = d3.select(`#${parent.name}`).select(`.${lastBodyMetric}`).node();
    let cx = Number(lastBodyNode.getAttribute("cx")) - cos45*Number(lastBodyNode.getAttribute("r"));
    let cy = Number(lastBodyNode.getAttribute("cy")) + cos45*Number(lastBodyNode.getAttribute("r"));
    for(let i = 0; i < leftLegMetrics.length; i++){
        const b = leftLegMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                cx -= cos45*calculateRadius(b.key, d[b.key]);
                return cx;
            })
            .attr("cy", d => {
                cy += cos45*calculateRadius(b.key, d[b.key]);
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b.key, d[b.key]);
                cx -= cos45*r;
                cy += cos45*r;
                return r;
            })
            .attr("fill", b.colour)
            .classed(b.key, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b.description} : ${d[b.key]}`)
    }
});

// right legs
gs.each(function(parent){
    const lastBodyMetric = bodyMetrics[bodyMetrics.length-1].key;
    const lastBodyNode = d3.select(`#${parent.name}`).select(`.${lastBodyMetric}`).node();
    let cx = Number(lastBodyNode.getAttribute("cx")) + cos45*Number(lastBodyNode.getAttribute("r"));
    let cy = Number(lastBodyNode.getAttribute("cy")) + cos45*Number(lastBodyNode.getAttribute("r"));
    for(let i = 0; i < rightLegMetrics.length; i++){
        const b = rightLegMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                cx += cos45*calculateRadius(b.key, d[b.key]);
                return cx;
            })
            .attr("cy", d => {
                cy += cos45*calculateRadius(b.key, d[b.key]);
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b.key, d[b.key]);
                cx += cos45*r;
                cy += cos45*r;
                return r;
            })
            .attr("fill", b.colour)
            .classed(b.key, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b.description} : ${d[b.key]}`)
    }
});

function onMetricOver() {
    d3.select(this).attr("stroke", "black").raise();
}

function onMetricOut() {
    d3.select(this).attr("stroke", null);
}

// generate legend

const legendTable = d3.select(".legend").append("table");

legendTable.append("thead")
    .append("tr")
    .append("th")
    .text("Legend");

const legendRows = legendTable.append("tbody")
    .selectAll("tr")
    .data(metrics)
    .enter()
    .append("tr");

legendRows.append("td")
    .append("svg")
    .attr("width", 10)
    .attr("height", 10)
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", d => d.colour);
legendRows.append("td").text(d => d.description);