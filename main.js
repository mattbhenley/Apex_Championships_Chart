// Chart options
const options = {
    chart: {
        height: 450,
        width: "100%",
        type: "bar",
        background: "#f4f4f4",
        foreColor: "#333"
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    series: [
        {
            name: "Championships",
            data: [54, 39, 29, 26, 22, 20, 18, 16, 15, 13, 13, 10, 9, 9, 8, 8]
        }
    ],
    xaxis: {
        categories: ['New York City', 'Boston', 'Chicago', 'Montreal', 'Detroit', 'Los Angeles', 'Philadelphia', 'Pittsburgh', 'Toronto', 'St.Lous', 'Green Bay', 'Oakland', 'Baltimore', 'Cleveland', 'Minneapolis', 'San Francisco']
    },
    fill: {
        colors: ["#00BEFF"]
    },
    dataLabels: {
        enabled: false
    },

    title: {
        text: "Most Championships By City",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: "25px"
        }
    }
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event example
document.getElementById("change").addEventListener("click", () =>
    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: true
            }
        }
    })
);
