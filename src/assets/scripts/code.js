window.addEventListener("DOMContentLoaded", () => {
  const codeBlocks = document.querySelectorAll("pre[class*='language'] > code");
  codeBlocks.forEach((block) => {
    const copyText = document.createElement("button");
    copyText.innerText = "Copy code";
    copyText.classList.add("copy");
    copyText.addEventListener("click", async () => {
      try {
        const codeText = block.innerText;
        await navigator.clipboard.writeText(codeText);

        const toast = document.getElementById("clipboard-copy-toast");
        toast.classList.add("showing");

        setTimeout(() => {
          toast.classList.remove("showing");
        }, 2000);
      } catch (err) {
        console.error("Ошибка при копировании:", err);
      }
    });
    block.after(copyText);
  });
});
