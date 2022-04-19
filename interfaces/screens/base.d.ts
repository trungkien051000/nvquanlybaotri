interface IBaseScreenProps {
    children?: React.ReactNode;
    navigation?: {
        navigate: (routeName: string) => void;
        goBack: () => void;
        openDrawer: () => void;
    };
}

interface IBaseScreen<P> extends React.FC<P> {
    defaultProps?: Partial<P>;
}
