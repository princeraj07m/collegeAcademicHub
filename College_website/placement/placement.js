// Toggle Resources Section
function toggleResources() {
    const resources = document.getElementById('resources');
    resources.style.display = resources.style.display === 'none' ? 'block' : 'none';
  }
  
  // Form Submission Event
  document.getElementById('placement-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow for validation
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').files[0];
  
    if (!name || !email || !resume) {
      alert('Please fill out all fields and upload your resume.');
      return;
    }
  
    // Simulate form submission (you can replace this with an actual submission to a backend)
    alert(`Application Submitted!\nName: ${name}\nEmail: ${email}\nResume: ${resume.name}`);
    
    // Optionally, clear the form after submission
    document.getElementById('placement-form').reset();
  });
  