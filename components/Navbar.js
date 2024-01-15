import React, { useState } from "react";
import Drawing from "./Drawing";
import Logo from "./Logo";
import { Stack, Button, Link, Divider } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
    <header>
      <nav className={`nav`}>
        <Logo/>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        ></div>
        <div>
          <Stack
          spacing={6}
          align="center"
          justify={"flex-end"}
          direction={["column", "row", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}>
            <Link href="/">
              <Button variant='ghost' size="sm">Home</Button>
            </Link>
            <Link href="/about">
              <Button variant='ghost' size="sm">About Us</Button>
            </Link>
            <Link href="/contact">
              <Button variant='ghost' size="sm">Contact</Button>
            </Link>
            <Drawing/>
          </Stack>
        </div>
      </nav>
    </header>
    <Divider orientation='horizontal' />
    </>
  );
};

export default Navbar;