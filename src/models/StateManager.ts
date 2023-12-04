// 状態を表すEnumを定義します
export enum ViewState {
    Loading,
    Success,
    NoData,
    Error
}

// 状態を管理するクラスを定義します
export class StateManager {
    state: ViewState;

    constructor() {
        this.state = ViewState.Loading;
    }

    setState(newState: ViewState) {
        this.state = newState;
    }

    getState() {
        return this.state;
    }
}