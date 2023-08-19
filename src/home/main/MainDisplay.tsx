import MainBackground from "./MainBackground.tsx";
import {styled} from "@mui/system";
import MainPhoneDisplay from "./MainPhoneDisplay.tsx";
import {useName} from "../../contexts/NameProvider.tsx";
import AppStoreButton from "../../utility/app-store-button/AppStoreButton.tsx";
import PlayStoreButton from "../../utility/play-store-button/PlayStoreButton.tsx";
import {useMediaQuery} from "@react-hook/media-query";
import {Typography} from "@mui/joy";
import SlideElement from "../SlideElement.tsx";

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
  &:before {
    content: "";
    display: block;
    height: 100%;
    border-radius: 2.8rem;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    z-index: -1;
    transform: scale(0.92, 0.97);
    top: .6rem;
    left: .2rem;
    filter: blur(10px);
  }
`;

const MainDisplay = () => {
    const appName = useName();

    const isNarrow = useMediaQuery('only screen and (max-width: 1000px)');

    const title = <Typography level="h1" sx={{marginBottom: '1rem'}}> Ignite the Daredevil Within!</Typography>

    const bodyParagraph = <Typography level="body-lg" className="text-justify" sx={{marginBottom: '1rem'}}>
        Welcome to {appName} – where dares turn into points, challenges ignite streaks, and adventure is just a click
        away! Are you ready to elevate the fun, connect with friends, and embark on an exhilarating journey of daring
        feats?
    </Typography>

    return (
        <SlideElement background={<MainBackground/>}>
            <CenterContainer>
                {!isNarrow &&
                    <LeftContainer>
                        <MainPhoneDisplay/>
                    </LeftContainer>
                }
                <InfoContainer>
                    {title}
                    {bodyParagraph}
                    <div className='flex gap-2 items-center justify-start'>
                        <AppStoreButton/>
                        <PlayStoreButton/>
                    </div>
                </InfoContainer>
            </CenterContainer>
        </SlideElement>
    );
}

export default MainDisplay;
