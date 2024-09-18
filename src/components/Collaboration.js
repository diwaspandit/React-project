import React from 'react';
import { Box, Text, Heading, Button, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Collaboration = () => {
  return (
      <Box  width="100%" >
        <Stack spacing={6} mx="auto">
          <Heading as="h1" fontSize={['3xl', '4xl', '5xl']} my="1.5rem" fontWeight="bold" textAlign="center">
            Collaborate with us
          </Heading>
          <Text fontSize={['md', 'lg', 'xl']} px="4rem">
            We welcome sustaining and synergistic collaborations with the public
            agencies, the industry practitioners, and the academic community
            around the globe to address the grand challenges of the 21st
            century. Reach out to us to learn more!
          </Text>

          <Button
            mb="5rem"
            size="lg"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
            alignSelf="center"
            _hover={{
              bg: 'teal.500',
              color: 'white',
            }}
            onClick={() => window.location.href = 'mailto:info@urbanresilience.ai'}
          >
            Send us an email
          </Button>
        </Stack>
      </Box>
  );
};

export default Collaboration;
