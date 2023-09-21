document.addEventListener("DOMContentLoaded", function() {
    // Check if the cookie is already set
    const cookieValue = getCookieValue('RockHard');

    if (!cookieValue) {
        const id = generateUniqueID();
        const data = {
            id: id,
            userAgent: navigator.userAgent,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            os: parseOS(navigator.userAgent),
            browser: parseBrowser(navigator.userAgent),
        };

        // Send the data to Cloudflare Worker
        fetch('https://cookieserver.supersoup4.workers.dev/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                // If the data is stored successfully, set the cookie
                document.cookie = `RockHard=${id}; path=/`;
            }
        });
    }
});

function getCookieValue(name) {
    let matches = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return matches ? matches[2] : null;
}

function generateUniqueID() {
    return Math.random().toString(36).substr(2, 9);
}

function parseOS(userAgent) {
    // Implement a simple parser or use a library
    // This is a very basic example
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'Mac';
    if (userAgent.includes('Linux')) return 'Linux';
    return 'Unknown';
}

function parseBrowser(userAgent) {
    // Implement a simple parser or use a library
    // This is a very basic example
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    return 'Unknown';
}
