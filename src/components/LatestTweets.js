import { Box, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import footer from "../Assets/footer.png"; // Make sure to replace with the correct image path

const Footer = () => {
  return (
    <Box>
    <HStack 
      align="center" 
      justify="space-around" 
      backgroundColor="blue.900" 
      padding={8}
      spacing={12} 
      wrap="wrap"
    >
      {/* Left Column - Twitter Feed */}
      <VStack align="flex-start" spacing={4} color="white" maxW="400px">
        <Text fontSize="lg" fontWeight="bold">Follow us on Twitter</Text>

        <Box>
          <Text fontWeight="bold" fontSize="md">UrbanResilience.AI Lab</Text>
          <Text fontSize="sm">RT @Mostafavi_Ali: New paper from our lab led by @FlaviaPatrascu presents a spatial model for predictive recovery monitoring based on...</Text>
          <Text fontSize="xs">Mar 28, 2023, 1:59 PM</Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="md">UrbanResilience.AI Lab</Text>
          <Text fontSize="sm">RT @Mostafavi_Ali: New paper from our lab led by @liujiafu15 reveals hazard-exposure heterophily as latent characteristics of communit...</Text>
          <Text fontSize="xs">Mar 24, 2023, 5:11 PM</Text>
        </Box>

      </VStack>

      {/* Right Column - Logo & Icons */}
      <VStack align="flex-end" mb={[8, 8, 0]} spacing={6}>
        {/* Logo */}
        <Box
          as="img"
          src={footer}
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
    </HStack>
    </Box>
  );
};

export default Footer;
