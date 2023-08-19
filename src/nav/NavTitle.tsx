import {useName} from "../contexts/NameProvider.tsx";

const titleStyle = {
    margin: '0 auto 0 0',
    color: 'white',
}

const NavTitle = () => {
    const name = useName();
    return <h1 style={titleStyle}>{name}</h1>
}

export default NavTitle;
