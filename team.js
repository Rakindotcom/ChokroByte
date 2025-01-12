const contact = document.querySelectorAll('.socials');
const rakinLinkedin = document.getElementById('rakinLinkedin');
const rakinGithub = document.getElementById('rakinGithub');
const rakinWhatsApp = document.getElementById('rakinWhatsApp');
const rakinEmail = document.getElementById('rakinEmail');
const nafimLinkedin = document.getElementById('nafimLinkedin');
const nafimPortfolio = document.getElementById('nafimPortfolio');
const nafimWhatsApp = document.getElementById('nafimWhatsApp');
const nafimEmail = document.getElementById('nafimEmail');
const omioLinkedin = document.getElementById('omioLinkedin');
const omioGithub = document.getElementById('omioGithub');
const omioWhatsApp = document.getElementById('omioWhatsApp');
const omioEmail = document.getElementById('omioEmail');
const kaifLinkedin = document.getElementById('kaifLinkedin');
const kaifGithub = document.getElementById('kaifGithub');
const socialLink = document.querySelectorAll('.socialLink');


contact.forEach(
    (btn) => {
        btn.addEventListener('click', () => {
            if (btn.id === 'rakin') {
                rakinLinkedin.style.display = 'block';
                rakinGithub.style.display = 'block';
                rakinWhatsApp.style.display = 'block';
                rakinEmail.style.display = 'block';
                btn.textContent = 'Contact Rakin';
                setTimeout(() => {
                    rakinLinkedin.style.display = 'none';
                    rakinGithub.style.display = 'none';
                    rakinWhatsApp.style.display = 'none';
                    rakinEmail.style.display = 'none';
                    btn.innerHTML = `Contact
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed">
                        <path d="M384-720v-110L130-576h110v48H48v-192h48v110l254-254H240v-48h192v192h-48ZM587-48q-24 0-46-9t-39-26L304-281l31-31q14-14 32-18.5t37 .5l76 19v-325q0-15.3 10.29-25.65Q500.58-672 515.79-672t25.71 10.35Q552-651.3 552-636v419l-111-28 111 111q7 7 16.13 10.5 9.13 3.5 18.87 3.5h157q39.6 0 67.8-28.2Q840-176.4 840-216v-180q0-15.3 10.29-25.65Q860.58-432 875.79-432t25.71 10.35Q912-411.3 912-396v180q0 70-49 119T744-48H587Zm13-288v-156q0-15.3 10.29-25.65Q620.58-528 635.79-528t25.71 10.35Q672-507.3 672-492v156h-72Zm120 0v-107.74q0-15.26 10.29-25.76 10.29-10.5 25.5-10.5t25.71 10.35Q792-459.3 792-444v108h-72Zm-38 102Z"/></svg>`;
                }, 5000);

            } else if (btn.id === 'nafim') {
                nafimLinkedin.style.display = 'block';
                nafimPortfolio.style.display = 'block';
                nafimWhatsApp.style.display = 'block';
                nafimEmail.style.display = 'block';
                btn.textContent = 'Contact Nafim';
                setTimeout(() => {
                    nafimLinkedin.style.display = 'none';
                    nafimPortfolio.style.display = 'none';
                    nafimWhatsApp.style.display = 'none';
                    nafimEmail.style.display = 'none';
                    btn.innerHTML = `Contact
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed">
                        <path d="M384-720v-110L130-576h110v48H48v-192h48v110l254-254H240v-48h192v192h-48ZM587-48q-24 0-46-9t-39-26L304-281l31-31q14-14 32-18.5t37 .5l76 19v-325q0-15.3 10.29-25.65Q500.58-672 515.79-672t25.71 10.35Q552-651.3 552-636v419l-111-28 111 111q7 7 16.13 10.5 9.13 3.5 18.87 3.5h157q39.6 0 67.8-28.2Q840-176.4 840-216v-180q0-15.3 10.29-25.65Q860.58-432 875.79-432t25.71 10.35Q912-411.3 912-396v180q0 70-49 119T744-48H587Zm13-288v-156q0-15.3 10.29-25.65Q620.58-528 635.79-528t25.71 10.35Q672-507.3 672-492v156h-72Zm120 0v-107.74q0-15.26 10.29-25.76 10.29-10.5 25.5-10.5t25.71 10.35Q792-459.3 792-444v108h-72Zm-38 102Z"/></svg>`;
                }, 5000)
            } else if (btn.id === 'omio') {
                omioLinkedin.style.display = 'block';
                omioGithub.style.display = 'block';
                omioWhatsApp.style.display = 'block';
                omioEmail.style.display = 'block';
                btn.textContent = 'Contact Rayhan';
                setTimeout(() => {
                    omioLinkedin.style.display = 'none';
                    omioGithub.style.display = 'none';
                    omioWhatsApp.style.display = 'none';
                    omioEmail.style.display = 'none';
                    btn.innerHTML = `Contact
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed">
                        <path d="M384-720v-110L130-576h110v48H48v-192h48v110l254-254H240v-48h192v192h-48ZM587-48q-24 0-46-9t-39-26L304-281l31-31q14-14 32-18.5t37 .5l76 19v-325q0-15.3 10.29-25.65Q500.58-672 515.79-672t25.71 10.35Q552-651.3 552-636v419l-111-28 111 111q7 7 16.13 10.5 9.13 3.5 18.87 3.5h157q39.6 0 67.8-28.2Q840-176.4 840-216v-180q0-15.3 10.29-25.65Q860.58-432 875.79-432t25.71 10.35Q912-411.3 912-396v180q0 70-49 119T744-48H587Zm13-288v-156q0-15.3 10.29-25.65Q620.58-528 635.79-528t25.71 10.35Q672-507.3 672-492v156h-72Zm120 0v-107.74q0-15.26 10.29-25.76 10.29-10.5 25.5-10.5t25.71 10.35Q792-459.3 792-444v108h-72Zm-38 102Z"/></svg>`;
                }, 5000)
            }
            else if (btn.id === 'kaif') {
                kaifLinkedin.style.display = 'block';
                kaifGithub.style.display = 'block';
                kaifWhatsApp.style.display = 'block';
                kaifEmail.style.display = 'block';
                btn.textContent = 'Contact Kaif';
                setTimeout(() => {
                    kaifLinkedin.style.display = 'none';
                    kaifGithub.style.display = 'none';
                    kaifWhatsApp.style.display = 'none';
                    kaifEmail.style.display = 'none';
                    btn.innerHTML = `Contact
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed">
                        <path d="M384-720v-110L130-576h110v48H48v-192h48v110l254-254H240v-48h192v192h-48ZM587-48q-24 0-46-9t-39-26L304-281l31-31q14-14 32-18.5t37 .5l76 19v-325q0-15.3 10.29-25.65Q500.58-672 515.79-672t25.71 10.35Q552-651.3 552-636v419l-111-28 111 111q7 7 16.13 10.5 9.13 3.5 18.87 3.5h157q39.6 0 67.8-28.2Q840-176.4 840-216v-180q0-15.3 10.29-25.65Q860.58-432 875.79-432t25.71 10.35Q912-411.3 912-396v180q0 70-49 119T744-48H587Zm13-288v-156q0-15.3 10.29-25.65Q620.58-528 635.79-528t25.71 10.35Q672-507.3 672-492v156h-72Zm120 0v-107.74q0-15.26 10.29-25.76 10.29-10.5 25.5-10.5t25.71 10.35Q792-459.3 792-444v108h-72Zm-38 102Z"/></svg>`;
                }, 5000)
            }
        })
    })