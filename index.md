---
layout: custom
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=WindSong:wght@500&display=swap" rel="stylesheet">

<style>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; /* Prevent scrolling */
    font-family: 'Nobile', sans-serif; /* Set default font for body */
  }

  /* Style for the video */
  #bgVideo {
    position: fixed; /* Fixed position to stay in place */
    top: 0;
    left: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    object-fit: cover; /* Cover the entire viewport */
    z-index: -1; /* Place behind other content */
  }

  .content {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    color: #b76e79; /* Rose gold text color */
    text-align: center; /* Center text */
    position: relative; /* Position relative for text overlay */
    z-index: 1; /* Bring content above the video */
  }

  h1 {
    margin-bottom: 20px; /* Add space below the heading */
    font-family: 'Corben', cursive; /* Use Corben font for headings */
  }

  .btn-container {
    display: flex; /* Use flexbox to align buttons in a row */
    justify-content: center; /* Center buttons horizontally */
    gap: 20px; /* Space between buttons */
  }

  .btn {
    background-color: #b76e79;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  #yes-btn:hover {
    animation: heartbeat 1s infinite;
  }

  #no-btn:hover {
    transform: scale(0.8);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }

  @keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
  .windsong-medium {
  font-family: "WindSong", serif;
  font-weight: 500;
  font-style: normal;
}

</style>

<video autoplay muted loop id="bgVideo">
   <source src="page1.mp4" type="video/mp4"> <!-- Path to your video file -->
   Your browser does not support the video tag.
</video>

<div class="content">
<h1>Would you like to go on a date with me, Kiara? 🥹</h1>

<div class="btn-container">
   <button id="yes-btn" class="btn" onclick="window.location.href='destination.html'">Yes</button> <!-- Link to destination page -->
   <button id="no-btn" class="btn" onclick="window.location.href='video.html'">No</button> <!-- Link to video page -->
</div>
</div>

<script>
document.getElementById('yes-btn').addEventListener('mouseover', function() {
   this.innerHTML = '💖 Yes 💖'; // Show emoji on hover
});

document.getElementById('yes-btn').addEventListener('mouseout', function() {
   this.innerHTML = 'Yes'; // Revert back when not hovering
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
   this.innerHTML = '💔 No 💔'; // Show emoji on hover
});

document.getElementById('no-btn').addEventListener('mouseout', function() {
   this.innerHTML = 'No'; // Revert back when not hovering
});
</script>
