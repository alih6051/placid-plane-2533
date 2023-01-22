import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

const NavbarIcon = () => {
  return (
    <Flex alignItems="center">
      <Link href="/">
        <Image src={logo.src} alt="" w={10} rounded="md" />
      </Link>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="none"
          fontSize="sm"
        >
          SHOP
        </MenuButton>
        <MenuList
          bg="red"
          rounded="0"
          py="0"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          fontSize="sm"
        >
          <MenuItem>Fruits & Vegetables</MenuItem>
          <MenuItem>Foodgrains, Oil & Masala</MenuItem>
          <MenuItem>Eggs, Meat & Fish</MenuItem>
          <MenuItem>Bakery, Cakes & Dairy</MenuItem>
          <MenuItem>Beverages</MenuItem>
          <MenuItem>Snacks & Branded Foods</MenuItem>
          <MenuItem>Beauty & Hygiene</MenuItem>
          <MenuItem>Kitchen, Garden & Pets</MenuItem>
          <MenuItem>Baby Care</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarIcon;