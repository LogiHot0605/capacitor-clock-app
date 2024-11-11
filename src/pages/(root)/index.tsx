import { CapacitorClock } from "@/components/capacitor-clock/CapacitorClock";
import { DigitalClock } from "@/components/DigitalClock";
import { Button } from "@/components/ui/button";
import { useCapacitorClock } from "@/hooks/useCapacitorClock";
import { useNoSleep } from "@/hooks/useNoSleep";
// import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function RootIndex() {
  const { value } = useCapacitorClock();
  const { flag, handler } = useNoSleep();
  return (
    <>
      <Flex height={"fit-content"}>
        <Box width={"fit-content"}>
          <CapacitorClock size={"80vw"} value={value} />
          <DigitalClock value={value} />
          <Flex
            marginTop={"10"}
            justifyContent={"center"}
            textAlign={"center"}
            direction={"column"}
          >
            <Button
              marginX={"20"}
              colorPalette={"teal"}
              onClick={() => {
                handler();
                // Vibrateも使える。
                window.navigator.vibrate([70, 100, 70, 100]);
                // Hapticsプラグインも使える。
                // Haptics.impact({ style: ImpactStyle.Heavy });
              }}
            >
              <Box
                rounded={"full"}
                width={"2"}
                height={"2"}
                bgColor={flag ? "yellow" : "gray.100"}
                boxShadow={
                  flag
                    ? "0 0 10px #ffc, 0 0 20px #ffc, 0 0 30px #ff9, 0 0 40px #ff6, 0 0 70px #fc6, 0 0 80px #f99, 0 0 100px #ff96, 0 0 150px #ff96"
                    : ""
                }
              />
              <Text>No Sleep</Text>
              <Box
                rounded={"full"}
                width={"2"}
                height={"2"}
                bgColor={flag ? "yellow" : "gray.100"}
                boxShadow={
                  flag
                    ? "0 0 10px #ffc, 0 0 20px #ffc, 0 0 30px #ff9, 0 0 40px #ff6, 0 0 70px #fc6, 0 0 80px #f99, 0 0 100px #ff96, 0 0 150px #ff96"
                    : ""
                }
              />
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
