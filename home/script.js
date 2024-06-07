document.addEventListener("DOMContentLoaded", function () {
    const saibaMaisBtn = document.getElementById('saibabtn');
    const problemasSection = document.getElementById('section-problemas'); /* nao mexer aquiiiiii */

    saibaMaisBtn.addEventListener('click', () => {
        problemasSection.scrollIntoView({ behavior: 'smooth' });
    });
});
