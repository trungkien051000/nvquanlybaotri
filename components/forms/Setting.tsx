import { common, container, flexbox, spacing } from '@assets/styles';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import Validator from '@components/commons/Validator';
import { ReduxStates } from '@redux/reducers';
import { useTrans } from '@utils/hooks';
import React, { createRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
    ...common,
    ...spacing,
    ...flexbox,
    ...container,
});

const SettingForm: ISettingFormComponent<ISettingFormComponentProps> = (props) => {
    const { navigation } = props;
    const trans = useTrans();
    const dispatch = useDispatch();
    const { setting, locale } = useSelector((states: ReduxStates) => states);
    const [state, setState] = useState<ISettingFormComponentState>({
        settingData: setting,
        oldSettingData: setting,
    });

    const usernameValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordValidatorRef = createRef<IValidatorComponentHandle>();
    const phoneValidatorRef = createRef<IValidatorComponentHandle>();
    const inputUsernameRef = createRef<TextInput>();
    const inputPasswordRef = createRef<TextInput>();
    const inputPhoneRef = createRef<TextInput>();

    const handleChangeSettingData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            settingData: {
                ...prevState.settingData,
                [field]: value,
            },
        }));
    };

    const { settingData, oldSettingData } = state;
    return (
        <KeyboardAwareScrollView>
            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}
            >
                {trans.setting.name}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={settingData.name}
                onChangeText={(data) => {
                    handleChangeSettingData('name', data);
                }}
                maxLength={128}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}
            >
                {trans.setting.username}
            </TextView>
            <Input
                style={[styles.marginTop8, styles.color_gray]}
                value={settingData.username}
                onChangeText={(data) => {
                    handleChangeSettingData('username', data);
                }}
                selectTextOnFocus={false}
                editable={false}
                maxLength={128}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}
            >
                {trans.setting.password}
            </TextView>
            <Validator ref={passwordValidatorRef} inputRef={inputPasswordRef}>
                <Input
                    ref={inputPasswordRef}
                    style={[styles.marginTop8]}
                    value={settingData.password}
                    onChangeText={(data) => {
                        handleChangeSettingData('password', data);
                    }}
                    secureTextEntry={true}
                    maxLength={128}
                />
            </Validator>

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}
            >
                {trans.setting.shop}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={settingData.shop}
                onChangeText={(data) => {
                    handleChangeSettingData('shop', data);
                }}
                maxLength={128}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}
            >
                {trans.setting.address}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={settingData.address}
                onChangeText={(data) => {
                    handleChangeSettingData('address', data);
                }}
                maxLength={128}
            />

            <TextView
                style={[
                    styles.color_gray,
                    styles.font_weight_bold,
                    styles.font_size_13,
                    locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                ]}
            >
                {trans.setting.phone}
            </TextView>
            <Input
                style={[styles.marginTop8]}
                value={settingData.phone}
                keyboardType="numeric"
                onChangeText={(data) => {
                    handleChangeSettingData('phone', data.replace(/[^0-9]/g, ''));
                }}
                maxLength={128}
            />
        </KeyboardAwareScrollView>
    );
};

export default SettingForm;
