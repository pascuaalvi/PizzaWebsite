// Default language

i18n.setDefaultLanguage('en_US');

// Helper to retrieve locale according to language

getLanguage = function (language) {
  if (language === '/fr/') {
    language = 'fr_FR'
  }
  else {
    language = 'en_US'
  }
  return language
}

// Translations

i18n.map ('en_US', {
  homepage: {
    title: 'Pizza Place is awesome.',
    subtitle: 'A better way to build pizzas.'
  }
});

i18n.map ('fr_FR', {
  homepage: {
    title: 'Pizza est génial.',
    subtitle: 'Une meilleure manière de construire des pizzas.'
  }
});