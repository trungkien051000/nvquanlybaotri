import { SET_LOCALE, SET_MODAL, SET_NAVBAR_BACK, SET_NAVBAR_MENU, SET_NAVBAR_SUBMIT, SET_SETTING, SET_TOAST } from '@redux/actions/type';

const localeReducer = (state: string = 'vi', action: ILocaleReduxAction) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.data;
        default:
            return state;
    }
};

const settingReducer = (
    state: ISettingDataAPI = {
        name: 'Bạch Trung Kiên',
        username: 'trungkien',
        password: 'trungkien2000',
        shop: 'Police Coffee',
        address: '80 Lê Lợi, Đà Nẵng',
        phone: '0702763387',
        language: 'vi',
    },
    action: ISettingReduxAction,
) => {
    switch (action.type) {
        case SET_SETTING:
            return action.data;
        default:
            return state;
    }
};

const modalReducer = (state: IModalReduxData = { isShow: false }, action: IModalReduxAction) => {
    switch (action.type) {
        case SET_MODAL:
            return action.data;
        default:
            return state;
    }
};

const toastReducer = (state: IToastReduxData = { isShow: false }, action: IToastReduxAction) => {
    switch (action.type) {
        case SET_TOAST:
            return action.data;
        default:
            return state;
    }
};

const navbarSubmitReducer = (state: boolean = false, action: INavbarReduxAction) => {
    switch (action.type) {
        case SET_NAVBAR_SUBMIT:
            return action.data;
        default:
            return state;
    }
};

const navbarBackReducer = (state: boolean = false, action: INavbarReduxAction) => {
    switch (action.type) {
        case SET_NAVBAR_BACK:
            return action.data;
        default:
            return state;
    }
};

const navbarMenuReducer = (state: boolean = false, action: INavbarReduxAction) => {
    switch (action.type) {
        case SET_NAVBAR_MENU:
            return action.data;
        default:
            return state;
    }
};

export { localeReducer, modalReducer, toastReducer, settingReducer, navbarSubmitReducer, navbarBackReducer, navbarMenuReducer };
