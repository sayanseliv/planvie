import { MMKV } from 'react-native-mmkv';
const ENCRYPTION_KEY =
  'Kj8#mP2$vL9@nR5&wQ3*xE7!yT6^uI1%zA4+bN0-cV8~gH2)fS5(dM3_jX9}qW1[';

export const authStorage = new MMKV({
  id: 'auth-storage',
  encryptionKey: ENCRYPTION_KEY,
});
export const settingsStorage = new MMKV({
  id: 'settings-storage',
  encryptionKey: ENCRYPTION_KEY,
});
export const cacheStorage = new MMKV({
  id: 'cache-storage',
});
