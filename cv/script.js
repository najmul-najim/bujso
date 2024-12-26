document.getElementById("generate-btn").addEventListener("click", () => {
  // Collect data from form
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const linkedin = document.getElementById("linkedin").value;
  const portfolio = document.getElementById("portfolio").value;
  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const certifications = document.getElementById("certifications").value;

  // Populate CV Preview
  document.getElementById("preview-name").innerText = name;
  document.getElementById("preview-address").innerText = address;
  document.getElementById("preview-linkedin").innerText = linkedin;
  document.getElementById("preview-portfolio").innerText = portfolio;
  document.getElementById("preview-summary").innerText = summary;
  document.getElementById("preview-education").innerText = education;
  document.getElementById("preview-experience").innerText = experience;
  document.getElementById("preview-skills").innerText = skills;
  document.getElementById("preview-certifications").innerText = certifications;

  const cvPreview = document.getElementById("cv-preview");
  cvPreview.classList.remove("hidden");

  // Generate PDF
  html2canvas(cvPreview).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "pt", "a4");
    pdf.addImage(imgData, "PNG", 20, 20, 555, 770);
    pdf.save("Professional_CV.pdf");
  });
});