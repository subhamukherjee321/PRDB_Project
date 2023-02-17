import { ColorContext } from "@/Context/ColorContext";
import { Box, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react";
import { useContext } from "react";

const HomeProducts = ({ products }) => {
  const { colorStatus, colors } = useContext(ColorContext);

  return (
    <Box
      py={{
        base: "0rem",
        sm: "0rem",
        md: "4rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      }}
    >
      <Heading
        mb={"1rem"}
        as={"h3"}
        size="lg"
        pl={{
          base: "0rem",
          sm: "0rem",
          md: "4rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        }}
        py={"1.5rem"}
        textAlign={{ base: "center", sm: "center" }}
      >
        Hottest Audios
      </Heading>
      <Grid
        px={{
          base: "1.75rem",
          sm: "1.75rem",
          md: "4rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "4rem",
        }}
        templateRows={{
          base: "repeat(5, 1fr)",
          sm: "repeat(5, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
          "2xl": "repeat(2, 1fr)",
        }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
          xl: "repeat(5, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={4}
        pb={"1rem"}
      >
        <GridItem rowSpan={1} colSpan={2} borderRadius={"0.8rem"}>
          <Image
            borderRadius={"0.8rem"}
            alt={"ad"}
            src={
              "https://image01.realme.net/general/20220921/1663765243490.jpg.webp"
            }
            w={"100%"}
          />
        </GridItem>
        {products &&
          products.slice(0, 8).map((item) => (
            <GridItem
              key={item._id}
              p={"1rem"}
              colSpan={1}
              bg={colorStatus ? "#2D3748" : "white"}
              borderRadius={"0.8rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor="pointer"
            >
              <Box textAlign={"center"} overflow={"hidden"}>
                <Image
                  _hover={{
                    transform: "scale(1.05)",
                    transformOrigin: "center",
                  }}
                  src={item.images[0].image_urls[0]}
                  alt={item.name}
                  w={"100%"}
                />
              </Box>
              <Box fontWeight={"bold"}>{item.name}</Box>
              <Box fontWeight={"bold"} color={"#E6462E"}>
                ₹ {item.discountPrice}
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default HomeProducts;
