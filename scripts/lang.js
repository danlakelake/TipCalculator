// Traducciones
const translations = {
  en: {
    title: 'Tip Calculator',
    mainTitle: 'Tip Calculator',
    firstLabel: 'How much was your bill?',
    secondLabel: 'How was your service?',
    chooseAnOption: '-- Choose an option --',
    serviceOptionOne: '30% - Oustanding',
    serviceOptionTwo: '20% - Good',
    serviceOptionThree: '15% - It was okay',
    serviceOptionFour: '10% - Bad',
    serviceOptionFive: '5% - Terrible',
    thirdLabel: 'How many people are sharing the bill?',
    btnCalculate: 'Calculate!',
    fourthLabel: 'TIP AMOUNT',
    eachText: 'each person',

    // Traducciones alertas()
    alertInvalidAmount: 'Please enter a valid amount',
    alertSelectService: 'Please select a service option',
  },
  es: {
    title: 'Calculadora de Propinas',
    mainTitle: 'Calculadora de Propinas',
    firstLabel: '¿Cuánto fue tu cuenta?',
    secondLabel: '¿Cómo fue tu servicio?',
    chooseAnOption: '-- Elige una opción --',
    serviceOptionOne: '30% - Excelente',
    serviceOptionTwo: '20% - Bueno',
    serviceOptionThree: '15% - Meeh',
    serviceOptionFour: '10% - Malo',
    serviceOptionFive: '5% - Terrible',
    thirdLabel: '¿Cuántos personas comparten la cuenta?',
    btnCalculate: 'Calcular!',
    fourthLabel: 'Propina',
    eachText: 'por persona',

    // Traducciones alertas()
    alertInvalidAmount: 'Por favor ingresa una cantidad válida',
    alertSelectService: 'Por favor selecciona una opción de servicio',
  },
};

// Función cambio de Idioma
function setLanguage(lang) {
  // Guarda el idioma actual en localStorage
  localStorage.setItem('language', lang);

  // Cambia label del botón idioma
  const langLabel = document.getElementById('langSwitch');
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // Actualiza el contenido de los elementos data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Detecta el idioma actual
let currentLang = localStorage.getItem('language') || 'es';
setLanguage(currentLang);

// Evento botón para cambio de idioma
document.getElementById('langSwitch').addEventListener('click', () => {
  console.log('diste click');
  currentLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(currentLang);
});
