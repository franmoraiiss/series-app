import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Center,
  Button,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Carousel } from "react-carousel-minimal";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// function App() {
export const Home = () => {
  // useEffect(() => {
  //   const element = document.querySelector("#container");

  //   if(element){
  //     element.addEventListener('wheel', (event) => {
  //       event.preventDefault();

  //       element.scrollBy({
  //         left: event.deltaY < 0 ? -30 : 30,

  //       });
  //     })
  //   }
  // }, []);

  // });
  const data = [
    {
      image:
        "https://images.hdqwalls.com/wallpapers/wonder-woman-1984-movie-year-7a.jpg",
      caption: "Wonder Woman 1984",
    },
    {
      image:
        "https://www.blogs.unicamp.br/ciencianerd/wp-content/uploads/sites/113/2019/07/homem-aranha-wallpaper.jpg",
      caption: "Homem Aranha 1",
    },
    {
      image:
        "https://images.hdqwalls.com/wallpapers/wonder-woman-1984-movie-year-7a.jpg",
      caption: "Wonder Woman 1984",
    },
    {
      image:
        "https://www.blogs.unicamp.br/ciencianerd/wp-content/uploads/sites/113/2019/07/homem-aranha-wallpaper.jpg",
      caption: "Homem Aranha 1",
    },
    {
      image:
        "https://images.hdqwalls.com/wallpapers/wonder-woman-1984-movie-year-7a.jpg",
      caption: "Wonder Woman 1984",
    },
    {
      image:
        "https://www.blogs.unicamp.br/ciencianerd/wp-content/uploads/sites/113/2019/07/homem-aranha-wallpaper.jpg",
      caption: "Homem Aranha 1",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <Box className="">
      <div style={{ textAlign: "center" }}>
        <Carousel
          data={data}
          time={4000}
          width="100%"
          height="400px"
          captionStyle={captionStyle}
          radius="0px 0px 20px 20px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          style={{
            textAlign: "center",
            maxHeight: "500px",
          }}
        />
      </div>
      <Box margin="0 auto" padding={"0 3rem"}>
        <Grid
          h="600px"
          marginTop="20px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem colSpan={4} bg="lightgrey">
            <Heading>Dashboard</Heading>
          </GridItem>

          <GridItem rowSpan={2} colSpan={1} bg="lightgrey">
            <Heading as="h4" size="md">
              Ultimos Lançamentos
            </Heading>

            <Grid
              h="100px"
              marginTop="10px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              alignItems="center"
              bg="grey"
              borderRadius="10px"
            >
              <GridItem colSpan={2}>
                <Image
                  margin="0 auto"
                  borderRadius="10px"
                  boxSize="50px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading as="h5" size="md">
                  Notting Hill
                </Heading>
                <Text fontSize="xs">Premiere in</Text>
                <Text fontSize="sm">20 April 2020</Text>
              </GridItem>
            </Grid>

            <Grid
              h="100px"
              marginTop="10px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              alignItems="center"
              bg="grey"
              borderRadius="10px"
            >
              <GridItem colSpan={2}>
                <Image
                  margin="0 auto"
                  borderRadius="10px"
                  boxSize="50px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Heading as="h5" size="md">
                  Notting Hill
                </Heading>
                <Text fontSize="xs">Premiere in</Text>
                <Text fontSize="sm">20 April 2020</Text>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem colSpan={4} bg="lightgrey">
            <Heading>Ad-Hoc</Heading>

            <Box
              mt="1rem"
              align={"center"}
              justify={"center"}
              direction={"row"}
            >
              <Wrap mt="1rem" justify="center">
                <Stack spacing={4} direction="row" align="space-between">
                  <Button colorScheme="teal" size="lg" variant='outline'>
                    Button
                  </Button>
                  <Button colorScheme="teal" size="lg" variant='outline'>
                    Button
                  </Button>
                  <Button colorScheme="teal" size="lg" variant='outline'>
                    Button
                  </Button>
                  <Button colorScheme="teal" size="lg" variant='outline'>
                    Button
                  </Button>
                </Stack>
              </Wrap>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
