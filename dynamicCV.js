// Function to update resume fields dynamically
var updateResume = function () {
    // Get form input values
    var name = document.querySelector('#name').value;
    var fatherName = document.querySelector('#fatherName').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    var address = document.querySelector('#address').value;
    var education = document.querySelector('#education').value;
    var workExperience = document.querySelector('#workExperience').value;
    var skills = document.querySelector('#skills').value.split(',');
    var languages = document.querySelector('#languages').value.split(',');
    // Update resume section in real-time
    document.querySelector('#resumeName').innerText = name;
    document.querySelector('#resumeFatherName').innerText = fatherName;
    document.querySelector('#resumeEmail').innerText = email;
    document.querySelector('#resumePhone').innerText = phone;
    document.querySelector('#resumeAddress').innerText = address;
    document.querySelector('#resumeEducation').innerText = education;
    document.querySelector('#resumeWorkExperience').innerText = workExperience;
    // Update skills
    var resumeSkills = document.querySelector('#resumeSkills');
    resumeSkills.innerHTML = ''; // Clear previous skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.innerText = skill.trim();
        resumeSkills.appendChild(li);
    });
    // Update languages
    var resumeLanguages = document.querySelector('#resumeLanguages');
    resumeLanguages.innerHTML = ''; // Clear previous languages
    languages.forEach(function (language) {
        var li = document.createElement('li');
        li.innerText = language.trim();
        resumeLanguages.appendChild(li);
    });
};
// Event listeners for real-time updates
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.addEventListener('input', updateResume); // Call updateResume function on input change
});
