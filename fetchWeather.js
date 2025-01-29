async function fetchWeatherData() {
    try {
        // Fetch the weather data from OpenWeather API
        let raw = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5c3c18970ebedfd154c98b39cdbdf2f9");
        let data = await raw.json();

        if (data) {
            let { main: { temp, temp_min }, weather } = data;

            console.log('Temperature:', temp);
            console.log('Minimum Temperature:', temp_min);
            console.log('Weather:', weather[0].description); // Weather description

            // Prepare data for the chart
            const chartData = {
                labels: ['Current Temp', 'Min Temp'], // X-axis labels
                datasets: [{
                    label: 'Temperature (K)',
                    data: [temp, temp_min], // Temperature data for chart
                    borderColor: 'rgb(75, 192, 192)', // Line color
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
                    fill: true,
                    tension: 0.1
                }]
            };

            // Create chart using Chart.js
            createChart(chartData);
        } else {
            console.error("Error in data");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createChart(data) {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut', // Line chart
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false // Start the Y-axis from a non-zero value
                }
            }
        }
    });
}

// Fetch weather data and initialize the chart when the page loads
fetchWeatherData();