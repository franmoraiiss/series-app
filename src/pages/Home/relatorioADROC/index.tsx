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
import { FormEvent, useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import api from "../../../services/axios";
import "../home.css";

interface Data {
  image: string;
  caption: string;
}

interface MainSerieProps {
  pageSerie: (value: boolean) => void;
  serieId: (value: string) => void;
  seriePhoto: (value: string) => void;
}

interface Serie {
  id_series: number;
  nome: string;
  nota: number;
  pais_origem: string;
  imagem: string;
  em_producao: boolean;
  descricao: string;
  data_lancamento: string;
  temporadas?: any[];
}

const data_inicial = [
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

export const Home: React.FC<MainSerieProps> = ({
  pageSerie,
  serieId,
  seriePhoto,
}: MainSerieProps): React.ReactElement => {
  const [aux, setAux] = useState("Button1");
  const [account, setAccount] = useState<Data[]>([]);
  const [data, setData] = useState(data_inicial);

  const [take, setTake] = useState(100);

  const [nomeSerie, setnomeSerie] = useState<string>("");
  const [nomePersonagem, setnomePersonagem] = useState<string>("");
  const [nomeAtor, setnomeAtor] = useState<string>("");
  const [notaSerie, setnotaSerie] = useState<string>("");
  const [dataLancamentoSerie, setdataLancamentoSerie] = useState<string>("");
  const [paisOrigemSerie, setpaisOrigemSerie] = useState<string>("");
  const [criadorSerie, setcriadorSerie] = useState<string>("");
  const [numeroTemporadas, setnumeroTemporadas] = useState<string>("");
  const [produzindoSerie, setproduzindoSerie] = useState<boolean>(false);
  const [nomeSerieField, setnomeSerieField] = useState<boolean>(false);
  const [notaSerieField, setnotaSerieField] = useState<boolean>(false);
  const [descricaoSerieField, setdescricaoSerieField] = useState<boolean>(false);
  const [imagemSerieField, setimagemSerieField] = useState<boolean>(false);
  const [dataLancamentoSerieField, setdataLancamentoSerieField] = useState<boolean>(false);
  const [paisOrigemSerieField, setpaisOrigemSerieField] =  useState<boolean>(false);
  const [criadorSerieField, setcriadorSerieField] = useState<boolean>(false);
  const [plataformaSerieField, setplataformaSerieField] =  useState<boolean>(false);
  const [produzindoSerieField, setproduzindoSerieField] =  useState<boolean>(false);
  const [generoSerieField, setgeneroSerieField] = useState<boolean>(false);
  const [elencoSerieField, setelencoSerieField] = useState<boolean>(false);
  const [personagensSerieField, setpersonagensSerieField] =  useState<boolean>(false);
  const [trailerSerieField, settrailerSerieField] = useState<boolean>(false);
  const [numeroTemporadasField, setnumeroTemporadasField] =  useState<boolean>(false);

  const [nomeAtor2, setnomeAtor2] = useState<string>("");
  const [dataNascimentoAtor, setdataNascimentoAtor] = useState<string>("");
  const [dataMorteAtor, setdataMorteAtor] = useState<string>("");
  const [generoAtor, setgeneroAtor] = useState<string>("");
  const [popularidadeSerie, setpopularidadeSerie] = useState<string>("");
  const [nomeSerie2, setnomeSerie2] = useState<string>("");
  const [atuacaoInicialSerie, setatuacaoInicialSerie] = useState<string>("");
  const [atuacaoFinalSerie, setatuacaoFinalSerie] = useState<string>("");
  const [nomeAtorField, setnomeAtorField] = useState<boolean>(false);
  const [imagemAtorField, setimagemAtorField] = useState<boolean>(false);
  const [biografiaAtorField, setbiografiaAtorField] = useState<boolean>(false);
  const [generoAtorField, setgeneroAtorField] = useState<boolean>(false);
  const [dataNascimentoAtorField, setdataNascimentoAtorField] =  useState<boolean>(false);
  const [dataFalecimentoAtorField, setdataFalecimentoAtorField] =  useState<boolean>(false);
  const [lugarNascimentoAtorField, setlugarNascimentoAtorField] = useState<boolean>(false);
  const [popularidadeAtorField, setpopularidadeAtorField] =  useState<boolean>(false);
  const [nomePersonagemField, setnomePersonagemField] = useState<boolean>(false);
  const [nomeSerie2Field, setnomeSerie2Field] = useState<boolean>(false);  

  const [series, setSeries] = useState<Serie[]>();  

  

  function Buscar(event: FormEvent) {
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

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const handleSearchSerie = async () => { 
    try {
      const { data } = await api.post('/series', 
        {
          name: nomeSerie || undefined,
          character: nomePersonagem || undefined,
          actor: nomeAtor || undefined,
          rating: notaSerie || undefined,
          release_date: dataLancamentoSerie || undefined,
          country: paisOrigemSerie || undefined,
          name_creator: criadorSerie || undefined,
          number_season: Number(numeroTemporadas) || undefined,
          in_production: produzindoSerie,
          take,
        }
      );          

      if(data) setSeries(data);
    } catch(err) {
      console.log(err);
    }

  }  

  return (
    <Box className="">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:"100%", backgroundColor: "#F4EEF0" }}>
        <Carousel
          data={data}
          time={4000}
          // width="100%"
          height="500px"
          captionStyle={captionStyle}
          radius="0px 0px 20px 20px"
          captionPosition="bottom"          
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
          {/* <GridItem colSpan={4} bg="lightgrey" minHeight="300px">
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
            </GridItem> */}

          <GridItem colSpan={6}>
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
                      Series
                    </Button>
                  </Tab>
                  {/* <Tab
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
                      Atores
                    </Button>
                  </Tab> */}
                </TabList>
                <TabPanels>
                  <TabPanel px="0">
                    <Box width="100%">Pesquisar Series</Box>
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
                          placeholder="Nome da Serie"
                          height="60px"
                          value={nomeSerie}
                          onChange={(event) => {
                            setnomeSerie(event.target.value);
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Nome do personagem"
                          height="60px"
                          value={nomePersonagem}
                          onChange={(event) => {
                            setnomePersonagem(event.target.value);
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Nome do ator/atriz"
                          height="60px"
                          value={nomeAtor}
                          onChange={(event) => {
                            setnomeAtor(event.target.value);
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Nota"
                          height="60px"
                          value={notaSerie}
                          onChange={(event) => {
                            setnotaSerie(event.target.value);
                          }}
                        />
                        <Input
                          type="date"
                          placeholder="Data de lançamento"
                          height="60px"
                          value={dataLancamentoSerie}
                          onChange={(event) => {
                            setdataLancamentoSerie(event.target.value);
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Pais de Origem"
                          height="60px"
                          value={paisOrigemSerie}
                          onChange={(event) => {
                            setpaisOrigemSerie(event.target.value);
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Criador da Serie"
                          height="60px"
                          value={criadorSerie}
                          onChange={(event) => {
                            setcriadorSerie(event.target.value);
                          }}
                        />
                        <Input
                          height="60px"
                          value={numeroTemporadas}
                          onChange={(event) => {
                            setnumeroTemporadas(event.target.value);
                          }}
                          placeholder="Numero de temporadas"
                        ></Input>
                        <Checkbox
                          py="28px"
                          onChange={(e) => setproduzindoSerie(e.target.checked)}
                        >
                          Em produção
                        </Checkbox>
                        <div>
                        Quantidade de resultados para trazer:
                        <Input 
                          type="text"
                          height="60px"
                          value={take}
                          onChange={(event) => setTake(Number(event.target.value))}
                          placeholder="Quantidade de resultados a trazer"
                        />
                        </div>
                        <Heading mt="30px" mb="10px" size="lg">
                          Campos
                        </Heading>
                        <Divider orientation="horizontal" mb="20px" />
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) => setnomeSerieField(e.target.checked)}
                        >
                          Nome da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) => setnotaSerieField(e.target.checked)}
                        >
                          Nota da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setdescricaoSerieField(e.target.checked)
                          }
                        >
                          Descrição da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setimagemSerieField(e.target.checked)
                          }
                        >
                          Imagem da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setdataLancamentoSerieField(e.target.checked)
                          }
                        >
                          Data Lançamento da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setpaisOrigemSerieField(e.target.checked)
                          }
                        >
                          País de Origem da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setproduzindoSerieField(e.target.checked)
                          }
                        >
                          Em Produção
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setcriadorSerieField(e.target.checked)
                          }
                        >
                          Criador da serie
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setplataformaSerieField(e.target.checked)
                          }
                        >
                          Plataforma
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setgeneroSerieField(e.target.checked)
                          }
                        >
                          Genero
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setelencoSerieField(e.target.checked)
                          }
                        >
                          Elenco
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setpersonagensSerieField(e.target.checked)
                          }
                        >
                          Personagens
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            settrailerSerieField(e.target.checked)
                          }
                        >
                          Trailer
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setnumeroTemporadasField(e.target.checked)
                          }
                        >
                          Temporadas
                        </Checkbox>
                        <Box width="100%" mt="60px">
                          <Button
                            width="100%"
                            colorScheme="orange"
                            type="submit"
                            value="submit"
                            id="Button"
                            onClick={() => handleSearchSerie()}
                          >
                            Pesquisar
                          </Button>
                        </Box>
                      </form>
                    </Box>
                    <Box p={3} mt={3}>
                      {series && <Table bg="whitesmoke" variant="simple">
                        <Thead bg="lightgrey">
                          {nomeSerieField && (<Th>Nome</Th>)}
                          {notaSerieField && (<Th>Nota</Th>)}
                          {descricaoSerieField && (<Th>Descrição</Th>)}
                          {numeroTemporadasField && (<Th>Quant. temporadas</Th>)}
                          {paisOrigemSerieField && (<Th>País Origem</Th>)}
                          {dataLancamentoSerieField && (<Th>Data Lançamento</Th>)}
                          {series && (
                            <>
                              <Th>
                                <Text textAlign="center">Capa da série</Text>
                              </Th>
                              <Th>
                                <Text textAlign="center">Informações</Text>
                              </Th>
                            </>
                          )}
                          
                        </Thead>
                        <Tbody>
                          {series?.map((serie, index) => (
                            <Tr key={index}>
                              {nomeSerieField && (<Td>{serie.nome}</Td>)}
                              {notaSerieField && (<Td>{serie.nota}</Td>)}
                              {descricaoSerieField && (<Td>{serie.descricao}</Td>)}
                              {numeroTemporadasField && (<Td>{serie.temporadas?.length}</Td>)}
                              {paisOrigemSerieField && (<Td>{serie.pais_origem}</Td>)}
                              {dataLancamentoSerieField && (<Td>{new Date(serie.data_lancamento).toLocaleDateString()}</Td>)}                              
                              <Td>
                                <Box
                                  display="flex"
                                  justifyContent="space-evenly"
                                >
                                  <Button
                                    size="xs"
                                    variant="outline"
                                    onClick={() => {
                                      window.open( `https://image.tmdb.org/t/p/w500/${serie.imagem}`, '_blank');
                                      setData([{ image: `https://image.tmdb.org/t/p/w500/${serie.imagem}`, caption: serie.nome }]);
                                    }}
                                  >
                                    Capa da série
                                  </Button>
                                </Box>
                              </Td>
                              <Td>
                                <Box
                                  display="flex"
                                  justifyContent="space-evenly"
                                >
                                  <Button
                                    size="xs"
                                    variant="outline"
                                    onClick={() => {
                                      window.open( `https://www.themoviedb.org/tv/${serie.id_series}`, '_blank');
                                    }}
                                  >
                                    Ir
                                  </Button>
                                </Box>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>}
                    </Box>
                  </TabPanel>
                  <TabPanel px="0">
                    <Box width="100%">Pesquisar Atores</Box>
                    <Heading mt="20px" mb="10px" size="lg">
                      Filtros
                    </Heading>
                    <Divider orientation="horizontal" />
                    <br></br>
                    <Box display="flex" alignItems="center" width="100%">
                      <form className="form">
                        {/* <InputGroup> */}
                        <Input type="text" placeholder="Nome" 
                            height="60px" 
                            value={nomeAtor2}
                            onChange={(event) => {
                            setnomeAtor2(event.target.value);
                            }}
                        />
                        <Input
                          type="date"
                          placeholder="Data de nascimento"
                          height="60px"
                          value={dataNascimentoAtor}
                          onChange={(event) => {
                            setdataNascimentoAtor(event.target.value);
                          }}
                        />
                        <Input
                          type="date"
                          placeholder="Data da morte"
                          height="60px"
                          value={dataMorteAtor}
                          onChange={(event) => {
                            setdataMorteAtor(event.target.value);
                          }}
                        />
                        <Input type="text" placeholder="Gênero" height="60px" 
                            value={generoAtor}
                            onChange={(event) => {
                            setgeneroAtor(event.target.value);
                            }}
                        />
                        <Input
                          type="text"
                          placeholder="Popularidade"
                          height="60px"
                          value={popularidadeSerie}
                          onChange={(event) => {
                            setpopularidadeSerie(event.target.value);
                          }}
                        />
                        <Input type="text" placeholder="Série" height="60px"
                            value={nomeSerie2}
                            onChange={(event) => {
                            setnomeSerie2(event.target.value);
                            }}
                         />
                        <Input
                          type="text"
                          placeholder="Período de atuação Inicial"
                          height="60px"
                          value={atuacaoInicialSerie}
                          onChange={(event) => {
                            setatuacaoInicialSerie(event.target.value);
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Período de atuação Final"
                          height="60px"
                          value={atuacaoFinalSerie}
                          onChange={(event) => {
                            setatuacaoFinalSerie(event.target.value);
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
                          onChange={(e) => setnomeAtorField(e.target.checked)}
                        >
                          Nome
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) => setimagemAtorField(e.target.checked)}
                        >
                          foto
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setbiografiaAtorField(e.target.checked)
                          }
                        >
                          biografia
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) => setgeneroAtorField(e.target.checked)}
                        >
                          genero
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setdataNascimentoAtorField(e.target.checked)
                          }
                        >
                          Data Nascimento
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setdataFalecimentoAtorField(e.target.checked)
                          }
                        >
                          Data de Falecimento
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setlugarNascimentoAtorField(e.target.checked)
                          }
                        >
                          Lugar Nascimento
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setpopularidadeAtorField(e.target.checked)
                          }
                        >
                          Popularidade
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) =>
                            setnomePersonagemField(e.target.checked)
                          }
                        >
                          Personagens
                        </Checkbox>
                        <Checkbox
                          className="Checkbox"
                          size="md"
                          colorScheme="orange"
                          onChange={(e) => setnomeSerie2Field(e.target.checked)}
                        >
                          Series
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
                                <Td></Td>
                              </Tr>
                            );
                          })}
                        </Tbody>
                      </Table>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
