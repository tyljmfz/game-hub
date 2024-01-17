import { HStack, Image, Text } from "@chakra-ui/react";
import toast from "../assets/toast.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={toast} boxSize="60px" />
      <Text>Toast</Text>
    </HStack>
  );
};

export default NavBar;
