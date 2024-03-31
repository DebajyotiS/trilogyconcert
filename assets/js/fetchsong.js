// Fetch the JSON data
fetch('assets/songs.json')
    .then(response => response.json())
    .then(data => {
        // Get the current time
        const now = new Date();

        // Get the article elements
        const articles = document.querySelectorAll('.work-item');

        // Only take as many songs as there are article entries
        const numSongs = Math.min(data.length, articles.length);

        // Update the articles with the song data
        for (let i = 0; i < numSongs; i++) {
            // Convert the reveal time to a Date object
            const revealDate = new Date(data[i].reveal);
            const article = articles[i];
            const revealTime = article.querySelector('.reveal-time');

            // Format the reveal time without seconds
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const formattedRevealTime = `${revealDate.toLocaleDateString(undefined, options)}`;

            // Set the reveal time text content
            revealTime.textContent = `Will reveal on ${formattedRevealTime}`;

            // Check if the current time is past the reveal time
            if (now >= revealDate) {
                const songImage = article.querySelector('img');
                const songTitle = article.querySelector('h3');
                const songLink = article.querySelector('a');
                songLink.href = data[i].link;
                // Update the image and title of the selected song
                songImage.src = data[i].image;
                songTitle.textContent = data[i].title;
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
                const formattedRevealTime = `${revealDate.toLocaleDateString(undefined, options)} ${revealDate.toLocaleTimeString(undefined, options)}`;
                revealTime.textContent = `was revealed on ${formattedRevealTime}`;
            }
        }
    })
    .catch(error => console.error('Error:', error));