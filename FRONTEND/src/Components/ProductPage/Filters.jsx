import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  ListItem,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";

const Filters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);

  return (
    <>
      <Flex align={"center"}>
        <Button
          ref={btnRef}
          onClick={onOpen}
          leftIcon={<BiFilter style={{ fontSize: "1.6rem" }} />}
          bg={"transparent"}
          _active={{ border: "1px solid black" }}
          _hover={{ bg: "transparent" }}
        >
          Show Filters
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} fontSize={"1.3rem"} fontWeight={"bold"}>All Filters</DrawerHeader>

          <DrawerBody>
            <UnorderedList listStyleType={"none"}>
              <ListItem fontSize={"1.1rem"} fontWeight={500}>Categories</ListItem>
              <UnorderedList listStyleType={"none"}>
                <ListItem>
                  <Checkbox>Wireless</Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox>With Wired</Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox>Airpods</Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox>Gaming</Checkbox>
                </ListItem>
              </UnorderedList>
            </UnorderedList> <br />

            <UnorderedList listStyleType={"none"}>
              <ListItem fontSize={"1.1rem"} fontWeight={500}>Brand</ListItem>
              <UnorderedList listStyleType={"none"}>
                <ListItem><Checkbox>Boat</Checkbox></ListItem>
                <ListItem><Checkbox>Realme</Checkbox></ListItem>
                <ListItem><Checkbox>Apple</Checkbox></ListItem>
                <ListItem><Checkbox>JBL</Checkbox></ListItem>
                <ListItem><Checkbox>Cosmic Byte</Checkbox></ListItem>
                <ListItem><Checkbox>Sony</Checkbox></ListItem>
              </UnorderedList>
            </UnorderedList> <br/>

            <Heading fontSize={"1.1rem"} textAlign={"center"}>Price</Heading>
            <Box w="70%" margin={"auto"} mt="10px">
              <Box gap={"10px"} display={"flex"}>
                <Input border={"1px solid"} type="number" value={min} onChange={(e)=> (setMin(e.target.value))}  />
                <Input border={"1px solid"} type="number" value={max} onChange={(e)=> (setMax(e.target.value))} />
              </Box>
              <Box>
                <RangeSlider onChange={(val) =>(
                  setMin(val[0]),
                  setMax(val[1])
                )}
                  aria-label={["min", "max"]}
                  defaultValue={[min, max]}
                  max="3000"
                >
                  <RangeSliderTrack bg='red.400'>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb bg={"red"} index={0} />
                  <RangeSliderThumb bg={"red"} index={1} />
                </RangeSlider>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Filters;
