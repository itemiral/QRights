function getCanonicalUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  return url.toString();
}

function setCopyButton(copyBtn, text) {
  if (!copyBtn) return;
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
      const prev = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      window.setTimeout(() => {
        copyBtn.textContent = prev;
      }, 1200);
    } catch {
      window.prompt("Copy this link:", text);
    }
  });
}

function renderQrInto(targetEl, url) {
  if (!targetEl) return;

  targetEl.innerHTML = "";

  // Prefer QRCode.js if available (CDN). Fallback to an image QR API.
  if (window.QRCode) {
    // eslint-disable-next-line no-new
    new window.QRCode(targetEl, {
      text: url,
      width: 168,
      height: 168,
      correctLevel: window.QRCode.CorrectLevel.M,
    });
    return;
  }

  const img = document.createElement("img");
  img.alt = "QR code";
  img.width = 168;
  img.height = 168;
  img.loading = "lazy";
  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=168x168&data=" + encodeURIComponent(url);
  targetEl.appendChild(img);
}

document.addEventListener("DOMContentLoaded", () => {
  const url = getCanonicalUrl();
  const qr = document.getElementById("qr");
  renderQrInto(qr, url);

  const copyBtn = document.getElementById("copyLink");
  setCopyButton(copyBtn, url);
});

