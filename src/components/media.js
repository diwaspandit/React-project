import React from 'react';
import { Box, Heading, Text, IconButton, Image, Stack, VStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaTwitter } from 'react-icons/fa';
import LatestMedia from './LatestMedia';
import { NavLink } from 'react-router-dom';

const Media = () => {
  return (
    <Box backgroundColor="#0b2e33">
    <Box
      position="relative"
      backgroundImage="url('https://www.urbanresilience.ai/images/news-bg.jpg')" // Background image
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      color="white"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 5, lg: 20 }}
      py={{ base: 10, lg: 0 }}
    >
      {/* Left Section with Title and Icons */}
      <VStack align="flex-start" spacing={5}>
        <Heading as="h1" fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
        Explore the <Text as="span" color="teal.400">media</Text> surrounding our research in urban equity and resilience.
        </Heading>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={4} align="center">
          <IconButton
            as="a"
            href="mailto:info@urbanresilience.ai"
            aria-label="Send an email"
            icon={<EmailIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
          />
          <IconButton
            as="a"
            href="https://twitter.com/UrbanResilienceAI"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="outline"
            colorScheme="whiteAlpha"
          />
        </Stack>

        {/* Link to See All Medias */}
        <NavLink to="/Media" color="teal.400" fontSize="lg" fontWeight="bold">
          &#8595; See the full list of posts below
        </NavLink>
      </VStack>

      {/* Right Section with Featured News */}
      <Box
        bg="blackAlpha.700"
        p={6}
        borderRadius="lg"
        maxW="lg"
        mt={{ base: 10, lg: 0 }}
        ml={{ lg: 20 }}
      >
        <Text color="teal.400" fontSize="lg" mb={2} fontWeight="bold">
          Featured
        </Text>
        <Image
          src="https://www.urbanresilience.ai/images/trophy.jpg" // Featured image
          alt="Award"
          borderRadius="md"
          mb={4}
        />
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Prof. Mostafavi Received the 2023 ASCE Daniel Halpin Award!
        </Text>
        <Text fontSize="md">
          Prof. Mostafavi received the 2023 ASCE Daniel W. Halpin Award for
          Scholarship in Construction from ASCE’s Construction Institute for
          “exceptional leadership in establishing an outstanding research program
          that pioneer theories and practices of civil infrastructure resilience
          management to extreme weather events through advancing the state of the
          art in data-driven methods and computational modeling techniques.”
        </Text>
      </Box>
    </Box>
    <LatestMedia />
    </Box>
  );
};

export default Media;
