// AI Personal Finance Advisor - Frontend Client Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ FinAI Advisor Frontend initialized successfully.');

    // API Health Check Button Handler
    const checkApiBtn = document.getElementById('checkApiBtn');
    const apiResponseBox = document.getElementById('apiResponse');

    if (checkApiBtn && apiResponseBox) {
        checkApiBtn.addEventListener('click', async () => {
            // Show loading status on button
            const originalText = checkApiBtn.innerHTML;
            checkApiBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Connecting to Flask...`;
            checkApiBtn.disabled = true;

            try {
                // Fetch JSON health status from Flask backend
                const response = await fetch('/api/health');
                const data = await response.json();

                // Display response in UI
                apiResponseBox.classList.remove('hidden');
                const jsonContainer = apiResponseBox.querySelector('.response-json');
                if (jsonContainer) {
                    jsonContainer.textContent = JSON.stringify(data, null, 2);
                }
            } catch (error) {
                console.error('API Error:', error);
                apiResponseBox.classList.remove('hidden');
                const jsonContainer = apiResponseBox.querySelector('.response-json');
                if (jsonContainer) {
                    jsonContainer.textContent = JSON.stringify({
                        error: "Could not connect to Flask backend. Please make sure server is running."
                    }, null, 2);
                }
            } finally {
                // Restore button state
                checkApiBtn.innerHTML = originalText;
                checkApiBtn.disabled = false;
            }
        });
    }
});
