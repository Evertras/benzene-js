document.body.appendChild(Benzene.renderer.view);

function loop() {
  requestAnimationFrame(loop);

  Benzene.render();
}

loop();
