import { Box, Button, Heading, Text, Image, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import img1 from '../Assets/slide/img1.jpeg';
import img2 from '../Assets/slide/img2.jpeg';
import img3 from '../Assets/slide/img3.jpeg';
import { NavLink } from 'react-router-dom';

const slides = [
  {
    image: img1,
    title: 'Smart Resilience',
    description: 'Our research works to improve disaster management and responses using artificial intelligence. Our work in this area focuses on building, testing, and refining new methods and models to gather and analyze community-scale big data to generate knowledge for decision-making.',
    link: '/publications'
  },
  {
    image: img2,
    title: 'Disaster Recovery',
    description: 'Our goal is to help residents, civilian volunteers, and emergency responders better predict and cope with crises through advanced technology and community-centric approaches.',
    link: '/research'
  },
  {
    image: img3,
    title: 'Community Building',
    description: 'We focus on empowering communities with the tools and technologies needed to become more resilient in the face of urban challenges and global disasters.',
    link: '/community'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Box mb="4rem">
    <Box 
        mt={28}
        textAlign="center"
        width='80%' 
        mx="auto"  // Centers the box horizontally
        display="flex"
        flexDirection="column" 
        alignItems="center" // Centers the content horizontally
      >
        <Heading as="h2" fontSize={['3xl', '4xl', '5xl']} mb="4">
        <Text as="span">A </Text><Text as="span" color="teal.300">new perspective </Text> on urban resilience
        </Heading>
        <Text fontSize="lg" maxWidth="100%" margin="0 auto" mb="6">
        Our approach to urban resilience is unique, as we work at the interface of urban science, complex networks, artificial intelligence. Read on to learn about the themes we explore.
        </Text>
    </Box>
    
    <Box position="relative" mt="0.1rem" width="100%" borderWidth="0.15rem">
        <Box position="relative" overflow="hidden" borderRadius="md" mx="0.8rem" >
        {/* Carousel Container */}
        <Flex transition="all 0.5s" transform={`translateX(-${currentSlide * 100}%)`}>
            {slides.map((slide, index) => (
            <Flex key={index} minWidth="100%" p="5" alignItems="center" justifyContent="center" flexDirection={{base:'column',md:'row', lg:'row', xl:'row'}}>
                {/* Image Section */}
                <Box flex="1" p="5">
                <Image
                    src={slide.image}
                    alt={slide.title}
                    objectFit="cover"
                    borderRadius="md"
                    width="100%"
                    maxHeight="400px"
                />
                </Box>

                {/* Text Content Section */}
                <Box flex="1" p="5">
                <Heading as="h3" fontSize="2xl" mb="4" color="teal.300">
                    {slide.title}
                </Heading>
                <Text fontSize="lg" mb="4">
                    {slide.description}
                </Text>
                <NavLink to="/Publications">
                    <Button
                    rightIcon={<FaArrowRight />}
                    colorScheme="teal"
                    variant="outline"
                    size="lg"
                    >
                    Read More
                    </Button>
                </NavLink>
                </Box>
            </Flex>
            ))}
        </Flex>

        </Box>
        {/* Navigation Arrows */}
        <Button
            position="absolute"
            top="50%"
            boxSize='3rem'
            left="0"
            transform="translateY(-50%)"
            onClick={prevSlide}
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
        >
            <FaArrowLeft color='white'/>
        </Button>
        <Button
            position="absolute"
            top="50%"
            boxSize='3rem'
            right="0"
            transform="translateY(-50%)"
            onClick={nextSlide}
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
        >
            <FaArrowRight color='white'/>
        </Button>
    </Box>
    </Box>
  );
};

export default Carousel;
