document.addEventListener('DOMContentLoaded', function() {
    const sheetId = '1RueU19mF9-Oe5rVrPs7ITgtm8Dddz0zjT10OKjMr0j0'; // Replace with your actual spreadsheet ID
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;

    fetch(url)
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1); // Skip header
        let html = rows.map(row => {
            const [icon, name, link] = row.split(',');
            return `<a href="${link.trim()}" class="grid-item" target="_blank">
                        <img src="${icon.trim()}" alt="${name.trim()}">
                        <span>${name.trim()}</span>
                    </a>`;
        }).join('');
        document.getElementById('data-container').innerHTML = html;
    })
    .catch(err => console.error('Error loading data:', err));
});
