// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Kullanıcı tercihlerinin kaydedilmesi
// const savePreferences = async () => {
//   try {
//     await AsyncStorage.setItem('language', selectedLanguage);
//     await AsyncStorage.setItem('name', name);
//     await AsyncStorage.setItem('categories', JSON.stringify(selectedCategories));
//   } catch (e) {
//     console.error("Preferences could not be saved", e);
//   }
// };

// // Kullanıcı tercihlerinin yüklenmesi
// const loadPreferences = async () => {
//   try {
//     const language = await AsyncStorage.getItem('language');
//     const name = await AsyncStorage.getItem('name');
//     const categories = await AsyncStorage.getItem('categories');
    
//     setSelectedLanguage(language || 'en');
//     setName(name || '');
//     setSelectedCategories(categories ? JSON.parse(categories) : []);
//   } catch (e) {
//     console.error("Preferences could not be loaded", e);
//   }
// };
