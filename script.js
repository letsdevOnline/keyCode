const container = document.querySelector(".container");

function onKeyDown(e) {
   container.innerHTML = `
      <div class="shown">
         <small>e.key</small>
         <small>e.keyCode</small>
         <small>e.code</small>
         <p>${e.key === " " ? "Space" : e.key}</p>
         <p>${e.keyCode}</p>
         <p>${e.code}</p>
      </div>
   `;
}

window.addEventListener("keydown", onKeyDown);
