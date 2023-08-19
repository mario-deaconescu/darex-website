import React, {ReactNode} from "react";

const name = 'DareX';

const NameContext = React.createContext<string>(name);

export const useName = () => React.useContext(NameContext);

type Props = {
    children?: ReactNode;
}

const NameProvider = ({children}: Props) => {

    return (
        <NameContext.Provider value={name}>
            {children}
        </NameContext.Provider>
    )
}

export default NameProvider
