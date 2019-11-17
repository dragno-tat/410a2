const dataset = [
    {
        name: "developer1",
        commits: 10,
        locAdded: 5112,
        locRemoved: 500,
        activeDays: 10,
        commentsPerLoc: 0.15,
        avgLocPerFile: 20.13,
        foo: 3
    },
    {
        name: "developer2",
        commits: 5,
        locAdded: 112413,
        locRemoved: 50098,
        activeDays: 65,
        commentsPerLoc: 0.5,
        avgLocPerFile: 99.41,
        foo: 2
    },
    {
        name: "developer3",
        commits: 1,
        locAdded: 51,
        locRemoved: 7761,
        activeDays: 1,
        commentsPerLoc: 1.2,
        avgLocPerFile: 15.2,
        foo: 1
    }
];

/* parts */
const headMetrics = ["activeDays"];
const bodyMetrics = ["commits", "foo"];
const leftArmMetrics = ["locAdded", "foo"];
const rightArmMetrics = ["locRemoved", "foo"];
const leftLegMetrics = ["commentsPerLoc", "foo"];
const rightLegMetrics = ["avgLocPerFile", "foo"];

const baseRadius = 10;
const cos45 = Math.sqrt(2)/2;

function calculateRadius(key, val){
    if(val > 10 || val < 1){
        val = 5;
    }
    return baseRadius*val;
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
    let cx = 300;
    let cy = 200;
    for(let i = 0; i < bodyMetrics.length; i++){
        const b = bodyMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx",cx)
            .attr("cy", d => {
                if(i > 0){
                    cy += calculateRadius(b, d[b]);
                }
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b, d[b]);
                cy += r;
                return r;
            })
            .classed(b, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b} : ${d[b]}`)
    }
});

// left arms
gs.each(function(parent){
    let cx = 300 - calculateRadius(bodyMetrics[0], parent[bodyMetrics[0]]);
    let cy = 200;
    for(let i = 0; i < leftArmMetrics.length; i++){
        const b = leftArmMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                if(i === 0){
                    cx -= calculateRadius(b, d[b]);
                } else {
                    cx -= cos45*calculateRadius(b, d[b]);
                }
                return cx;
            })
            .attr("cy", d => {
                if(i > 0){
                    cy -= cos45*calculateRadius(b, d[b]);
                }
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b, d[b]);
                cx -= cos45*r;
                cy -= cos45*r;
                return r;
            })
            .classed(b, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b} : ${d[b]}`)
    }
});

// right arms
gs.each(function(parent){
    let cx = 300 + calculateRadius(bodyMetrics[0], parent[bodyMetrics[0]]);
    let cy = 200;
    for(let i = 0; i < rightArmMetrics.length; i++){
        const b = rightArmMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                if(i === 0){
                    cx += calculateRadius(b, d[b]);
                } else {
                    cx += cos45*calculateRadius(b, d[b]);
                }
                return cx;
            })
            .attr("cy", d => {
                if(i > 0){
                    cy -= cos45*calculateRadius(b, d[b]);
                }
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b, d[b]);
                cx += cos45*r;
                cy -= cos45*r;
                return r;
            })
            .classed(b, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b} : ${d[b]}`)
    }
});

// left legs
gs.each(function(parent){
    const lastBodyMetric = bodyMetrics[bodyMetrics.length-1];
    const lastBodyNode = d3.select(`#${parent.name}`).select(`.${lastBodyMetric}`).node();
    let cx = Number(lastBodyNode.getAttribute("cx")) - cos45*Number(lastBodyNode.getAttribute("r"));
    let cy = Number(lastBodyNode.getAttribute("cy")) + cos45*Number(lastBodyNode.getAttribute("r"));
    for(let i = 0; i < leftLegMetrics.length; i++){
        const b = leftLegMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                cx -= cos45*calculateRadius(b, d[b]);
                return cx;
            })
            .attr("cy", d => {
                cy += cos45*calculateRadius(b, d[b]);
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b, d[b]);
                cx -= cos45*r;
                cy += cos45*r;
                return r;
            })
            .classed(b, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b} : ${d[b]}`)
    }
});

// right legs
gs.each(function(parent){
    const lastBodyMetric = bodyMetrics[bodyMetrics.length-1];
    const lastBodyNode = d3.select(`#${parent.name}`).select(`.${lastBodyMetric}`).node();
    let cx = Number(lastBodyNode.getAttribute("cx")) + cos45*Number(lastBodyNode.getAttribute("r"));
    let cy = Number(lastBodyNode.getAttribute("cy")) + cos45*Number(lastBodyNode.getAttribute("r"));
    for(let i = 0; i < rightLegMetrics.length; i++){
        const b = rightLegMetrics[i];
        d3.select(this)
            .append("circle")
            .attr("cx", d => {
                cx += cos45*calculateRadius(b, d[b]);
                return cx;
            })
            .attr("cy", d => {
                cy += cos45*calculateRadius(b, d[b]);
                return cy;
            })
            .attr("r", d => {
                const r = calculateRadius(b, d[b]);
                cx += cos45*r;
                cy += cos45*r;
                return r;
            })
            .classed(b, true)
            .on("mouseover", onMetricOver)
            .on("mouseout", onMetricOut)
            .append("svg:title")
            .text(d => `${b} : ${d[b]}`)
    }
});

function onMetricOver(b) {
    d3.select(this).attr("stroke", "black");
}

function onMetricOut(b) {
    d3.select(this).attr("stroke", null);
}
