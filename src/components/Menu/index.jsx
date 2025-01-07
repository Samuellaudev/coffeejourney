import { DropdownMenu } from "../DropdownMenu";
import { useAtom } from "jotai";
import { scrollAtom } from "../../config/scrollAtom";
import './Menu.css'

const menuItems = {
  before: [
    { href: "#webDeveloper", label: "Web Developer" },
    { href: "#flyToUk", label: "Flight To UK" },
    { href: "#jobless", label: "Employment Break" },
  ],
  during: [
    { href: "#wellGrounded", label: "Well Grounded" },
    { href: "#essentials", label: "Essentials" },
    { href: "#master", label: "Master" },
    { href: "#skills", label: "Skills" },
  ],
  after: [
    { href: "#workPlacement", label: "Work Placement" },
    { href: "#thankYou", label: "Thank You" }
  ],
}

export const Menu = () => {
  const [scrollPosition] = useAtom(scrollAtom);

  return (
    <div className="menu">
      <img className="menu__logo" src="logo.png" alt="logo" />
      <div className='menu__items'>
        <div className={ `fade-in ${ scrollPosition >= 0.01 ? 'active' : '' }` }>
          <DropdownMenu menuItems={ menuItems.before } menuTitle="Before" />
        </div>
        <div className={ `fade-in ${ scrollPosition >= 0.35 ? 'active' : '' }` }>
          <DropdownMenu menuItems={ menuItems.during } menuTitle="During" />
        </div>
        <div className={ `fade-in ${ scrollPosition >= 0.85 ? 'active' : '' }` }>
          <DropdownMenu menuItems={ menuItems.after } menuTitle="After" />
        </div>
      </div>
    </div>
  );
};
