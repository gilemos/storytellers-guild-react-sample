import { makeAutoObservable } from "mobx";

/*
This file stores variables that we can use and change from any component
*/
export class Controller {
    private _isObserverButtonClicked: boolean = false;

    public constructor() {
        makeAutoObservable(this);
    }

    public setIsObserverButtonClicked(flag: boolean) {
        this._isObserverButtonClicked = flag;
    }

    public getIsObserverButtonClicked() {
        return this._isObserverButtonClicked;
    }
}
