import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('./style-dictionary/config.json');

sd.buildAllPlatforms()
    .then(() => {
        console.log('Style Dictionary build completed successfully.');
    })
    .catch((error) => {
        console.error('Error during Style Dictionary build:', error);
    });