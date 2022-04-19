import React, { useEffect } from 'react';
import { Text, LogBox } from 'react-native';

import { useTrans } from '@utils/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';
import { setNavbarMenu, setNavbarSubmit } from '@redux/actions';
import Button from '@components/commons/Button';

const Schedule: IScheduleScreen<IScheduleScreenProps> = () => {
    const trans = useTrans();
    return <Button text="Open drawer" />;
};

export default Schedule;
