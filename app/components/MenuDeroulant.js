import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'

const MenuDeroulant = () => {
  return (
    <>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='ghost'
            />
            <MenuList>
                <MenuItem icon={<AddIcon />}>
                Épingler
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>
                Renommer
                </MenuItem>
                <MenuItem icon={<RepeatIcon />}>
                Supprimer
                </MenuItem>
                <MenuItem icon={<EditIcon />}>
                Partager...
                </MenuItem>
            </MenuList>
        </Menu>
    </>
  )
}

export default MenuDeroulant