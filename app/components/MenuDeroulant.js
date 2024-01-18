import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faPenToSquare, faTrashCan, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

const MenuDeroulant = ({ onRenameClick }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        size='sm'
        icon={<HamburgerIcon />}
      />
      <MenuList>
        <MenuItem icon={<FontAwesomeIcon color='grey' icon={faThumbTack} />}>
          Épingler
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon color='grey' icon={faPenToSquare} />} onClick={onRenameClick}>
          Renommer
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon color='grey' icon={faTrashCan} />}>
          Supprimer
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon color='grey' icon={faShareFromSquare} />}>
          Partager...
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuDeroulant;
