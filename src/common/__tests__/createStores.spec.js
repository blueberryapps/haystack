import { observable, toJS } from 'mobx';
import createStores, { createNewStores, getState } from '../createStores';
import SampleStore from '../../browser/store';

const store1 = observable({ foo: 'foo' });
class Store2 {
  @observable bar = 'foo_too';
}

const expectedStoreData = {
  store1: { foo: 'foo' },
  store2: { bar: 'foo_too' },
};

test('createStores getState', () => {
  const actual = getState({ store1, store2: new Store2() });

  expect(actual).toEqual(expectedStoreData);
});

test('createStores createNewStores', () => {
  const initialStoreData = {
    store1: { foo: 'foo' },
    store2: { bar: 'foo_too' },
  };
  const stores = { store1, store2: new Store2() };
  const actualStores = createNewStores(stores);

  expect(actualStores).toEqual(stores);
  expect(toJS(actualStores.store1)).toEqual(initialStoreData.store1);
  expect(toJS(actualStores.store2)).toEqual(initialStoreData.store2);

  const newData = {
    store1: { foo: 'xyz' },
    store2: { bar: 'abc' },
  };
  const actualHydratedStores = createNewStores(stores, newData);

  expect(actualHydratedStores).toEqual(stores);
  expect(toJS(actualHydratedStores.store1)).toEqual(newData.store1);
  expect(toJS(actualHydratedStores.store2)).toEqual(newData.store2);
});

test('createStores', () => {
  const stores = createStores();

  expect(stores.sample).toBeInstanceOf(SampleStore);
  expect(toJS(stores.sample)).toEqual({ count: 0 });

  const initialData = { sample: { count: 55 } };
  const storesWData = createStores(initialData);

  expect(storesWData.sample).toBeInstanceOf(SampleStore);
  expect(toJS(storesWData.sample)).toEqual({ count: 55 });
});
