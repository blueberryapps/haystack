import en from './en';
import formats from './en.formats';
import form from './en.form';
// Note messages for all languages are imported all at once. That's fine for
// almost all apps. If gzipped messages dir is bigger then say 20 kB, congrats!
// Your app is used and useful, so now it's time for further optimization. Since
// messages are in app state, they can be fetched or passed from server easily.

export default { ...en, ...formats, form };
