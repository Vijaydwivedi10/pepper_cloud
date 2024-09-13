const franc = require('franc');  // Example library to detect language

const detectLanguage = (text) => {
    const langCode = franc(text);
    return langCode;  // This will return a language code, e.g., 'eng', 'spa', etc.
};

module.exports = detectLanguage;
