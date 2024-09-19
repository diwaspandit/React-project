import { Box, Image, Text, Heading, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import image1 from '../Assets/media/media1.jpg';
import image2 from '../Assets/media/media2.jpg';
import image3 from '../Assets/media/media3.jpg';
import image4 from '../Assets/media/media4.jpg';
import image5 from '../Assets/media/media5.jpg';
import image6 from '../Assets/media/media6.jpg';
import image7 from '../Assets/media/media7.jpg';
import image8 from '../Assets/media/media8.jpg';
import image9 from '../Assets/media/media9.jpg';
import image10 from '../Assets/media/media10.jpg';
import image11 from '../Assets/media/media11.jpg';
import image12 from '../Assets/media/media12.jpg';
import image13 from '../Assets/media/media13.jpg';
import image14 from '../Assets/media/media14.jpg';
import image15 from '../Assets/media/media15.jpg';
import image16 from '../Assets/media/media16.jpg';
import image17 from '../Assets/media/media17.jpg';
import image18 from '../Assets/media/media18.jpg';
import image19 from '../Assets/media/media19.jpg';
import image20 from '../Assets/media/media20.jpg';
import image21 from '../Assets/media/media21.jpg';
import { NavLink } from "react-router-dom";


const LatestMedia = ({ limit }) => {
  // Example news data, replace this with your actual data
  const mediaItems = [
    {
      id: 1,
      image: image1, // Replace with actual image URLs
      date: "August 16, 2021",
      title: "Big data-derived tool facilitates closer monitoring of recovery from natural disasters",
      description: "National Science Foundation",
    },
    {
      id: 2,
      image: image2, // Replace with actual image URLs
      date: "May 12, 2021",
      title: "Covid-19 and the bushfire season",
      description: "Saturday Paper (Australian Media)",
    },
    {
      id: 3,
      image: image3, // Replace with actual image URLs
      date: "November 1, 2020",
      title: "Proposed ‘contagion’ model predicts roadway flooding in urban areas",
      description: "ASCE Civil Engineering Magazine",
    },
    {
      id: 4,
      image: image4,
      date: "October 1, 2020",
      title: "Deep Learning Model Predicts COVID-19 Surges 7 Days into the Future",
      description: "Health IT Analytics"
    },
    {
      id: 5,
      image: image5,
      date: "October 1, 2020",
      title: "Using AI and big data to predict the future spread of COVID-19 cases",
      description: "Medical News"
    },
    {
      id: 6,
      image: image6,
      date: "October 1, 2020",
      title: "Texas A&M predicting COVID-19 spread with deep-learning model",
      description: "EdScoop"
    },
    {
      id: 7,
      image: image7,
      date: "August 5, 2020",
      title: "Hurricanes and wildfires are colliding with the COVID-19 pandemic and compounding the risks",
      description: "Government Executive"
    },
    {
      id: 8,
      image: image8,
      date: "April 5, 2020",
      title: "Real-Time Data Can Save Lives in a Disaster",
      description: "FreeThink"
    },
    {
      id: 9,
      image: image9,
      date: "March 5, 2020",
      title: "Researchers develop flood prediction tool",
      description: "National Science Foundation News (featured on NSF front page)"
    },
    {
      id: 10,
      image: image10,
      date: "February 5, 2020",
      title: "Complaining about climate change on Twitter might actually help scientists",
      description: "Quartz"
    },
    {
      id: 11,
      image: image11,
      date: "August 5, 2019",
      title: "In Houston, Thousands Continue to Wait for Harvey Relief Money",
      description: "Texas Observer"
    },
    {
      id: 12,
      image: image12,
      date: "May 5, 2019",
      title: "Create a solution in response to wildfires while keeping sensitive data safe",
      description: "IBM Blog"
    },
    {
      id: 13,
      image: image13,
      date: "September 5, 2018",
      title: "Texas A&M awarded $2M grant for flood, human response research",
      description: "The Eagle"
    },
    {
      id: 14,
      image: image14,
      date: "September 5, 2018",
      title: "FEMA Has Funded Less Than One Percent Of Harvey Infrastructure Projects",
      description: "Texas Standard"
    },
    {
      id: 15,
      image: image15,
      date: "September 5, 2018",
      title: "Better coordination networks to strengthen interdependent infrastructure resilience",
      description: "National Science Foundation"
    },
    {
      id: 16,
      image: image16,
      date: "September 5, 2018",
      title: "Texas A&M’s Disaster IQ App Helps Improve Disaster Response",
      description: "EDM Digest"
    },
    {
      id: 17,
      image: image17,
      date: "August 5, 2018",
      title: "Texas A&M University’s 12th Man Spirit Defeats Natural Disasters",
      description: "US News"
    },
    {
      id: 18,
      image: image18,
      date: "August 5, 2018",
      title: "If you shelter in place during a disaster, be ready for challenges after the storm",
      description: "Public Radio International (PRI)"
    },
    {
      id: 19,
      image: image19,
      date: "June 5, 2018",
      title: "Why another hurricane can devastate Puerto Rico and Texas—again",
      description: "Engineering News Record"
    },
    {
      id: 20,
      image: image20,
      date: "November 5, 2017",
      title: "Texas A&M professor advises Congress on windstorm issues",
      description: "The Battalion"
    },
    {
      id: 21,
      image: image21,
      date: "October 5, 2017",
      title: "After Harvey: Texas A&M System researchers awarded $1.2M, tasked with collecting data to analyze impact of storm",
      description: "The Eagle"
    }
    // Add more items as needed
  ];

  // Only get the number of items based on the 'limit' prop
  const limitedMediaItems = mediaItems.slice(0, limit);

  return (
    <Box py={10} px={5} bg="blue.900" color="white">
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h2" size="lg" color="white">
          Media
        </Heading>
        <NavLink to="/Media">
          <Button variant="outline" colorScheme="teal">
            See all medias →
          </Button>
        </NavLink>
      </Flex>

      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        {limitedMediaItems.map((item) => (
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

export default LatestMedia;
