import { toJS, extendObservable } from 'mobx';
import SampleStore from '../browser/store';

const createAndHydrateStore = (store, initialData) => {
  const maybeHydratedStore = initialData ? extendObservable(store, initialData) : store;
  return maybeHydratedStore;
};

export const createNewStores = (stores, initialData = {}) =>
  Object.keys(stores).reduce(
    (finalStores, storeKey) => ({
      ...finalStores,
      [storeKey]: createAndHydrateStore(stores[storeKey], initialData[storeKey]),
    }),
    {}
  );

export const getState = stores =>
  Object.keys(stores).reduce(
    (data, storeKey) => ({
      ...data,
      [storeKey]: toJS(stores[storeKey]),
    }),
    {}
  );

const createStores = (initialData = {}) => {
  /**
   * Define the stores
   * e.g {
   *   todos: new Todos(),
   *   user
   * }
   */
  const stores = {
    sample: new SampleStore(),
  };

  return createNewStores(stores, initialData);
};

export default createStores;
