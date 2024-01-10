import { Box, Text, Flex, Heading } from "@chakra-ui/react";

import {
  JavaLogo,
  MernStack,
  PythonLogo,
  WebDev,
} from "../../../assets/images";
import {
  FaCertificate,
  FaClock,
  FaLanguage,
  FaLevelUpAlt,
  FaRev,
  FaRupeeSign,
  MdCalendarMonth,
} from "../../../assets/Icons";
import { ReactLogo } from "../../../assets/images/";
import { CandCpp } from "../../../assets/images/CandCpp";
import { DataScience } from "../../../assets/images/";

const courses = [
  {
    name: "WEBSITE DEVELOPMENT",
    Img: WebDev,
    content:
      "Explore the world of web development by becoming an expert in HTML, CSS, and JavaScript. Discover how to create responsive, dynamic websites and analyse frameworks such as Next.js and React.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "3 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "Beginner Level",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹7,500",
      },
    ],
  },
  {
    name: "REACT JS (FrontEnd)",
    Img: ReactLogo,
    content:
      "Discover the possibilities of React JS, a well-liked JavaScript package for creating dynamic and interactive user interfaces. The goal of this course is to give students practical experience with React.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "3 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "Basic Web Developement",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹6,000",
      },
    ],
  },
  {
    name: "MERN STACK (BACKEND)",
    Img: MernStack,
    content:
      "Examine the MERN stack, which combines Express.js, React.js, and Node.js to create modern, scalable web apps. A whole journey from database design to back-end development is offered by this course.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "3 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "React Js",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹4,000",
      },
    ],
  },
  {
    name: "JAVA CORE AND ADVANCE",
    Img: JavaLogo,
    content:
      "Learn Java programming from the ground up, from the fundamentals to complex application creation. Examine software development best practices, frameworks, and the Java ecosystem.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "5 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "C/C++",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹7,500",
      },
    ],
  },
  {
    name: "C AND CPP",
    Img: CandCpp,
    content:
      "Develop your C and C++ programming skills. Gain a solid understanding of the fundamental concepts of computer programming as well as problem-solving abilities.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "3 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "Beginner Level",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹4,500",
      },
    ],
  },
  {
    name: "PYTHON CORE & ADVANCE",
    Img: PythonLogo,
    content:
      "Start with the fundamentals of Python programming and work your way up to more complex ideas. Learn how to use Python's variety, evaluate data, and create apps.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "3 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "Beginner Level",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹5,000",
      },
    ],
  },
  {
    name: "DATA SCIENCE",
    Img: DataScience,
    content:
      "Discover the field of data science to learn about statistical modelling, machine learning, and data analysis. Discover how to use data to extract insights and make wise decisions.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "5 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "Beginner Level",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹10,000",
      },
    ],
  },
  {
    name: "TALLY & ADVANCE GST",
    Img: PythonLogo,
    content:
      "Discover the specifics of Tally ERP9 and Prime as well as innovative Goods and Services Tax (GST) ideas for thorough financial administration.",
    list: [
      {
        icon: MdCalendarMonth,
        name: "Course Duration",
        Ans: "3 Months",
      },
      {
        icon: FaClock,
        name: "Lecture Duration",
        Ans: "1 Hour",
      },
      {
        icon: FaRev,
        name: "Practice Session",
        Ans: "0.5 Hour",
      },
      {
        icon: FaLevelUpAlt,
        name: "Prerequisite",
        Ans: "Beginner Level",
      },
      {
        icon: FaLanguage,
        name: "Language",
        Ans: "English/Hindi",
      },
      {
        icon: FaCertificate,
        name: "Certificate",
        Ans: "Yes",
      },
      {
        icon: FaRupeeSign,
        name: "Fees",
        Ans: "₹4000",
      },
    ],
  },
];

export const FeaturedCourse = () => {
  return (
    <Flex direction={"column"} p={"0 1.5rem"} id="courses">
      <Flex gap={"1rem"} alignItems={"center"}>
        <Text
          w="20px"
          h={"20px"}
          backgroundColor={"#E32636"}
          borderRadius={"50%"}
        />
        <Text fontSize={"1.5rem"} fontWeight={"600"}>
          Featured Courses
        </Text>
      </Flex>
      {courses.map(({ name, Img, content, list }) => {
        return (
          <Flex flexDir={"column"} gap={"2rem"} key={name}>
            <Box>
              <Flex
                flexDir={"column"}
                padding={"1.5rem 0.5rem"}
                borderRadius={"12px"}
                alignItems={"center"}
                gap={"1rem"}
                backgroundColor={"white"}
                marginBottom={"2rem"}
              >
                <Box>
                  <Img />
                </Box>
                <Flex flexDir={"column"} gap={"0.5rem"}>
                  <Text>{content}</Text>
                  {list.map(({ icon, name, Ans }) => {
                    return (
                      <Flex
                        justifyContent={"space-between"}
                        fontSize={"1.1rem"}
                        padding={"0.2rem 0"}
                        key={name}
                      >
                        <Flex gap={"0.5rem"}>
                          <Box
                            as={icon}
                            fontSize={"1.5rem"}
                            color={"#E32636"}
                          />
                          <strong>{name}</strong>
                        </Flex>
                        <Text>{Ans}</Text>
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
              <Heading fontSize={"1.5rem"} fontFamily={"heading2"}>
                {name}
              </Heading>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
