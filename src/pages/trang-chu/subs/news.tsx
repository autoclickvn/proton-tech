'use client';
import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { FaFileContract, FaGlobeAmericas, FaMobileAlt } from 'react-icons/fa';

const HomeNews: React.FC = () => {
  const SERVICE_DATA = [
    {
      title: 'Website',
      icon: FaGlobeAmericas
    },
    {
      title: 'Mobile App',
      icon: FaMobileAlt
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract
    }
  ];

  return (
    <Flex alignItems="center" flexDirection="column" my={80} px={80}>
      <Heading as="h5" fontSize={18} color="green">
        Tin tức
      </Heading>
      <Box w={16} h="px" bgColor="green" mt={1} />
      <Heading as="h4" fontSize={35} mt={3}>
        Cập nhật các thông tin mới về Công Nghệ
      </Heading>
      <Text mt={5} textAlign="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        <br />
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s
      </Text>

      <Flex w="full" gap={10} mt={10}>
        {SERVICE_DATA.map((item) => {
          const { icon, title } = item;
          return (
            <Button
              key={title}
              w="30%"
              flexDirection="column"
              h={60}
              bgColor="gray"
              border="1px solid #e6e6e6"
              borderRadius={4}
              gap={5}
            >
              <Icon as={icon} color="#38A169" fontSize={40} />
              <Text>{title}</Text>
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(HomeNews);
