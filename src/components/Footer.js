import React from 'react';
import { Box, Flex, VStack, HStack, Text, Link, IconButton, Divider } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" py={8} px={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'center', 'flex-start']}
      >
        {/* Left Section - Logo and Social Icons */}
        <VStack align={['center', 'center', 'flex-start']} mb={[8, 8, 0]}>
          {/* Logo */}
          <Text fontSize="3xl" fontWeight="bold" color="cyan.400">
            Urban Resilience.AI Lab
          </Text>
          {/* Social Icons */}
          <HStack spacing={4} mt={4}>
            <IconButton
              as="a"
              href="mailto:mostafavi@tamu.edu"
              aria-label="Email"
              icon={<EmailIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              borderColor="cyan.400"
              _hover={{ bg: 'cyan.400', color: 'black' }}
            />
            <IconButton
              as="a"
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="outline"
              colorScheme="whiteAlpha"
              borderColor="cyan.400"
              _hover={{ bg: 'cyan.400', color: 'black' }}
            />
          </HStack>
        </VStack>

        {/* Middle Section - Contact Info */}
        <VStack align={['center', 'center', 'flex-start']} mb={[8, 8, 0]}>
          <Text fontSize="lg">Urban Resilience.AI Lab</Text>
          <Text>3136 TAMU</Text>
          <Text>College Station, TX, 77843</Text>
          <Link href="mailto:mostafavi@tamu.edu" color="cyan.400" fontWeight="bold">
            mostafavi@tamu.edu
          </Link>
        </VStack>

        {/* Right Section - Quick Links */}
        <VStack align={['center', 'center', 'flex-start']}>
          <Text fontSize="lg" fontWeight="bold">
            Quick Links
          </Text>
          <Link href="#" color="cyan.400">
            Home
          </Link>
          <Link href="#" color="cyan.400">
            Research
          </Link>
          <Link href="#" color="cyan.400">
            People
          </Link>
          <Link href="#" color="cyan.400">
            Publications
          </Link>
          <Link href="#" color="cyan.400">
            Media
          </Link>
          <Link href="#" color="cyan.400">
            Awards
          </Link>
          <Link href="#" color="cyan.400">
            Opportunities
          </Link>
        </VStack>
      </Flex>

      {/* Divider Line */}
      <Divider borderColor="gray.700" my={8} />

      {/* Footer Bottom - Copyright */}
      <Box textAlign="center">
        <Text fontSize="sm" mb={2}>
          &copy; 2020 Urban Resilience.AI
        </Text>
        <Text fontSize="sm">Site designed by Impact Media Lab</Text>
      </Box>
    </Box>
  );
};

export default Footer;
