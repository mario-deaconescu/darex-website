import SlideElement from "../SlideElement.tsx";
import SecondaryBackground from "./SecondaryBackground.tsx";
import {styled} from "@mui/system";
import {Typography} from "@mui/joy";
import {useName} from "../../contexts/NameProvider.tsx";
import {useMediaQuery} from "@react-hook/media-query";
import MainPhoneDisplay from "../main/MainPhoneDisplay.tsx";

const InfoContainer = styled("div")`
  max-width: 38rem;
  min-width: 0;
  flex-shrink: 1;
`;

const CenterContainer = styled("div")`
  height: 60vh;
  display: flex;
  align-items: center;
  max-width: calc(100% - 2rem);
  gap: 2rem;
  padding: 1rem;
`;

const LeftContainer = styled("div")`
  flex-grow: 0;
  height: 100%;
  position: relative;
`;

const SecondaryDisplay = () => {

    const appName = useName();
    const isNarrow = useMediaQuery('only screen and (max-width: 1000px)');

    const title = <Typography level="h1" sx={{marginBottom: '1rem'}}> 🌟 Challenge Your Friends </Typography>

    const bodyParagraph = <Typography level="body-lg" className="text-justify">
        What's life without a little friendly competition? {appName} allows you to challenge your friends to take on
        dares, adding an extra layer of excitement to your interactions. Watch as your social circle transforms into a
        dynamic arena of playful dares and hilarious accomplishments.
    </Typography>

    return (
        <SlideElement background={<SecondaryBackground/>}>
            <CenterContainer>
                {!isNarrow &&
                    <LeftContainer>
                        <MainPhoneDisplay/>
                    </LeftContainer>
                }
                <InfoContainer>
                    {title}
                    {bodyParagraph}
                </InfoContainer>
            </CenterContainer>
        </SlideElement>
    );
};

export default SecondaryDisplay;
