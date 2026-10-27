<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="theme-color" content="#1a1a2e">
  <title>Hungry Birds v2</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="game-container">
    <!-- Game Canvas -->
    <canvas id="gameCanvas"></canvas>

    <!-- Clean Minimalistic HUD Overlay -->
    <header id="top-hud">
      <div class="hud-left">
        <button id="btn-pause" class="hud-btn" aria-label="Pause Game">⏸</button>
        <button id="btn-sound" class="hud-btn" aria-label="Toggle Sound">🔊</button>
      </div>

      <div class="hud-right">
        <div class="score-badge">
          <span class="score-label">SCORE</span>
          <span id="score-val">0</span>
        </div>
        <div class="level-badge">
          <span class="level-label">LVL</span>
          <span id="level-val">1</span>
        </div>
      </div>
    </header>

    <!-- Bottom Tray for Birds (Subtle & Clean) -->
    <footer id="bottom-hud">
      <div id="bird-queue" class="queue-container">
        <!-- Javascript dynamically injects available birds here -->
      </div>
      <div id="action-hint" class="hint-text">Pull slingshot to feed</div>
    </footer>
  </div>

  <script src="game.js"></script>
</body>
</html>