import SampleStore from '../store';

test('sample store actions', () => {
  const store = new SampleStore();

  expect(store.count).toBe(0);

  store.plus();
  expect(store.count).toBe(1);
  store.plus();
  expect(store.count).toBe(2);
  store.minus();
  expect(store.count).toBe(1);
});

test('sample store computed', () => {
  const store = new SampleStore();

  expect(store.special).toBe('¯\\_(ツ)_/¯');

  store.count = 5;
  expect(store.special).toBe('•_•)<br>( •_•)>⌐■-■<br>(⌐■_■)');
  store.count = 4;
  expect(store.special).toBe('¯\\_(ツ)_/¯');
});
