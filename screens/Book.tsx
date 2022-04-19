import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Book: IBookScreen<IBookScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.book.title}</Text>;
};

export default Book;
