// app.js

let flightLogs = [];

function saveLog() {
    const date = document.getElementById('date').value;
    const pilot = document.getElementById('pilot').value;
    const droneModel = document.getElementById('droneModel').value;
    const flightDuration = document.getElementById('flightDuration').value;
    const notes = document.getElementById('notes').value;

    if (!date || !pilot || !droneModel || !flightDuration) {
        alert('Please fill in all required fields!');
        return;
    }

    const log = { date, pilot, droneModel, flightDuration, notes };
    flightLogs.push(log);
    displayLogs();
    document.getElementById('flightLogForm').reset();
}

function displayLogs() {
    const tbody = document.querySelector('#logTable tbody');
    tbody.innerHTML = ''; // Clear previous logs
    flightLogs.forEach((log, index) => {
        const row = `
            <tr>
                <td>${log.date}</td>
                <td>${log.pilot}</td>
                <td>${log.droneModel}</td>
                <td>${log.flightDuration}</td>
                <td>${log.notes}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function exportLogs() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(flightLogs));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "flight_logs.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}
