import { HStack, Image, Text } from "@chakra-ui/react";
import toast from "../assets/toast.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={toast} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
