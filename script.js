function setLang(lang) {
    document.body.classList.remove('hu', 'en');
    document.body.classList.add(lang);
    localStorage.setItem('fama-lang', lang);
    document.documentElement.lang = lang;
}

function setTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('fama-theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('fama-lang') || 'hu';
    setLang(savedLang);

    const savedTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const finalTheme = localStorage.getItem('fama-theme') || savedTheme;
    setTheme(finalTheme);
});

