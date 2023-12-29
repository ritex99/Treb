let data = {
    labels: [],
    datasets: [{
        label: 'Live Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [],
    }],
};

// Get the canvas element and initialize the chart
const ctx = document.getElementById('liveChart').getContext('2d');
const liveChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: [{
                type: 'linear',
                position: 'bottom',
            }],
            y: [{
                type: 'linear',
                position: 'left',
            }],
        },
    },
});

// Function to add new data point
function addDataPoint(value) {
    const time = new Date().toLocaleTimeString();
    data.labels.push(time);
    data.datasets[0].data.push(value);

    // Update chart
    liveChart.update();
}

// Simulate live data updates (replace this with your live data source)
setInterval(() => {
    const randomValue = Math.random() * 100; // Replace with your live data retrieval logic
    addDataPoint(randomValue);
}, 2000); // Update every 2 seconds
