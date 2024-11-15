import { Flex, Text } from "@chakra-ui/react";

function DigitalClock(props: { value: Date }) {
  return (
    <>
      <Flex justifyContent={"center"} textAlign={"center"} direction={"column"}>
        <Text
          fontSize={"3xl"}
          marginTop={"10"}
          color={"teal"}
        >{`${props.value.getFullYear()}/${(props.value.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${props.value
          .getDate()
          .toString()
          .padStart(2, "0")}`}</Text>
        <Text fontSize={"6xl"} marginTop={""} color={"teal"}>{`${props.value
          .getHours()
          .toString()
          .padStart(2, "0")}:${props.value
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${props.value
          .getSeconds()
          .toString()
          .padStart(2, "0")}`}</Text>
      </Flex>
    </>
  );
}

export { DigitalClock };
