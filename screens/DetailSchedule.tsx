import { common, container, flexbox, login, spacing } from '@assets/styles';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import { ReduxStates } from '@redux/reducers';
import { images } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';
const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
});
const DetailSchedule: IDetailScheduleScreen<IDetailScheduleScreenProps> = () => {
    const { detailSchedule, locale } = useSelector((states: ReduxStates) => states);
    const [date1, setDate1] = useState(new Date());
    const [openDate1, setOpenDate1] = useState(false);
    const [date2, setDate2] = useState(new Date());
    const [openDate2, setOpenDate2] = useState(false);
    const [date3, setDate3] = useState(new Date());
    const [openDate3, setOpenDate3] = useState(false);
    const [state, setState] = useState<IDetailScheduleFormComponentState>({
        detailScheduleData: detailSchedule,
        oldDetailScheduleData: detailSchedule,
    });
    const { detailScheduleData, oldDetailScheduleData } = state;
    const trans = useTrans();
    let dateSelected1 = '';
    let dateSelected2 = '';
    let dateSelected3 = '';
    useEffect(() => {
        dateSelected1 =
            (date1.getDate() < 10 ? '0' : '') +
            date1.getDate() +
            '/' +
            (date1.getMonth() + 1 < 10 ? '0' : '') +
            (date1.getMonth() + 1) +
            '/' +
            date1.getFullYear();
    }, [detailScheduleData.NgayBatDau]);
    useEffect(() => {
        dateSelected2 =
            (date2.getDate() < 10 ? '0' : '') +
            date2.getDate() +
            '/' +
            (date2.getMonth() + 1 < 10 ? '0' : '') +
            (date2.getMonth() + 1) +
            '/' +
            date2.getFullYear();
            console.log(date2);
        }, [detailScheduleData.NgayKetThuc]);
    useEffect(() => {
        dateSelected3 =
            (date3.getDate() < 10 ? '0' : '') +
            date3.getDate() +
            '/' +
            (date3.getMonth() + 1 < 10 ? '0' : '') +
            (date3.getMonth() + 1) +
            '/' +
            date3.getFullYear();
            console.log(date3);
        }, [detailScheduleData.NgayHoanThanh]);

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
            <View style={[{ width: '100%' }, styles.padding15, styles.background_white]}>
                <TextView style={[styles.color_blue, styles.text_center, styles.font_weight_regular, styles.font_size_27]}>
                    {trans.detailSchedule.title}
                </TextView>
            </View>

            <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
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
                    ]}>
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
                    ]}>
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
                    ]}>
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
                    ]}>
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
                    ]}>
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
                    ]}>
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
                            onPress={() => setOpenDate1(true)}>
                            <Input
                                style={[styles.login_input]}
                                placeholder={trans.book.pickdate}
                                value={
                                    dateSelected1 ===
                                    (date1.getDate() < 10 ? '0' : '') +
                                        date1.getDate() +
                                        '/' +
                                        (date1.getMonth() + 1 < 10 ? '0' : '') +
                                        (date1.getMonth() + 1) +
                                        '/' +
                                        date1.getFullYear()
                                        ? detailScheduleData.NgayBatDau
                                        : dateSelected1
                                }
                                onChangeText={() => {
                                    handleChangeData('NgayBatDau', dateSelected1);
                                }}
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
                            onPress={() => setOpenDate2(true)}>
                            <Input
                                style={[styles.login_input]}
                                placeholder={trans.book.pickdate}
                                value={
                                    dateSelected2 ===
                                    (date2.getDate() < 10 ? '0' : '') +
                                        date2.getDate() +
                                        '/' +
                                        (date2.getMonth() + 1 < 10 ? '0' : '') +
                                        (date2.getMonth() + 1) +
                                        '/' +
                                        date2.getFullYear()
                                        ? detailScheduleData.NgayKetThuc
                                        : dateSelected2
                                }
                                onChangeText={() => {
                                    handleChangeData('NgayKetThuc', dateSelected2);
                                }}
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
                            onPress={() => setOpenDate3(true)}>
                            <Input
                                style={[styles.login_input]}
                                placeholder={trans.book.pickdate}
                                value={
                                    dateSelected3 ===
                                    (date3.getDate() < 10 ? '0' : '') +
                                        date3.getDate() +
                                        '/' +
                                        (date3.getMonth() + 1 < 10 ? '0' : '') +
                                        (date3.getMonth() + 1) +
                                        '/' +
                                        date3.getFullYear()
                                        ? detailScheduleData.NgayHoanThanh
                                        : dateSelected3
                                }
                                onChangeText={() => {
                                    handleChangeData('NgayHoanThanh', dateSelected3);
                                }}
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
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}>
                    {trans.detailSchedule.TienDo}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.TienDo}
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
                    ]}>
                    {trans.detailSchedule.TrangThai}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.TrangThai}
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
                    ]}>
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
