import { toJS, extendObservable } from 'mobx';
import SampleStore from '../browser/store';

const createAndHydrateStore = (Store, initialData) => {
  let store = new Store();
  if (initialData) {
    store = extendObservable(store, initialData);
  }
  return store;
};

const createNewStores = (stores, initialData) =>
  Object.keys(stores).reduce(
    (finalStores, storeKey) => ({
      ...finalStores,
      [storeKey]: createAndHydrateStore(stores[storeKey], initialData[storeKey]),
    }),
    stores
  );

const createStores = (initialData = {}) => {
  /**
   * Define the stores
   * e.g {
   *   todos: Todos,
   *   user: User
   * }
   */
  const stores = {
    sample: SampleStore
  };

  return createNewStores(stores, initialData);
};

export const getState = stores =>
  Object.keys(stores).reduce((data, storeKey) => ({
    ...data,
    [storeKey]: toJS(stores[storeKey])
  }), {});


export default createStores;
