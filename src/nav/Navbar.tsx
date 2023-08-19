import {styled} from '@mui/system';
import NavLinks, {Link} from "./NavLinks.tsx";
import NavTitle from "./NavTitle.tsx";
import {useHomeScroll} from "../contexts/ScrollProvider.tsx";

const padding = '1rem';

const NavContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${padding};
  position: fixed;
  width: calc(100%);
  z-index: 10;
  background: transparent;
  transition: background 0.5s ease-in-out;

  &.scrolledNavbar {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

const links: Link[] = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
];

const Navbar = () => {

    const { scroll} = useHomeScroll();

    return (
        <NavContainer className={scroll > 0 ? 'scrolledNavbar' : undefined}>
            <NavTitle/>
            <NavLinks links={links}/>
        </NavContainer>
    )
}

export default Navbar;
