import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import _ from "lodash";

const initState = {
  name: "",
  category: "",
  type: "",
  brand: "",
  description: "",
  price: "",
  discountPrice: "",
  discount: "",
  saveMoney: "",
  primaryImage: "",
  imageUrls: null,
};

export default function SimpleCard() {
  const [formData, setFormData] = useState(initState);
  const [color, setColor] = useState("");
  const [colorData, setColorData] = useState([]);

  const createImageArray = () => {
    setColorData((prev) => [...prev, { color: color, images: [] }]);
  };

  const setImages = (e) => {
    let updatedColorData = colorData.map((ele) => {
      return ele.color === e.target.name
        ? { ...ele, images: e.target.files }
        : ele;
    });

    setColorData(updatedColorData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // let val = e.target != file ? value : e.target.file
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    let uploadForm = new FormData();
    for (let key in formData) {
      uploadForm.append(key, formData[key]);
    }

    for (let eachColor of colorData) {
      _.forEach(eachColor.images, (file) => {
        file.colorName = eachColor.color;
        uploadForm.append("images", file)
      });
    }
    
    console.log(formData)
  };

  return (
    <Flex
      mt={"3rem"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Add Products</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name Of The Product</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </FormControl>
            <FormControl id="category">
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                name="category"
                onChange={handleChange}
                value={formData.category}
              />
            </FormControl>
            <FormControl id="type">
              <FormLabel>Type</FormLabel>
              <Input
                type="text"
                name="type"
                onChange={handleChange}
                value={formData.type}
              />
            </FormControl>
            <FormControl id="brand">
              <FormLabel>Brand</FormLabel>
              <Input
                type="text"
                name="brand"
                onChange={handleChange}
                value={formData.brand}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                onChange={handleChange}
                value={formData.price}
              />
            </FormControl>
            <FormControl id="discountPrice">
              <FormLabel>Discount Price</FormLabel>
              <Input
                type="number"
                name="discountPrice"
                onChange={handleChange}
                value={formData.discountPrice}
              />
            </FormControl>
            <FormControl id="discount">
              <FormLabel>Discount</FormLabel>
              <Input
                type="text"
                name="discount"
                onChange={handleChange}
                value={formData.discount}
              />
            </FormControl>
            <FormControl id="saveMoney">
              <FormLabel>Save Money</FormLabel>
              <Input
                type="text"
                name="saveMoney"
                onChange={handleChange}
                value={formData.saveMoney}
              />
            </FormControl>
            <FormControl id="primaryImage">
              <FormLabel>Primary Image</FormLabel>
              <Input
                type="file"
                name="primaryImage"
                onChange={handleChange}
                value={formData.primaryImage}
              />
            </FormControl>
            <FormControl id="color">
              <FormLabel>Color Name</FormLabel>
              <Input
                type="text"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
              <Button mt={"0.5rem"} size={"md"} onClick={createImageArray}>
                Add Image
              </Button>
            </FormControl>

            {colorData.map((item, i) => {
              return (
                <li key={i}>
                  <label>{item.color}</label>&nbsp;
                  <input
                    multiple
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={setImages}
                    name={item.color}
                  />
                </li>
              );
            })}

            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                ADD
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
