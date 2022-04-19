import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import { Login, Schedule, Remind, Book, Setting } from '@screens/index';

import { routes, themes } from '@utils/constants';
import { useTrans } from '@utils/hooks';

const Drawer = createDrawerNavigator();
const RootApp = createStackNavigator();

const RouteApp: IRouteAppComponent<IRouteAppComponentProps> = ({ startScreen }) => {
    const trans = useTrans();
    const ScheduleDrawer = () => {
        return (
            <Drawer.Navigator
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: themes.COLOR.BLUE,
                }}
            >
                <Drawer.Screen name={trans.schedule.title} component={Schedule} />
                <Drawer.Screen name={trans.remind.title} component={Remind} />
                <Drawer.Screen name={trans.book.title} component={Book} />
                <Drawer.Screen name={trans.setting.title} component={Setting} />
            </Drawer.Navigator>
        );
    };

    return (
        <RootApp.Navigator
            initialRouteName={startScreen}
            screenOptions={{
                cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                    translateX: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                    };
                },
            }}
        >
            <RootApp.Screen
                name={routes.CLIENT.LOGIN}
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <RootApp.Screen
                name={routes.CLIENT.SETTING}
                component={Setting}
                options={{
                    headerShown: false,
                }}
            />

            <RootApp.Screen
                name={routes.CLIENT.SCHEDULE}
                component={ScheduleDrawer}
                options={{
                    headerShown: false,
                }}
            />
        </RootApp.Navigator>
    );
};

export default RouteApp;
