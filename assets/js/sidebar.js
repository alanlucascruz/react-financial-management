const sidebar = document.querySelector("#sidebar");
const sidebarBackdrop = document.querySelector("#sidebar-backdrop");
const sidebarButton = document.querySelector("#sidebar-button");

const toggleSidebar = () => {
  sidebar.classList.toggle("show");
  sidebarBackdrop.classList.toggle("show");
};

sidebarBackdrop.addEventListener("click", toggleSidebar);
sidebarButton.addEventListener("click", toggleSidebar);
