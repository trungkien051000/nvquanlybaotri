interface ISettingFormComponentProps extends IBaseCompProps {}

interface ISettingFormComponent<P = {}> extends IBaseComp<P> {}

interface ISettingFormComponentState {
    settingData: ISettingDataAPI;
    oldSettingData: ISettingDataAPI;
}
