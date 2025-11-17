window.addEventListener("DOMContentLoaded", () => {
  // Don't show on homepage
  if (location.pathname.endsWith("index.html") || location.pathname === "/") return;

  // Create the button
  const btn = document.createElement("div");
  btn.textContent = "⬅ Back";
  btn.style.position = "fixed";
  btn.style.top = "15px";
  btn.style.left = "15px";
  btn.style.background = "#1a1a1a";
  btn.style.padding = "10px 18px";
  btn.style.borderRadius = "12px";
  btn.style.color = "white";
  btn.style.fontSize = "15px";
  btn.style.cursor = "pointer";
  btn.style.boxShadow = "0 3px 8px rgba(0,0,0,0.4)";
  btn.style.transition = "0.2s ease";
  btn.style.userSelect = "none";
  btn.style.zIndex = "9999";

  btn.onmouseover = () => {
    btn.style.background = "#2a2a2a";
    btn.style.transform = "scale(1.05)";
  };

  btn.onmouseout = () => {
    btn.style.background = "#1a1a1a";
    btn.style.transform = "scale(1.0)";
  };

  btn.onclick = () => {
    window.location.href = "../../index.html";
  };

  document.body.appendChild(btn);
});
