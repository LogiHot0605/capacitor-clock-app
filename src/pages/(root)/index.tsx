import { CapacitorClock } from "@/components/capacitor-clock/CapacitorClock";
import { useCapacitorClock } from "@/hooks/useCapacitorClock";
import { Flex } from "@chakra-ui/react";

export default function RootIndex() {
  const { value } = useCapacitorClock();
  return (
    <>
      <Flex height={"fit-content"}>
        <CapacitorClock size={"80vw"} value={value} />
      </Flex>
    </>
  );
}
