interface IBaseCompProps {
    children?: React.ReactNode;
    navigation?: {
        navigate: (routeName: string) => void;
        goBack: () => void;
    };
}

interface IBaseComp<P> extends React.FC<P> {
    defaultProps?: Partial<P>;
}
