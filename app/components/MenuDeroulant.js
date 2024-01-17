import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack, faPenToSquare, faTrashCan, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const MenuDeroulant = () => {
  return (
    <>
        <Menu>
            <MenuButton
                className='menubtn'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                colorScheme='orange'
            />
            <MenuList>
                <MenuItem icon={<FontAwesomeIcon color='grey' icon={faThumbTack} rotation={25} />}>
                Épingler
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon color='grey' icon={faPenToSquare} />}>
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
    </>
  )
}

export default MenuDeroulant