document.addEventListener("DOMContentLoaded", () => {
  const certCards = document.querySelectorAll(".cert-card");
  const certCode = document.getElementById("certCode");
  const certTitle = document.getElementById("certTitle");
  const certDesc = document.getElementById("certDesc");

  const certificates = {
    csharp: {
      code: "01 / CERTIFICATE · ✳ C# CERTIFICATE",
      title: "C# Programming Certificate",
      desc: "Highlights foundational skills in C# programming syntax, control flow, and logical problem-solving developed as a 1st Year Information Technology student at Mindoro State University."
    },
    clang: {
      code: "02 / CERTIFICATE · ◇ C LANGUAGE CERTIFICATE",
      title: "C Language Certificate",
      desc: "Reflects core training in procedural programming, algorithms, variables, and structured code building in C during early Information Technology coursework."
    }
  };

  certCards.forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-cert");
      const info = certificates[key];
      if (!info) return;

      certCards.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      card.classList.add("active");
      card.setAttribute("aria-pressed", "true");

      if (certCode) certCode.textContent = info.code;
      if (certTitle) certTitle.textContent = info.title;
      if (certDesc) certDesc.textContent = info.desc;
    });
  });

  const lanyardCard = document.getElementById("lanyardCard");
  if (lanyardCard) {
    lanyardCard.addEventListener("mousemove", (e) => {
      const rect = lanyardCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * 12;
      const rotateX = -y * 12;
      lanyardCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    lanyardCard.addEventListener("mouseleave", () => {
      lanyardCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }
});
