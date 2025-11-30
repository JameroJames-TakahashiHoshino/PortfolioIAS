
document.getElementById('download-resume').addEventListener('click', function () {
    const element = document.querySelector('body'); // Select the entire body or a specific section
    const opt = {
      margin:       0.5,
      filename:     'Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
  });