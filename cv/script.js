document.getElementById("generate-btn").addEventListener("click", () => {
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  // Update preview
  document.getElementById("preview-name").innerText = name;
  document.getElementById("preview-email").innerText = email;
  document.getElementById("preview-phone").innerText = phone;
  document.getElementById("preview-education").innerText = education;
  document.getElementById("preview-experience").innerText = experience;
  document.getElementById("preview-skills").innerText = skills;

  const cvPreview = document.getElementById("cv-preview");
  cvPreview.classList.remove("hidden");

  // Generate PDF
  html2canvas(cvPreview).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 260);
    pdf.save("CV.pdf");
  });
});
