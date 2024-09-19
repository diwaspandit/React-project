import React from 'react';
import { Box, Flex, VStack, HStack, Text, Link, IconButton, Divider } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaTwitter } from 'react-icons/fa';
import footerBackground from '../Assets/footer.png';  // Ensure this path is correct
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      py={8}
      px={4}
      position="relative"
    >
      {/* Footer Content */}
      <Flex
        maxW="1200px"
        mx="auto"
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'center', 'flex-start']}
        position="relative"
        zIndex={1}
      >
        {/* Left Section - Logo and Social Icons */}
        <VStack align="left" mb={[8, 8, 0]} spacing={6}>
          {/* Logo */}
          <Box
            as="img"
            src={footerBackground}
            alt="Urban Resilience AI Logo"
            width={["200px", "300px", "400px"]}  // Adjust based on screen size
            height="auto"
          />

          {/* Social Icons */}
          <HStack spacing={4}>
            <IconButton
              as="a"
              href="mailto:mostafavi@tamu.edu"
              aria-label="Email"
              icon={<EmailIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              borderColor="cyan.400"
              _hover={{ bg: 'cyan.400', color: 'black' }}
              size="lg"
              isRound
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
              size="lg"
              isRound
            />
          </HStack>
        </VStack>

        {/* Middle Section - Contact Info */}
        <VStack align="flex-start" mb={[8, 8, 0]} spacing={2}>
          <Text fontSize="lg" fontWeight="bold"  color="cyan.400">Contact us</Text>
          <Text fontSize="lg" opacity={0.7}>Urban Resilience.AI Lab</Text>
          <Text opacity={0.7}>3136 TAMU</Text>
          <Text opacity={0.7}>College Station, TX, 77843</Text>
          <Link href="mailto:mostafavi@tamu.edu" fontWeight="bold">
            mostafavi@tamu.edu
          </Link>
        </VStack>

        {/* Right Section - Quick Links */}
        <VStack align="flex-start" spacing={2} fontWeight="bold">
          <Text fontSize="lg" opacity={0.7}>Quick Links</Text>
          <NavLink to="/Research" color="cyan.400">Research</NavLink>
          <NavLink to="/" color="cyan.400">Home</NavLink>
          <NavLink to="/People" color="cyan.400">People</NavLink>
          <NavLink to="/Publications" color="cyan.400">Publications</NavLink>
          <NavLink to="/News" color="cyan.400">News</NavLink>
          <NavLink to="/Media" color="cyan.400">Media</NavLink>
          <NavLink to="/Awards" color="cyan.400">Awards</NavLink>
          <NavLink to="/Opportunities" color="cyan.400">Opportunities</NavLink>
        </VStack>
      </Flex>

      {/* Divider Line */}
      <Divider borderColor="gray.700" my={8} />

      {/* Footer Bottom - Copyright */}
      <Flex justify="space-around" align="center" px={4} zIndex={1}>
      <Text fontSize="sm">&copy; 2020 Urban Resilience.AI</Text>
      <Text fontSize="sm">Site designed by Impact Media Lab</Text>
      </Flex>


    </Box>
  );
};

export default Footer;
