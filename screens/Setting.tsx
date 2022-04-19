import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { SettingForm } from '@components/index';

import { container, flexbox } from '@assets/styles';
const styles = StyleSheet.create({
    ...container,
    ...flexbox,
});
const Setting: ISettingScreen<ISettingScreenProps> = (props) => {
    return (
        <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
            <SettingForm {...props} />
        </ScrollView>
    );
};

export default Setting;
