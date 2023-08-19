import {styled} from "@mui/system";
import {Button} from "@mui/joy";

export type Link = {
    name: string,
    url: string,
}

type Props = {
    links: Link[],
}

const NavLink = styled(Button)`
  color: white;
  background-color: transparent;
  transition: background-color 0.1s ease-in-out;
  font-size: 1rem;

  &:hover {
    background-color: var(--accent-color);
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledLinkList = styled("ul")`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  gap: .5rem;
`;

const NavLinks = ({links}: Props) => <StyledLinkList>
    {links.map((link, index) => (
        <li key={index}>
            <NavLink size="md" variant="plain">
                <a href={link.url}>
                    {link.name}
                </a>
            </NavLink>
        </li>
    ))}
</StyledLinkList>

export default NavLinks;
