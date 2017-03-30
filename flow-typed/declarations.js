/*
  If Flow throws "Required module not found", altough module is not missing,
  add new "declare module" statement here for that library.
*/

declare module 'react-helmet' {
  declare module.exports: any;
}

declare var webpackIsomorphicTools: Object;
