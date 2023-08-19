import SlideElement from "../SlideElement.tsx";
import TertiaryBackground from "./TertiaryBackground.tsx";
import {styled} from "@mui/system";
import {Typography} from "@mui/joy";
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

const TertiaryDisplay = () => {

    const isNarrow = useMediaQuery('only screen and (max-width: 1000px)');

    const title = <Typography level="h1" sx={{marginBottom: '1rem'}}> 💡 Create Your Own Dares </Typography>

    const bodyParagraph = <Typography level="body-lg" className="text-justify">
        The fun doesn't stop at completing dares – you can also unleash your creativity by crafting your own unique challenges! Design dares that will leave your friends laughing, gasping, and eager to prove their mettle.
    </Typography>

    return (
        <SlideElement background={<TertiaryBackground/>}>
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

export default TertiaryDisplay;
