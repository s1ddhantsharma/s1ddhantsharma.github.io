---
layout: custom
---

<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    margin: 0;
    background-color: #f9e6e6; /* Off-white with a hint of pink */
    color: #b76e79; /* Rose gold */
    text-align: center; /* Center text */
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
</style>

<h1>Would you like to go on a date with me, Kiara?</h1>

<div style="display: flex; justify-content: center; gap: 20px;">
  <button id="yes-btn" class="btn">💖 Yes 💖</button>
  <button id="no-btn" class="btn">💔 No 💔</button>
</div>

<script>
document.getElementById('yes-btn').addEventListener('mouseover', function() {
  this.innerHTML = '💖 Yes 💖';
});

document.getElementById('yes-btn').addEventListener('mouseout', function() {
  this.innerHTML = '💖 Yes 💖';
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
  this.innerHTML = '💔 No 💔';
});

document.getElementById('no-btn').addEventListener('mouseout', function() {
  this.innerHTML = '💔 No 💔';
});
</script>
