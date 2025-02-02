confirmBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (!placeInput.value || !dateInput.value || !timeInput.value) {
        alert("Please fill in all the details! 💖");
        return;
    }

    const formData = new FormData();
    formData.append('Place', placeInput.value);
    formData.append('Date', dateInput.value);
    formData.append('Time', timeInput.value);

    try {
        const response = await fetch('https://formspree.io/f/manqjdnj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            document.getElementById('confirmedPlace').textContent = placeInput.value;
            document.getElementById('confirmedDate').textContent = 
                new Date(dateInput.value).toLocaleDateString('en-US', {
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric'
                });
            document.getElementById('confirmedTime').textContent = 
                new Date(`1970-01-01T${timeInput.value}`).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                });

            confirmationMessage.classList.remove('hidden');
            startCountdown();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});
