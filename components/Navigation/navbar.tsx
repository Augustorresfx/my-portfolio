import React from 'react'
import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from "./navbar.module.css";
const Links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Sobre mí",
    path: "#about-me",
  },
  {
    name: "Habilidades",
    path: "#skills",
  },
  {
    name: "Tecnologías",
    path: "#technologies",
  },
  {
    name: "Portfolio",
    path: "#Portfolio",
  },
  {
    name: "Contáctame",
    path: "#contact-me",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={navStyles.mobileNav}>
      <Box zIndex={1} minW={'398px'} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex zIndex={1} h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton zIndex={1}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
          <Image zIndex={1} margin={6} width={12} height={12} borderRadius={1} src="https://i.postimg.cc/527D4n1f/at.png" alt="Logo de Augusto!" />
            <Box fontSize={'larger'} fontWeight={'black'}></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <HStack justifyContent={'space-between'} >
                <NavLink path={path}>
                  {name}
                </NavLink>
                </HStack>
              ))}
            </HStack>
            <ColorModeSwitcher />
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
              
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <VStack>
                <NavLink path={path}>
                  {name}
                </NavLink>
                </VStack>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}
