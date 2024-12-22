window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleSdidebarIcon = document.getElementById("toggle-sdidebar-icon");

  toggleSdidebarIcon.addEventListener("click", () => {
    const isHidden = sidebar.ariaHidden === "true";
    sidebar.ariaHidden = !isHidden;
  });
});
