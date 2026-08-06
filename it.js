// Ensure DOM is fully loaded before attaching events
document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Project Filtering Logic
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active classes from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-800', 'text-gray-400');
            });

            // Add active class to clicked button
            button.classList.remove('bg-gray-800', 'text-gray-400');
            button.classList.add('bg-blue-600', 'text-white');

            const filterValue = button.getAttribute('data-filter');

            // Filter cards
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    // Optional: Add a subtle fade-in animation
                    card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' });
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' });
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});