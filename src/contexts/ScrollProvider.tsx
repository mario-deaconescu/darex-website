import {createContext, useContext, useState} from "react";

type Context = {
    scroll: number,
    setScroll: (scroll: number) => void
}

const ScrollContext = createContext<Context>({
    scroll: 0,
    setScroll: () => {
        console.error('setScroll not implemented');
    }
});

export const useHomeScroll = () => {
    return useContext(ScrollContext);
}

const ScrollProvider = ({children}: { children: React.ReactNode }) => {
    const [scroll, setScroll] = useState(0);
    return (
        <ScrollContext.Provider value={{
            scroll,
            setScroll
        }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
