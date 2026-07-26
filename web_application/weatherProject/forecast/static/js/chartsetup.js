// chartsetuop.js
// Builds the temperature trend line chart from the forecast values
// Django already rendered into the page (no extra fetch needed).

function buildForecastChart() {
    const canvas = document.getElementById('chart');
    if (!canvas) return;

    // Pull the 5 forecast time labels + temperature values straight out of the DOM.
    const timeNodes = document.querySelectorAll('.forecast-time');
    const tempNodes = document.querySelectorAll('.forecast-temperatureValue');

    if (!timeNodes.length || !tempNodes.length) return;

    const labels = Array.from(timeNodes).map(el => el.textContent.trim());
    const temps = Array.from(tempNodes).map(el => parseFloat(el.textContent.trim()));

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temps,
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#ffffff',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.parsed.y}°`
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: 'rgba(255,255,255,0.85)' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    ticks: {
                        color: 'rgba(255,255,255,0.85)',
                        callback: (value) => `${value}°`
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', buildForecastChart);