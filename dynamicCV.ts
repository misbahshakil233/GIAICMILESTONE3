// Function to update resume fields dynamically
const updateResume = (): void => {
    // Get form input values
    const name: string = (document.querySelector('#name') as HTMLInputElement).value;
    const fatherName: string = (document.querySelector('#fatherName') as HTMLInputElement).value;
    const email: string = (document.querySelector('#email') as HTMLInputElement).value;
    const phone: string = (document.querySelector('#phone') as HTMLInputElement).value;
    const address: string = (document.querySelector('#address') as HTMLInputElement).value;
    const education: string = (document.querySelector('#education') as HTMLInputElement).value;
    const workExperience: string = (document.querySelector('#workExperience') as HTMLInputElement).value;
    const skills: string[] = (document.querySelector('#skills') as HTMLInputElement).value.split(',');
    const languages: string[] = (document.querySelector('#languages') as HTMLInputElement).value.split(',');

    // Update resume section in real-time
    (document.querySelector('#resumeName') as HTMLElement).innerText = name;
    (document.querySelector('#resumeFatherName') as HTMLElement).innerText = fatherName;
    (document.querySelector('#resumeEmail') as HTMLElement).innerText = email;
    (document.querySelector('#resumePhone') as HTMLElement).innerText = phone;
    (document.querySelector('#resumeAddress') as HTMLElement).innerText = address;
    (document.querySelector('#resumeEducation') as HTMLElement).innerText = education;
    (document.querySelector('#resumeWorkExperience') as HTMLElement).innerText = workExperience;

    // Update skills
    const resumeSkills = document.querySelector('#resumeSkills') as HTMLElement;
    resumeSkills.innerHTML = '';  // Clear previous skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill.trim();
        resumeSkills.appendChild(li);
    });

    // Update languages
    const resumeLanguages = document.querySelector('#resumeLanguages') as HTMLElement;
    resumeLanguages.innerHTML = '';  // Clear previous languages
    languages.forEach(language => {
        const li = document.createElement('li');
        li.innerText = language.trim();
        resumeLanguages.appendChild(li);
    });
};

// Event listeners for real-time updates
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', updateResume);  // Call updateResume function on input change
});
