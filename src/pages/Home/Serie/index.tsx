// import { AiOutlineArrowLeft } from "@react-icons/all-files/Ai/AiOutlineArrowLeft";
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
  Select,
  Checkbox,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import "../home.css";

interface Data {
  image: string;
  caption: string;
}

interface MainSerieProps {
  pageSerie: (value: boolean) => void;
  serieId: string;
  seriePhoto: string;
}

export const Serie: React.FC<MainSerieProps> = ({
  pageSerie,
  serieId,
  seriePhoto,
}: MainSerieProps): React.ReactElement => {
  const axios = require("axios");
  const [account, setAccount] = useState<Data[]>([]);
  const [OrderBy, setOrderBy] = useState<string>("DESC");
  const [serie, setSerie] = useState<string>(serieId ? serieId : "");
  const [serieFoto, setSerieFoto] = useState<string>(
    seriePhoto ? seriePhoto : ""
  );


  const [nomeEpisodio, setnomeEpisodio] = useState<string>('');
  const [notaEpisodio, setnotaEpisodio] = useState<string>('');
  const [dataEstreiaEpisodio, setdataEstreiaEpisodio] = useState<string>('');
  const [numeroEpisodio, setnumero_episodio] = useState<string>('');
  const [nomeTemporada, setnomeTemporada] = useState<string>('');
  const [numeroTemporada, setnumeroTemporada] = useState<string>('');
  const [nomeEpisodioField, setnomeEpisodioField] = useState<boolean>(false);
  const [dataEstreiaEpisodioField,  setdataEstreiaEpisodioField] = useState<boolean>(false);
  const [notaEpisodioField,  setnotaEpisodioField] = useState<boolean>(false);
  const [numeroEpisodioField,  setnumeroEpisodioField] = useState<boolean>(false);
  const [nomesTemporadasField,  setnomesTemporadasField] = useState<boolean>(false);
  const [numeroTemporadasField,  setnumeroTemporadasField] = useState<boolean>(false);
  const [descricaoEpisodioField,  setdescricaoEpisodioField] = useState<boolean>(false);



  function Teste() {
    axios.get("http://localhost:4003/pessoas").then((response) => {
      console.log(response.data);
    });
  }

  function Buscar(event: FormEvent) {
    Teste();
    event.preventDefault();
    setAccount([
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
    ]);
  }

  return (
    <Box className="">
      <Box width="100%" bgColor="lightgrey" pl="20px" py="20px">
        <Button
          border="none"
          backgroundColor="inherit"
          onClick={() => {
            pageSerie(false);
          }}
        >
          <Text color="orange">
            {/* <AiOutlineArrowLeft /> */}
            Voltar
          </Text>
        </Button>
      </Box>
      <div style={{ textAlign: "center" }}>
        <Image
          borderRadius="0px 0px 20px 20px"
          height="400px"
          src={serieFoto}
          alt="Dan Abramov"
          width="100%"
          objectFit="cover"
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
          <GridItem colSpan={6}>
            <Box mx="2em">
              <Heading mb="10px">{serie}</Heading>

              <Box width="100%">Pesquisar Episodios</Box>
              <Heading mt="20px" mb="10px" size="lg">
                Filtros
              </Heading>
              <Divider orientation="horizontal" />
              <br></br>
              <Box display="flex" alignItems="center" width="100%">
                <form className="form" onSubmit={Buscar}>
                  {/* <InputGroup> */}
                  <Input
                    type="text"
                    placeholder="Nome do episodio"
                    height="60px"
                    value={nomeEpisodio}
                    onChange={(event) => {
                      setnomeEpisodio(event.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="Nota"
                    height="60px"
                    value={notaEpisodio}
                    onChange={(event) => {
                      setnotaEpisodio(event.target.value);
                    }}
                  />
                  <Input
                    type="date"
                    placeholder="Data Estreia"
                    height="60px"
                    value={dataEstreiaEpisodio}
                    onChange={(event) => {
                      setdataEstreiaEpisodio(event.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="numero do episodio"
                    height="60px"
                    value={numeroEpisodio}
                    onChange={(event) => {
                      setnumero_episodio(event.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="Nome da temporada"
                    height="60px"
                    value={nomeTemporada}
                    onChange={(event) => {
                      setnomeTemporada(event.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="Numero da temporada"
                    height="60px"
                    value={numeroTemporada}
                    onChange={(event) => {
                      setnumeroTemporada(event.target.value);
                    }}
                  />
                  <Heading mt="30px" mb="10px" size="lg">
                    Campos
                  </Heading>
                  <Divider orientation="horizontal" mb="20px" />
                  <Checkbox
                    className="Checkbox"
                    size="md"
                    colorScheme="orange"
                    onChange={(e) => setnomeEpisodioField(e.target.checked)}
                  >
                    Nome do episodio
                  </Checkbox>
                  <Checkbox
                    className="Checkbox"
                    size="md"
                    colorScheme="orange"
                    onChange={(e) => setdescricaoEpisodioField(e.target.checked)}
                  >
                    Descricao
                  </Checkbox>
                  <Checkbox className="Checkbox" size="md" colorScheme="orange"  onChange={(e) => setnotaEpisodioField(e.target.checked)}>
                    Nota
                  </Checkbox>
                  <Checkbox className="Checkbox" size="md" colorScheme="orange"  onChange={(e) => setdataEstreiaEpisodioField(e.target.checked)}>
                    data estreia
                  </Checkbox>
                  <Checkbox className="Checkbox" size="md" colorScheme="orange"  onChange={(e) => setnumeroEpisodioField(e.target.checked)}>
                    numero do episodio
                  </Checkbox>
                  <Checkbox className="Checkbox" size="md" colorScheme="orange"  onChange={(e) => setnomesTemporadasField(e.target.checked)}>
                    Nome das temporadas
                  </Checkbox>
                  <Checkbox className="Checkbox" size="md" colorScheme="orange"  onChange={(e) => setnumeroTemporadasField(e.target.checked)}>
                    numero da temporadas
                  </Checkbox>
                  <Checkbox className="Checkbox" size="md" colorScheme="orange">
                    foto
                  </Checkbox>
                  <Box width="100%" mt="60px">
                    <Button
                      width="100%"
                      colorScheme="orange"
                      type="submit"
                      value="submit"
                      id="Button"
                    >
                      Pesquisar
                    </Button>
                  </Box>
                </form>
              </Box>

              <Box p={3} mt={3}>
                <Table bg="whitesmoke" variant="simple">
                  <Thead bg="lightgrey">
                    <Tr>
                      <Th>Conta</Th>
                      <Th>Metodos</Th>
                      <Th>
                        <Text textAlign="center">Ações</Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {account.map((elem: Data, i: number) => {
                      return (
                        <Tr key={i}>
                          <Td>{elem.image}</Td>
                          <Td>{elem.caption}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
