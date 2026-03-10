function handleClear() {
  const confirmed = window.confirm("Are you sure you want to clear all inputs?");
  if (confirmed) {
    // Clears text box and text area
    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";
  }
  // If cancelled, nothing happens
}