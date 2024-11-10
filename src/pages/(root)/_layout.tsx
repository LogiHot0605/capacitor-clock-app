import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Flex
        minWidth={"100vw"}
        minHeight={"100vh"}
        padding={"5"}
        bgColor={"teal"}
      >
        <Flex
          minWidth={"100%"}
          minHeight={"100%"}
          bgColor={"white"}
          rounded={"xl"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
        >
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
}
