import { common, container, schedule } from '@assets/styles';
import { routes } from '@utils/constants';
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    ...container,
    ...schedule,
    ...common,
});
const Schedule: IScheduleScreen<IScheduleScreenProps> = (props) => {
    const { navigation } = props;
    const [state, setState] = useState([
        {
            MaBaoTri: 4,
            TenNhanVien: 'Bạch Trung Kiên',
            TenKhachHang: 'John Cena',
            Thietbi: 'Máy Jura Impressa A5',
            TienDo: '50%',
            TieuDe: 'Bảo trì máy pha cà phê',
            MoTa: 'bcd',
        },
        {
            MaBaoTri: 5,
            TenNhanVien: 'Lê Văn Luyện',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Jura Impressa A8',
            TienDo: '50%',
            TieuDe: 'Sửa chữa máy cà phê',
            MoTa: 'Cà phê chảy ra quá nhiều, dẫn đến bị lỏng, uống không còn đậm đà',
        },
        {
            MaBaoTri: 6,
            TenNhanVien: 'Võ Thị Sáu',
            TenKhachHang: 'John Cena',
            Thietbi: 'Máy Jura Impressa S9',
            TienDo: '50%',
            TieuDe: 'Bảo trì máy pha cà phê',
            MoTa: 'Mo ta',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
    ]);

    return (
        <View style={[{ flex: 1 }, styles.container]}>
            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => {navigation?.navigate(routes.CLIENT.DETAILSCHEDULE)}}>
                        <View style={[styles.schedule_container]}>
                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Text style={styles.color_blue}>
                                    {item.MaBaoTri} - {item.TieuDe}
                                </Text>
                                <Text style={styles.color_gray}> giao cho </Text>
                                <Text style={styles.color_green}>{item.TenNhanVien}</Text>
                            </View>
                            <Text>{item.MoTa}</Text>
                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Text>Tên khách hàng: </Text>
                                <Text style={styles.color_orange}>{item.TenKhachHang}</Text>
                            </View>
                            <Text>{item.Thietbi}</Text>
                            <Text style={styles.color_blue}>Tiến độ: {item.TienDo}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    );
};

export default Schedule;
