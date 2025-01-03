---
layout: default
---

<h1 style="text-align: center;">Would you like to go on a date with me, Kiara?</h1>

<div style="display: flex; justify-content: center; gap: 20px;">
  <button id="yes-btn" class="btn">Yes</button>
  <button id="no-btn" class="btn">No</button>
</div>

<script>
document.getElementById('yes-btn').addEventListener('mouseover', function() {
  this.innerHTML = '💖 Yes 💖';
});

document.getElementById('yes-btn').addEventListener('mouseout', function() {
  this.innerHTML = 'Yes';
});
</script>
