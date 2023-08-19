import {styled} from "@mui/system";

const BackgroundImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  background-color: #1c1c1c;
`;

export default BackgroundImage;
