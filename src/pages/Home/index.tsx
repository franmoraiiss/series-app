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
  InputGroup,
  InputRightElement,
  Input,
  Tabs,
  TabList,
  Divider,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import "../Home/home.css";
export const Home = () => {
  const [aux, setAux] =useState("Button1");
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
          <GridItem colSpan={4} bg="lightgrey" minHeight="300px">
            <Heading>Dashboard</Heading>
          </GridItem>

          <GridItem rowSpan={2} colSpan={1}>
            <Heading size="md">Ultimos Lançamentos</Heading>

            <Grid
              h="100px"
              marginTop="10px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              alignItems="center"
              bg="lightgrey"
              borderRadius="10px"
            >
              <GridItem colSpan={2}>
                <Image
                  margin="0 auto"
                  borderRadius="10px"
                  boxSize="70px"
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
              bg="lightgrey"
              borderRadius="10px"
            >
              <GridItem colSpan={2}>
                <Image
                  margin="0 auto"
                  borderRadius="10px"
                  boxSize="70px"
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

          <GridItem colSpan={4}>
            <Box mx="2em">
              <Heading mb="10px">Ad-Hoc</Heading>
              <Tabs>
                <TabList border="none !important">
                  <Tab
                    _focus={{
                      boxShadow: "0 0 0 0",
                      outline: "0",
                    }}
                    // _selected={() => setAux(false) }
                    border="none !important"
                  >
                    <Button
                      colorScheme="teal"
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        // setAux("Button1");
                      }}
                    >
                      Button 1
                    </Button>
                  </Tab>
                  <Tab
                    fontSize="18px"
                    fontWeight="500"
                    color="black"
                    _focus={{
                      boxShadow: "0 0 0 0",
                      outline: "0",
                    }}
                    _selected={{
                      color: "#38a169",
                      borderBlockEnd: "2px solid #38a169",
                    }}
                    border="none !important"
                  >
                    <Button
                      colorScheme="teal"
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        setAux("Button2");
                      }}
                    >
                      Button 2
                    </Button>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel px="0">
                    <Box display="flex" alignItems="center" width="100%">
                      <form className="form">
                        <InputGroup>
                          <Input
                            width="100%"
                            type="tel"
                            placeholder="Pesquisar Series"
                            height="60px"
                          />
                        </InputGroup>
                      </form>
                    </Box>
                  </TabPanel>
                  <TabPanel px="0">
                    <Box display="flex" alignItems="center" width="100%">
                      <form className="form">
                        <InputGroup>
                          <Input
                            width="100%"
                            type="tel"
                            placeholder="Pesquisar Ator"
                            height="60px"
                          />
                        </InputGroup>
                      </form>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Box bg="lightgrey" p={3} mt={3}>
                <Grid
                  minHeight="300px"
                  marginTop="20px"
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(10, 1fr)"
                  alignItems="center"
                  borderRadius="10px"
                >
                  <GridItem colSpan={3}>
                    <Image
                      margin="0 auto"
                      borderRadius="10px"
                      boxSize="100%"
                      px="5px"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </GridItem>
                  <GridItem colSpan={5} height="100%" px="10px">
                    <Heading as="h5" size="md">
                      Notting Hill
                    </Heading>
                    <Text fontSize="xs">Premiere in</Text>
                    <Text fontSize="sm">20 April 2020</Text>
                  </GridItem>
                  <GridItem colSpan={2} height="100%" px="10px">
                    <Text fontSize="xs">Premiere in</Text>
                  </GridItem>
                </Grid>

                <Grid
                  minHeight="300px"
                  marginTop="20px"
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(10, 1fr)"
                  alignItems="center"
                  borderRadius="10px"
                >
                  <GridItem colSpan={3}>
                    <Image
                      margin="0 auto"
                      borderRadius="10px"
                      boxSize="100%"
                      px="5px"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </GridItem>
                  <GridItem colSpan={5} height="100%" px="10px">
                    <Heading as="h5" size="md">
                      Notting Hill
                    </Heading>
                    <Text fontSize="xs">Premiere in</Text>
                    <Text fontSize="sm">20 April 2020</Text>
                  </GridItem>
                  <GridItem colSpan={2} height="100%" px="10px">
                    <Text fontSize="xs">Premiere in</Text>
                  </GridItem>
                </Grid>

                <Grid
                  minHeight="300px"
                  marginTop="20px"
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(10, 1fr)"
                  alignItems="center"
                  borderRadius="10px"
                >
                  <GridItem colSpan={3}>
                    <Image
                      margin="0 auto"
                      borderRadius="10px"
                      boxSize="100%"
                      px="5px"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </GridItem>
                  <GridItem colSpan={5} height="100%" px="10px">
                    <Heading as="h5" size="md">
                      Notting Hill
                    </Heading>
                    <Text fontSize="xs">Premiere in</Text>
                    <Text fontSize="sm">20 April 2020</Text>
                  </GridItem>
                  <GridItem colSpan={2} height="100%" px="10px">
                    <Text fontSize="xs">Premiere in</Text>
                  </GridItem>
                </Grid>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
