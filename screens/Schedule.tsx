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
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'John Cena',
            Thietbi: 'Máy Ascaso Basic 11',
            TienDo: '90%',
            TieuDe: 'Bảo trì vòi đánh sữa',
            MoTa: 'Vòi đánh sữa không hoạt động',
        },
        {
            MaBaoTri: 5,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Jura Impressa A8',
            TienDo: '50%',
            TieuDe: 'Sửa chữa máy cà phê',
            MoTa: 'Cà phê chảy ra quá nhiều, dẫn đến bị lỏng, uống không còn đậm đà',
        },
        {
            MaBaoTri: 6,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'John Cena',
            Thietbi: 'Máy Jura Impressa S9',
            TienDo: '50%',
            TieuDe: 'Bảo trì máy pha cà phê',
            MoTa: 'Mo ta',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 8,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Ngô Minh Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 11,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Tùng Sơn',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 15,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Phan Mạnh Quỳnh',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 17,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Hồ Quang Hiếu',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '30%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
    ]);

    return (
        <View style={[{ flex: 1 }, styles.container]}>
            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation?.navigate(routes.CLIENT.DETAILSCHEDULE);
                        }}
                    >
                        <View style={[styles.schedule_container]}>
                            <Text style={styles.color_blue}>
                                {item.MaBaoTri} - {item.TieuDe}
                            </Text>
                            <View style={[{ flexDirection: 'row' }]}>
                                <Text>Nhân viên: </Text>
                                <Text style={[styles.color_green, { flexShrink: 1 }]}>{item.TenNhanVien}</Text>
                            </View>
                            <Text>Mô tả: {item.MoTa}</Text>
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
