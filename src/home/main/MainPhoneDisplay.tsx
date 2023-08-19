import {isSafari} from "react-device-detect";
import safariUrl from './phone-video.mp4';
import chromeUrl from './phone-video.webm';
import {styled} from "@mui/system";

const StyledVideo = styled("video")`
  height: 100%;
`;

const MainPhoneDisplay = () => {
    console.log(isSafari);
    return (
    <StyledVideo autoPlay={true} muted={true}>
        <source src={isSafari ? safariUrl : chromeUrl} type={isSafari ? 'video/mp4; codecs="hvc1"' : 'video/webm'}/>
    </StyledVideo>
    );
}


export default MainPhoneDisplay;
