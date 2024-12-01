import { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export const DropdownMenu = ({ menuItems = [], menuTitle = 'Menu' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={ dropdownRef }>
      <button className="dropdown__toggle" onClick={ toggleDropdown }>
        {menuTitle}
      </button>
      { isOpen && menuItems.length > 0 && (
        <ul className="dropdown__menu">
          { menuItems.map((item, index) => (
            <li className="dropdown__item" key={ index }>
              <a href={ item.href } onClick={ toggleDropdown }>
                { item.label }
              </a>
            </li>
          )) }
        </ul>
      ) }
    </div>
  );
};
