import { action, observable, computed } from 'mobx';

export default class SampleStore {
  @observable count = 0;

  @action plus() {
    this.count += 1;
  }

  @action minus() {
    this.count -= 1;
  }

  @computed get special() {
    return this.count < 5
      ? '¯\\_(ツ)_/¯'
      : '•_•)<br>( •_•)>⌐■-■<br>(⌐■_■)';
  }
}
