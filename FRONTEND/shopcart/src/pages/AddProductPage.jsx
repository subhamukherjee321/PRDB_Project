import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import _ from "lodash";
import axios from "axios";

const initState = {
  name: "",
  quantity: 5,
  category: "",
  type: "",
  brand: "",
  description: "",
  price: "",
  discountPrice: "",
  discount: "",
  saveMoney: "",
  imageUrls: [],
};

export default function SimpleCard() {
  const [formData, setFormData] = useState(initState);
  const [color, setColor] = useState("");
  const [colorData, setColorData] = useState([]);
  const toast = useToast();
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
    setFormData({ ...formData, [name]: value });
  };

  const sendForm = async (data) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI4MTQyMjg5MTA3NmY4OWM0ZmY0MSIsImlhdCI6MTY3NjAzNzk5OCwiZXhwIjoxNjc2MDczOTk4fQ.IECBTDA_i_ccC0MqnnZjVU3MDut-8INNjTmly8ddpRU",
      },
    };
    const res = await axios.post(
      "http://localhost:8080/products/add",
      data,
      config
    );
    console.log(res);
  };

  const handleSubmit = () => {
    let {
      name,
      category,
      type,
      brand,
      description,
      price,
      discountPrice,
      discount,
      saveMoney,
      imageUrls,
    } = formData;

    if (
      !name ||
      !category ||
      !type ||
      !brand ||
      !description ||
      !price ||
      !discountPrice ||
      !discount ||
      !saveMoney ||
      !imageUrls
    ) {
      toast({
        title: "Fill all the Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      let uploadForm = new FormData();
      for (let key in formData) {
        uploadForm.append(key, formData[key]);
      }

      colorData.forEach(({ color, images }) => {
        _.forEach(images, (image) => {
          uploadForm.append(color, image);
        });
      });

      sendForm(uploadForm);
      setFormData(initState);
      setColor("");
      setColorData([]);
    }
  };

  const handleDelete = (id) => {
    let newData = colorData.filter((ele, i) => i !== id);
    setColorData(newData);
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
            <FormControl id="name">
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                name="quantity"
                onChange={handleChange}
                value={formData.quantity}
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
                <Flex justify={"space-between"}>
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
                  <Button color={"white"} size={"sm"} onClick={() => handleDelete(i)}>
                    <CloseIcon
                      fontSize={"0.7rem"}
                      fontWeight={800}
                      color={"red"}
                    />
                  </Button>
                </Flex>
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
