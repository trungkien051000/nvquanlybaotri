import { button, common, container, flexbox, login, spacing } from '@assets/styles';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import { ReduxStates } from '@redux/reducers';
import { images } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import Button from '@components/commons/Button';
const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
    ...button,
});
const DetailSchedule: IDetailScheduleScreen<IDetailScheduleScreenProps> = (props) => {
    const { navigation } = props;
    const { detailSchedule, locale } = useSelector((states: ReduxStates) => states);
    const [date1, setDate1] = useState(new Date());
    const [openDate1, setOpenDate1] = useState(false);
    const [date2, setDate2] = useState(new Date());
    const [openDate2, setOpenDate2] = useState(false);
    const [date3, setDate3] = useState(new Date());
    const [openDate3, setOpenDate3] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [state, setState] = useState<IDetailScheduleFormComponentState>({
        detailScheduleData: detailSchedule,
        oldDetailScheduleData: detailSchedule,
    });
    const { detailScheduleData, oldDetailScheduleData } = state;
    const [selectedTienDo, setSelectedTienDo] = useState(detailScheduleData.TienDo);
    const [selectedTrangThai, setSelectedTrangThai] = useState(detailScheduleData.TrangThai);
    const trans = useTrans();
    let dateSelected1 = '';
    let dateSelected2 = '';
    let dateSelected3 = '';
    const showToast = () => {
        ToastAndroid.show('Bạn đã cập nhật thành công !', ToastAndroid.LONG);
    };
    const handleDateData = (date: Date) => {
        return (
            (date.getDate() < 10 ? '0' : '') +
            date.getDate() +
            '/' +
            (date.getMonth() + 1 < 10 ? '0' : '') +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear()
        );
    };
    const handleChangeData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            detailScheduleData: {
                ...prevState.detailScheduleData,
                [field]: value,
            },
        }));
    };
    return (
        <>
            <View style={[{ width: '100%' }, styles.padding15, styles.background_white, styles.flexRow, styles.justifyBetween]}>
                <TouchableOpacity onPress={navigation?.goBack}>
                    <Image source={images.ICON_LEFTARROW} />
                </TouchableOpacity>
                <TextView
                    style={[
                        styles.color_blue,
                        styles.alignSelfCenter,
                        styles.alignItemsCenter,
                        styles.justifyCenter,
                        styles.font_weight_regular,
                        styles.font_size_27,
                    ]}
                >
                    {trans.detailSchedule.title}
                </TextView>
                <Button text={trans.common.save} style={styles.button_save} onPress={() => showToast()} />
            </View>

            <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.MaBaoTri}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.MaBaoTri}
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
                    {trans.detailSchedule.TieuDe}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.TieuDe}
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
                    {trans.detailSchedule.MoTa}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.MoTa}
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
                    {trans.detailSchedule.ThietBi}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.ThietBi}
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
                    {trans.detailSchedule.NhanVien}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.NhanVien}
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
                    {trans.detailSchedule.KhachHang}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.KhachHang}
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
                    {trans.detailSchedule.DiaChi}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.DiaChi}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <View>
                    <TextView style={[styles.color_gray, styles.font_weight_bold, styles.font_size_13]}>
                        {trans.detailSchedule.NgayBatDau}
                    </TextView>
                    <View style={[styles.flexRow, styles.borderBottom_gray]}>
                        <TouchableOpacity
                            style={[styles.login_input, styles.flexRow, { width: '100%' }]}
                            onPress={() => setOpenDate1(true)}
                        >
                            <Input
                                style={[styles.login_input]}
                                placeholder={trans.book.pickdate}
                                value={detailScheduleData.NgayBatDau}
                                selectTextOnFocus={false}
                                editable={false}
                            />
                            <View style={[styles.justifyCenter]}>
                                <Image source={images.ICON_CALENDAR} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TextView style={[styles.color_gray, styles.font_weight_bold, styles.font_size_13]}>
                        {trans.detailSchedule.NgayKetThuc}
                    </TextView>
                    <View style={[styles.flexRow, styles.borderBottom_gray]}>
                        <TouchableOpacity
                            style={[styles.login_input, styles.flexRow, { width: '100%' }]}
                            onPress={() => setOpenDate2(true)}
                        >
                            <Input
                                style={[styles.login_input]}
                                placeholder={trans.book.pickdate}
                                value={detailScheduleData.NgayKetThuc}
                                selectTextOnFocus={false}
                                editable={false}
                            />
                            <View style={[styles.justifyCenter]}>
                                <Image source={images.ICON_CALENDAR} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TextView style={[styles.color_gray, styles.font_weight_bold, styles.font_size_13]}>
                        {trans.detailSchedule.NgayHoanThanh}
                    </TextView>
                    <View style={[styles.flexRow, styles.borderBottom_gray]}>
                        <TouchableOpacity
                            style={[styles.login_input, styles.flexRow, { width: '100%' }]}
                            onPress={() => setOpenDate3(true)}
                        >
                            <Input
                                style={[styles.login_input]}
                                placeholder={trans.book.pickdate}
                                value={detailScheduleData.NgayHoanThanh}
                                selectTextOnFocus={false}
                                editable={false}
                            />
                            <View style={[styles.justifyCenter]}>
                                <Image source={images.ICON_CALENDAR} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <TextView
                    style={[
                        styles.marginTop10,
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.TienDo}
                </TextView>
                <Picker selectedValue={selectedTienDo} onValueChange={(itemValue, itemIndex) => setSelectedTienDo(itemValue)}>
                    <Picker.Item label="0%" value="0%" />
                    <Picker.Item label="10%" value="10%" />
                    <Picker.Item label="20%" value="20%" />
                    <Picker.Item label="30%" value="30%" />
                    <Picker.Item label="40%" value="40%" />
                    <Picker.Item label="50%" value="50%" />
                    <Picker.Item label="60%" value="60%" />
                    <Picker.Item label="70%" value="70%" />
                    <Picker.Item label="80%" value="80%" />
                    <Picker.Item label="90%" value="90%" />
                    <Picker.Item label="100%" value="100%" />
                </Picker>

                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.TrangThai}
                </TextView>
                <Picker selectedValue={selectedTrangThai} onValueChange={(itemValue, itemIndex) => setSelectedTrangThai(itemValue)}>
                    <Picker.Item label="Mới" value="Mới" />
                    <Picker.Item label="Đang tiến hành" value="Đang tiến hành" />
                    <Picker.Item label="Hoàn thành" value="Hoàn thành" />
                    <Picker.Item label="Phản hồi" value="Phản hồi" />
                    <Picker.Item label="Đóng" value="Đóng" />
                </Picker>
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.BinhLuan}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.BinhLuan}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
            </ScrollView>
            <DatePicker
                modal={true}
                title={trans.common.dateTitle}
                cancelText={trans.common.dateTimeCancel}
                confirmText={trans.common.dateTimeConfirm}
                mode="date"
                androidVariant="nativeAndroid"
                open={openDate1}
                date={date1}
                locale={trans.common.locale}
                onConfirm={(date1) => {
                    setOpenDate1(false);
                    setDate1(date1);
                    dateSelected1 = handleDateData(date1);
                    handleChangeData('NgayBatDau', dateSelected1);
                }}
                onCancel={() => {
                    setOpenDate1(false);
                }}
            />
            <DatePicker
                modal={true}
                title={trans.common.dateTitle}
                cancelText={trans.common.dateTimeCancel}
                confirmText={trans.common.dateTimeConfirm}
                mode="date"
                androidVariant="nativeAndroid"
                open={openDate2}
                date={date2}
                locale={trans.common.locale}
                onConfirm={(date2) => {
                    setOpenDate2(false);
                    setDate2(date2);
                    dateSelected2 = handleDateData(date2);
                    handleChangeData('NgayKetThuc', dateSelected2);
                }}
                onCancel={() => {
                    setOpenDate2(false);
                }}
            />
            <DatePicker
                modal={true}
                title={trans.common.dateTitle}
                cancelText={trans.common.dateTimeCancel}
                confirmText={trans.common.dateTimeConfirm}
                mode="date"
                androidVariant="nativeAndroid"
                open={openDate3}
                date={date3}
                locale={trans.common.locale}
                onConfirm={(date3) => {
                    setOpenDate3(false);
                    setDate3(date3);
                    dateSelected3 = handleDateData(date3);
                    handleChangeData('NgayHoanThanh', dateSelected3);
                }}
                onCancel={() => {
                    setOpenDate3(false);
                }}
            />
        </>
    );
};
export default DetailSchedule;
