import { makeAutoObservable, toJS } from "mobx";

import Api from "src/api";

class Store {
  public userInfo: any = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
