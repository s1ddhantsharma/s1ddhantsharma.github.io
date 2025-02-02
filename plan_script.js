document.addEventListener('DOMContentLoaded', () => {
    const placeInput = document.getElementById('place');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const confirmBtn = document.getElementById('confirmBtn');
    const confirmationMessage = document.querySelector('.confirmation-message');
    const countdownElement = document.querySelector('.countdown');
    
    // Date suggestions
    const suggestions = [
        'Romantic Dinner',
        'Movie Night',
        'Picnic in the Park',
        'Museum Visit',
        'Coffee Shop',
        'Walk on the Beach',
        'Amusement Park',
        'Cooking Class'
    ];

    // Autocomplete functionality
    placeInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        const filtered = suggestions.filter(item => 
            item.toLowerCase().includes(value)
        );
        showSuggestions(filtered);
    });

    function showSuggestions(items) {
        const suggestionsDiv = document.querySelector('.suggestions');
        suggestionsDiv.innerHTML = items.map(item => 
            `<div class="suggestion-item">${item}</div>`
        ).join('');
        
        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                placeInput.value = item.textContent;
                suggestionsDiv.innerHTML = '';
            });
        });
    }

    // Confirmation button handler
    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!placeInput.value || !dateInput.value || !timeInput.value) {
            alert("Please fill in all the details! 💖");
            return;
        }

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
    });

    function startCountdown() {
        const targetDate = new Date(`${dateInput.value}T${timeInput.value}`);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.textContent = "Our date is happening now! 💖";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            countdownElement.innerHTML = `
                Time until our date:<br>
                ${days}d ${hours}h ${minutes}m remaining
            `;
        }

        updateCountdown();
        setInterval(updateCountdown, 60000);
    }
});
