import I18n from 'react-native-i18n';
import en from './locales/en';
import pt from './locales/pt';
import es from './locales/es';

I18n.fallbacks = true;

I18n.translations = {
  en,
  pt
};

export default I18n;
