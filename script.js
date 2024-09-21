// Sample data for accommodations based on destinations
const accommodations = {
    "Hyderabad": ["Hotel A", "Hotel B", "Hotel C"],
    "Bangalore": ["Hotel D", "Hotel E", "Hotel F"],
    "Goa": ["Hotel G", "Hotel H", "Hotel I"]
};

// List of available destinations
const destinations = Object.keys(accommodations);

// Search destination and display accommodation options
document.getElementById('search-destination').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    const resultsDiv = document.getElementById('destination-results');
    const accommodationSelect = document.getElementById('accommodation-options');

    resultsDiv.innerHTML = ''; // Clear previous results
    accommodationSelect.innerHTML = ''; // Clear previous options

    if (accommodations[destination]) {
        resultsDiv.innerHTML = `<p>Found accommodations in ${destination}:</p>`;
        accommodations[destination].forEach(accommodation => {
            resultsDiv.innerHTML += `<p>${accommodation}</p>`;
        });
        
        accommodations[destination].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerHTML = option;
            accommodationSelect.appendChild(opt);
        });
    } else {
        resultsDiv.innerHTML = `<p>No accommodations found for ${destination}.</p>`;
    }
});

// Auto-suggest feature for destination input
document.getElementById('destination').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ''; // Clear previous suggestions

    if (input) {
        const filteredDestinations = destinations.filter(destination => 
            destination.toLowerCase().includes(input)
        );

        filteredDestinations.forEach(destination => {
            const li = document.createElement('li');
            li.textContent = destination;
            li.addEventListener('click', () => {
                document.getElementById('destination').value = destination;
                suggestions.innerHTML = ''; // Clear suggestions after selection
            });
            suggestions.appendChild(li);
        });
    }
});

// Book accommodation
document.getElementById('book-accommodation').addEventListener('click', function() {
    const selectedAccommodation = document.getElementById('accommodation-options').value;
    const bookingStatus = document.getElementById('booking-status');

    if (selectedAccommodation !== "Select Destination First") {
        bookingStatus.textContent = `Successfully booked ${selectedAccommodation}!`;
    } else {
        bookingStatus.textContent = 'Please select an accommodation first.';
    }
});

// Add itinerary item
document.getElementById('add-itinerary').addEventListener('click', function() {
    const itineraryItem = document.getElementById('itinerary-item').value;
    const itineraryList = document.getElementById('itinerary-list');

    if (itineraryItem) {
        const listItem = document.createElement('li');
        listItem.textContent = itineraryItem;
        itineraryList.appendChild(listItem);
        document.getElementById('itinerary-item').value = ''; // Clear input
    } else {
        alert('Please enter an activity to add to your itinerary.');
    }
});
