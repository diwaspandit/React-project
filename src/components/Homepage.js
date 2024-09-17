import { Box, Heading, Button, Text, Image, Flex, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import photo1 from '../Assets/photos/photo1.jpg';
import photo2 from '../Assets/photos/photo2.jpg';
import photo3 from '../Assets/photos/photo3.jpg';
import photo4 from '../Assets/photos/photo4.jpg';

const HomePage = () => {
  return (
    <Box bg="gray.900" color="white" minHeight="100vh" padding="4rem 2rem">
      {/* Hero Section */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
        maxWidth="1200px"
        margin="0 auto"
      >
        {/* Left Section */}
        <Box flex="1">
          <Heading as="h1" fontSize={['2xl', '3xl', '4xl']} mb="4" lineHeight="1.2">
            Smart and equitable <Text as="span" color="teal.300">resilience</Text>
          </Heading>
          <Link href="/research">
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
              size="lg"
            >
              Our science
            </Button>
          </Link>
        </Box>

        {/* Right Section - Image */}
        <Box flex="1" textAlign="center" mt={['8', '8', '0']}>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/6033ffe6417b9d1ba2ce7aea/1616124359680-5TGVC5QS4QFGVMZ8MRCG/Artboard+1.png"
            alt="City skyline with tech design"
            borderRadius="md"
            objectFit="cover"
            width="100%"
            maxWidth="600px"
          />
        </Box>
      </Flex>

      {/* Transformative Solutions Section */}
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
          <Text as="span" color="teal.300">Transformative solutions</Text> at the nexus of humans,
          disasters, and urban systems.
        </Heading>
        <Text fontSize="lg" maxWidth="800px" margin="0 auto" mb="6">
          Crises, like flooding and pandemics, increasingly affect communities and people. Our
          goal is to create knowledge and technologies to reduce the social, economic, and physical
          impacts of these disasters on communities.
        </Text>
        <Link href="/research">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            size="lg"
            borderColor="teal.300"
            _hover={{ bg: 'teal.300', color: 'gray.900' }}
          >
            More about our research
          </Button>
        </Link>
      </Box>

      {/* Image Grid Section */}
      <Box mt={28} width='90%' mx="auto">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap={8} // Gap between the images
        >
          {/* Image 1 */}
          <Image
            src={photo1}
            alt="Urban city skyline at night"
            boxSize={['100%', '48%', '48%']}
            objectFit="cover"
            borderRadius="md"
          />
          
          {/* Image 2 */}
          <Image
            src={photo2}
            paddingTop={['0','0','20']}
            alt="Flooded traffic light"
            boxSize={['100%', '48%', '48%']}
            objectFit="cover"
            borderRadius="md"
          />
          
          {/* Image 3 */}
          <Image
            src={photo3}
            alt="View of Earth from space at night"
            boxSize={['100%', '48%', '48%']}
            objectFit="cover"
            borderRadius="md"
            mt={['0','0','-20']}
          />

          {/* Image 4 */}
          <Image
            src={photo4}
            alt="Damaged house after a storm"
            boxSize={['100%', '48%', '48%']}
            objectFit="cover"
            borderRadius="md"
          />
        </Flex>
      </Box>
    

    </Box>
  );
};

export default HomePage;
