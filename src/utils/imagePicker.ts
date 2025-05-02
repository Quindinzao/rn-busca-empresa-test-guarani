import { launchImageLibrary } from 'react-native-image-picker';

export const pickImage = async (): Promise<string | null> => {
  return new Promise(resolve => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false, // true se quiser salvar no banco em base64
      },
      response => {
        if (response.didCancel || !response.assets || response.assets.length === 0) {
          resolve(null);
        } else {
          resolve(response.assets[0].uri || null);
        }
      },
    );
  });
};
