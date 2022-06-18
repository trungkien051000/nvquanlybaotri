import { common, container, flexbox, spacing } from '@assets/styles';
import Button from '@components/commons/Button';
import Choice from '@components/commons/Choice';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import Validator from '@components/commons/Validator';
import { ReduxStates } from '@redux/reducers';
import { enums } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import React, { createRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
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

    const { settingData, oldSettingData } = state;
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
    const handleToggleRadio = (field: string, value: string[]) => {
        handleChangeSettingData(field, value[0] === enums.SETTING_KEY.ON ? 'vi' : 'en');
    };

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

            <View style={[styles.flexRow, styles.justifyBetween, styles.marginBottom10]}>
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.marginTop20,
                        styles.font_size_13,
                        locale === 'jp' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.setting.text_radiobutton_lang}
                </TextView>
                <Choice
                    type="radio"
                    data={[
                        { value: '0', label: trans.setting.radiobutton_langvi },
                        { value: '1', label: trans.setting.radiobutton_langen },
                    ]}
                    valueSelected={[settingData.language === 'vi' ? enums.SETTING_KEY.ON : enums.SETTING_KEY.OFF]}
                    onChange={(value: string[]) => handleToggleRadio('language', value)}
                />
            </View>

            <Button text={trans.setting.save} style={[styles.marginTop34]} styleText={[styles.font_size_17]} />
        </KeyboardAwareScrollView>
    );
};

export default SettingForm;
