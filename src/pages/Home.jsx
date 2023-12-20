import {
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import {
  excelLogo,
  ExpertInstructor,
  hero_img,
  IndividualAttention,
  PracticalCareer,
  PracticalLearning,
  PythonLogo,
  reactLogo,
  tallyLogo,
  WebDev,
} from "../assets/images";
import { svgStyle, whyChooseBox } from "../styles/HomeStyles";

export const Home = () => {
  return (
    <div className="home-container">
      <Flex flexDir={"column"}>
        <Box className="hero-img">
          <Image
            src={hero_img}
            alt="Not availabe"
            w={"100vw"}
            maxH={"485px"}
            objectFit={"cover"}
          />
        </Box>
        <Flex
          flexDir={"column"}
          p="1rem"
          gap={{ base: "0.5rem", md: "1rem" }}
          backgroundColor={{ base: "whitesmoke", md: "transparent" }}
          boxShadow={{ base: " 0px 5px 20px #80808063", md: "none" }}
          pos={{ base: "static", md: "absolute" }}
          color={{ base: "black", md: "white" }}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          w={{ base: "100%", md: "50%" }}
          m={{ base: "0", md: "8rem 0 0 6rem" }}
        >
          <Heading display={"flex"} flexWrap={"wrap"} fontFamily={"heading2"}>
            <Box>
              Empower Your Future with{" "}
              <Text
                display={{ base: "inline", md: "none" }}
                color={" #fcac15"}
                className="hero-name"
              >
                SK Computer
              </Text>{" "}
              <Text display={{ base: "inline", md: "none" }}>Institute</Text>
            </Box>
            <Flex gap={"0.5rem"} display={{ base: "none", md: "flex" }}>
              <Text color={"#fcac15"}>SK Computer</Text>
              <Text>Institute</Text>
            </Flex>
          </Heading>
          <Text>
            Providing professional advice and practical experience to empower
            futures. Come explore with us the limitless prospects in computer
            science and programming.
          </Text>

          <Button
            backgroundColor="#ffe500"
            borderRadius="22px"
            w="fit-content"
            m="auto"
            p="1.5rem 1.7rem"
            fontSize="1.2rem"
          >
            Register Now
          </Button>
        </Flex>
      </Flex>

      <Heading fontFamily={"heading2"} textAlign={"center"}>
        Why Choose SK Computer Institute?
      </Heading>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={"2rem"}
        m={"auto"}
        w={{ base: "100%", md: "80%" }}
        justifyContent={"space-between"}
      >
        {/* <WhyChoose /> */}

        <VStack {...whyChooseBox}>
          <VStack gap={"0.5rem"} padding={"1rem"} h={"265px"}>
            <Heading {...svgStyle}>Expert Instructors</Heading>
            <ExpertInstructor />
          </VStack>
          <VStack gap={"0.5rem"} borderTop={"1px solid gray"} p={"1rem"}>
            <Text>
              Our faculty is made up of experienced teachers and industry
              specialists with a wealth of knowledge in their respective
              specialties.
            </Text>
            <Text>
              Enjoy a well-rounded learning experience by taking use of their
              vast knowledge and real-world insights.
            </Text>
          </VStack>
        </VStack>

        <VStack {...whyChooseBox}>
          <VStack gap={"0.5rem"} padding={"1rem"} h={"265px"}>
            <Heading {...svgStyle}>Individualized Attention</Heading>
            <IndividualAttention />
          </VStack>
          <VStack gap={"0.5rem"} borderTop={"1px solid gray"} p={"1rem"}>
            <Text>
              We are aware of how different every student is. For this reason,
              we give each learner individualised attention.
            </Text>
            <Text>
              Small class sizes help teachers to address the requirements of
              every student individually, creating a collaborative and
              supportive learning atmosphere.
            </Text>
          </VStack>
        </VStack>

        <VStack {...whyChooseBox}>
          <VStack gap={"0.5rem"} padding={"1rem"} h={"265px"}>
            <Heading {...svgStyle}>Practical Learning Environment</Heading>
            <PracticalLearning />
          </VStack>
          <VStack gap={"0.5rem"} borderTop={"1px solid gray"} p={"1rem"}>
            <Text>
              Learn by doing is our leading concept at SK Computer Institute.
              Practical projects that apply theory are highlighted in our
              courses.
            </Text>
            <Text>
              Learn practical skills that can help you succeed in your future
              learning or career goals.
            </Text>
          </VStack>
        </VStack>

        <VStack {...whyChooseBox}>
          <VStack gap={"0.5rem"} padding={"1rem"} h={"265px"}>
            <Heading {...svgStyle}>Practical Career Guidance</Heading>
            <PracticalCareer />
          </VStack>
          <VStack gap={"0.5rem"} borderTop={"1px solid gray"} p={"1rem"}>
            <Text>
              SK Computer Institute is more than just a theoretical institution.
              We provide helpful career advice and support to enable you to make
              well-informed decisions on your future.
            </Text>
            <Text>
              Take advantage of our workshops on interview preparation, resume
              development, and career counselling.
            </Text>
          </VStack>
        </VStack>
      </Flex>

      <Flex flexDir={"column"} gap={"1rem"} w={"80%"} m={"auto"}>
        <VStack gap={"1.5rem"}>
          <Text
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontFamily={"heading2"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Top-Rated Courses for Achievement
          </Text>
          <hr className="home-hr" />
        </VStack>

        <Flex
          flexWrap={"wrap"}
          marginTop={"0.6rem"}
          gap={"1.8rem"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <VStack width={"100%"} maxW={"400px"}>
            <WebDev />
            <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
              HTML + CSS + VanillaJS
            </Text>
            <Text textAlign={"center"}>
              Get enrolled in our Web Development course so you can shape the
              digital future. To build dynamic, interesting websites, become
              familiar with HTML, CSS, and JavaScript.
            </Text>
          </VStack>

          <VStack width={"100%"} maxW={"400px"}>
            <Image src={PythonLogo} alt="Python" width={"100px"} />
            <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
              Python
            </Text>
            <Text textAlign={"center"}>
              Visit SK Computer Institute to learn more about Python. Find out
              what this flexible language can do for you. It's great for data
              science, web development, and more.
            </Text>
          </VStack>

          <VStack width={"100%"} maxW={"400px"}>
            <Image src={reactLogo} alt="React" width={"100px"} />
            <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
              React JS Mastery
            </Text>
            <Text textAlign={"center"}>
              At SK Computer Institute, educate yourself in the world of React
              JS. Learn the skills of current web programming, from creating
              single-page apps to creating interactive user interfaces.
            </Text>
          </VStack>

          <VStack width={"100%"} maxW={"400px"}>
            <Image src={excelLogo} alt="Excel" width={"100px"} />
            <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
              Advance Excel
            </Text>
            <Text textAlign={"center"}>
              Learn Advanced Excel at SK Computer Institute to improve your
              skills. Learn effective methods for data automation, analysis, and
              presentation. Gain expertise to succeed in your career.
            </Text>
          </VStack>

          <VStack width={"100%"} maxW={"400px"}>
            <Image src={tallyLogo} alt="Tally" width={"150px"} />
            <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
              Tally + GST
            </Text>
            <Text textAlign={"center"}>
              At SK Computer Institute, master tally with GST. Get a useful
              certification and in-depth understanding of accounting software to
              launch an attractive finance profession.
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </div>
  );
};
