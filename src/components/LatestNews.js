import { Box, Image, Text, Heading, SimpleGrid, Button, Link, Flex } from "@chakra-ui/react";

const LatestNews = () => {
  // Example news data, replace this with your actual data
  const newsItems = [
    {
      id: 1,
      image: "/path/to/image1.jpg", // Replace with actual image URLs
      date: "March 18, 2023",
      title: "Prof. Mostafavi Received the 2023 ASCE Daniel Halpin Award!",
      description: "Prof. Mostafavi received the 2023 ASCE Daniel W. Halpin Award for Scholarship in Construction from ASCE's Construction Institute for 'exceptional leadership in establishing an outstanding research program'.",
    },
    {
      id: 2,
      image: "/path/to/image2.jpg", // Replace with actual image URLs
      date: "March 18, 2023",
      title: "Qingchun Li Joins Purdue University as an Assistant Prof!",
      description: "Congratulations to Qingchun Li for accepting a Tenure-track Assistant Professor position in the Department of Construction Management at Purdue University starting Fall 2023!",
    },
    {
      id: 3,
      image: "/path/to/image3.jpg", // Replace with actual image URLs
      date: "March 18, 2023",
      title: "Prof. Mostafavi Received Dean of Engineering Excellence Award!",
      description: "Prof. Mostafavi received Dean of Engineering Excellence Award in recognition of excellence in research, teaching, and service.",
    },
    {
        id:3,
        image: "path",
        date: "July 6, 2022",
        title: "Chao Joins Clemson University as an Assistant Prof!",
        description: "Congratulations to Chao Fan for accepting a tenure-track faculty position in the Department of Civil Engineering at Clemson University starting Fall 2022!"
    },
    {
        id:4,
        image: "path",
        date: "December 13, 2021",
        title: "Prof. Mostafavi Receives Zachry Endowed Professorship Appointment!",
        description: "Prof. Mostafavi received the Zachry Endowed Career Development Professorship from the College of Engineering!"
    },
    {
        id: 5,
        image: "path",
        date: "December 13, 2021",
        title: "Prof. Mostafavi Receives Truman Jones Award!",
        description: "Prof. Mostafavi received Truman Jones Award for Excellence in Graduate Teaching from the Zachry Department of Civil and Environmental Engineering!"
    },
    {
        id: 6,
        image: "path",
        date: "December 6, 2021",
        title: "Hamed Receives a Dissertation Fellowship!",
        description: "Hamed Farahmand received a Dissertation Fellowship from the Graduate School at TAMU!"
    },
    {
        id: 7,
        imge: "path",
        date: "December 1, 2021",
        title: "Risk Analysis Journal Best Paper Award",
        description: "Prof. Mostafavi and Prof. Emel Ganapati (FIU) received the 2021 Best Paper Award from the Risk Analysis Journal!"
    },
    {
        id: 8,
        image: "path",
        date: "March 25, 2021",
        title: "College of Engineering Excellence Faculty Award",
        description: "Dr. Mostafavi received the College of Engineering Excellence Faculty Award in recognition of excellence in contributions to the Engineering Program (scholarly activities, classroom instruction, and professional service)."
    },
    {
        id:9,
        image: "path",
        date: "March 15, 2021",
        title: "Welcoming Dr. Barry Lee!",
        description: "The UrbanResilience.AI Lab welcomes our new post-doctoral research associate, Dr. Barry Lee. Before he joined the research group, he received his Ph.D. degree in Civil Engineering at Texas A&M"
    },
    {
        id: 10,
        image: "path",
        date: "January 18, 2021",
        title: "Welcoming Dr. Faxi Yuan!",
        description: "The UrbanResilience.AI Lab welcomes our new post-doctoral research associate, Dr. Faxi Yuan. Faxi joins us from the University of Florida, where he obtained his Ph.D."
    },
    {
        id: 11,
        image: "path",
        date: "January 18, 2021",
        title: "Dean of Engineering Excellence Award",
        description: "Grateful to receive the Dean of Engineering Excellence Award from the College of Engineering at TAMU!"
    },
    {
        id: 12,
        image: "path",
        date: "January 18, 2021",
        title: "Natalie Receives NSF Graduate Research Fellowship",
        description: "Congratulations to Natalie Coleman (current undergraduate researcher - Ph.D. student in Fall 2020) for receiving a NSF Graduate Research Fellowship! Way to go Natalie!"
    },

    ];

  return (
    <Box py={10} px={5} bg="blue.900" color="white">
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h2" size="lg" color="white">
          Latest News
        </Heading>
        <Button as={Link} href="/news" variant="outline" colorScheme="teal">
          See all news →
        </Button>
      </Flex>

      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {newsItems.map((item) => (
          <Box key={item.id} bg="blue.800" borderRadius="md" overflow="hidden" boxShadow="lg">
            <Image src={item.image} alt={item.title} objectFit="cover" height="200px" width="100%" />
            <Box p={5}>
              <Text fontSize="sm" mb={2}>
                {item.date}
              </Text>
              <Heading as="h3" size="md" mb={3}>
                {item.title}
              </Heading>
              <Text noOfLines={3}>{item.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LatestNews;
