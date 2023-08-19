import MainDisplay from "./main/MainDisplay.tsx";
import SecondaryDisplay from "./secondary/SecondaryDisplay.tsx";
import {styled} from "@mui/system";
import {useHomeScroll} from "../contexts/ScrollProvider.tsx";
import TertiaryDisplay from "./tertiary/TertiaryDisplay.tsx";

const Scroller = styled("div")`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const Home = () => {

    const {setScroll} = useHomeScroll();

    const setScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScroll(e.currentTarget.scrollTop);
    }

    return (
        <Scroller onScroll={setScrollHandler}>
            <MainDisplay/>
            <SecondaryDisplay/>
            <TertiaryDisplay/>
        </Scroller>
    )
}

export default Home
