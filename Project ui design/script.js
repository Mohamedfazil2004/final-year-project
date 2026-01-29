// Authentication
function login(event) {
    event.preventDefault();
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
    initCharts();
}

// Navigation
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Remove active from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected screen
    document.getElementById(`screen-${screenName}`).classList.add('active');

    // Update active nav item
    event.target.closest('.nav-item').classList.add('active');

    // Update page title
    const titles = {
        'dashboard': 'Dashboard',

        'crm': 'Client Management',
        'appointments': 'Appointments',
        'call-logs': 'Call Logs & Reports',
        'settings': 'AI Settings',
        'workflow': 'System Workflow'
    };
    document.getElementById('page-title').textContent = titles[screenName];
}

// Initialize Charts
function initCharts() {
    // Call Volume Chart
    const callVolumeCtx = document.getElementById('callVolumeChart');
    if (callVolumeCtx) {
        const gradient = callVolumeCtx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.3)');
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0.05)');

        drawLineChart(callVolumeCtx, {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [32, 45, 38, 52, 47, 35, 28],
            color: '#4F46E5',
            fill: gradient
        });
    }

    // Success Rate Chart
    const successRateCtx = document.getElementById('successRateChart');
    if (successRateCtx) {
        drawBarChart(successRateCtx, {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [65, 72, 68, 75, 70, 62, 58],
            color: '#10B981'
        });
    }
}

// Simple Line Chart
function drawLineChart(canvas, config) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const max = Math.max(...config.data);
    const min = Math.min(...config.data);
    const range = max - min;

    // Draw axes
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw line
    ctx.strokeStyle = config.color;
    ctx.lineWidth = 3;
    ctx.beginPath();

    config.data.forEach((value, index) => {
        const x = padding + (index / (config.data.length - 1)) * chartWidth;
        const y = height - padding - ((value - min) / range) * chartHeight;

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.stroke();

    // Draw points
    ctx.fillStyle = config.color;
    config.data.forEach((value, index) => {
        const x = padding + (index / (config.data.length - 1)) * chartWidth;
        const y = height - padding - ((value - min) / range) * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw labels
    ctx.fillStyle = '#6B7280';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    config.labels.forEach((label, index) => {
        const x = padding + (index / (config.labels.length - 1)) * chartWidth;
        ctx.fillText(label, x, height - padding + 20);
    });
}

// Simple Bar Chart
function drawBarChart(canvas, config) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const max = Math.max(...config.data);
    const barWidth = chartWidth / config.data.length * 0.7;
    const gap = chartWidth / config.data.length * 0.3;

    // Draw axes
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw bars
    config.data.forEach((value, index) => {
        const x = padding + index * (barWidth + gap) + gap / 2;
        const barHeight = (value / 100) * chartHeight;
        const y = height - padding - barHeight;

        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
        gradient.addColorStop(0, config.color);
        gradient.addColorStop(1, config.color + '80');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Draw value on top
        ctx.fillStyle = '#111827';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(value + '%', x + barWidth / 2, y - 5);
    });

    // Draw labels
    ctx.fillStyle = '#6B7280';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    config.labels.forEach((label, index) => {
        const x = padding + index * (barWidth + gap) + gap / 2 + barWidth / 2;
        ctx.fillText(label, x, height - padding + 20);
    });
}



// Initialize on load
window.addEventListener('load', () => {
    // Auto-login for demo purposes (remove in production)
    // Uncomment the line below to skip login screen
    // setTimeout(() => login(new Event('submit')), 100);
});
