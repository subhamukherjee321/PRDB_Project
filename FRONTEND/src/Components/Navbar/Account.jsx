import { ColorContext } from "@/Context/ColorContext";
import React, { useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { MdOutlineManageAccounts } from "@chakra-ui/icons";

const Account = () => {
  const { colors } = useContext(ColorContext);
  return (
    <Flex
      align={"center"}
      gap={2}
      cursor={"pointer"}
      _hover={{ color: colors.primary }}
    >
      <MdOutlineManageAccounts fontSize={"1.2rem"} fontWeight={600} />
      <Text>Account</Text>
    </Flex>
  );
};

export default Account;
