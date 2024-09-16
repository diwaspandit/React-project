// src/components/Navbar.js
import React from 'react';
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../Assets/Urban-ResilienceAi-Lab_Color.png'; // Import the logo
import { useState } from 'react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredItem, setHoveredItem] = useState(null);

  const fontSize = useBreakpointValue({ base: 'md', md: '17px' });
  const fontFamily = "'Ubuntu', sans-serif"; // Use Ubuntu font
  const activeColor = useColorModeValue('#00FFFF', '#00FFFF'); // Cyan-like color
  const backgroundColor = useColorModeValue('#0a1e30', '#0a1e30'); // Navy blue background

  return (
    <Box 
      bg={backgroundColor} 
      color="white" 
      px={{ base: 4, md: 8 }} 
      py={4} 
      fontFamily={fontFamily}
      letterSpacing="0.1em"
      boxShadow="md"
    >
      <Flex 
        h={16} 
        alignItems="center" 
        justifyContent="space-between" 
        maxW="1200px" 
        mx="auto"
      >
        <Image 
          src={logo} 
          alt="Urban Resilience.AI Lab" 
          boxSize={{ base: '100px', md: '150px' }}
          objectFit="contain"
        />
        <Flex alignItems="center">
          <Stack 
            direction="row" 
            spacing={8} 
            display={{ base: 'none', md: 'flex' }} // Keep space larger for elegance
            alignItems="center"
          >
            {['Research', 'News', 'Media', 'People', 'Publications', 'Opportunities'].map((item) => (
              <Text
                as="a"
                key={item}
                fontSize={fontSize}
                fontFamily={fontFamily}
                color="white"
                padding="10.506px 0" // Padding to match the example
                margin="0 11.9px" // Match the horizontal margin
                transition="color 0.8s ease-in-out, background-color 0.8s ease-in-out, opacity 0.8s"
                _focus={{ boxShadow: 'none' }}
                cursor="pointer"
                opacity={hoveredItem && hoveredItem !== item ? 0.5 : 1} // Dim other links
                onMouseEnter={() => setHoveredItem(item)} // Set hovered item
                onMouseLeave={() => setHoveredItem(null)} // Reset when not hovering
              >
                {item}
              </Text>
            ))}
          </Stack>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            ml={2}
            variant="outline"
            colorScheme="teal"
          />
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg={backgroundColor} color="white">
          <DrawerCloseButton />
          <DrawerHeader>
            <Image 
              src={logo} 
              alt="Urban Resilience.AI Lab" 
              boxSize="120px"
              objectFit="contain"
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {['Research', 'News', 'Media', 'People', 'Publications', 'Opportunities'].map((item) => (
                <Text
                  key={item}
                  fontSize={fontSize}
                  color="white"
                  transition="color 0.2s ease-in-out, opacity 0.2s"
                  _hover={{ color: activeColor }}
                  _focus={{ boxShadow: 'none' }}
                  cursor="pointer"
                  opacity={hoveredItem && hoveredItem !== item ? 0.5 : 1}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item}
                </Text>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
    