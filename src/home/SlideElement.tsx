import {ReactNode} from "react";
import {styled} from "@mui/system";

type Props = {
    background: ReactNode,
    children?: ReactNode
}

const Slide =  styled("section")`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  scroll-snap-align: start;
`;

const SlideElement = ({background, children} : Props) => {
    return (
        <Slide>
            {background}
            {children}
        </Slide>
    );
};

export default SlideElement;
