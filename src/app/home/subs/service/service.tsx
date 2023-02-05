'use client';
import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useState } from 'react';
import { FaAdversal, FaFileContract, FaGlobeAmericas, FaMobileAlt, FaThLarge } from 'react-icons/fa';

const HomeService: React.FC = () => {
  const [service, setService] = useState('website');

  const SERVICE_DATA = [
    {
      title: 'Website',
      icon: FaGlobeAmericas,
      service: 'website'
    },
    {
      title: 'Mobile App',
      icon: FaMobileAlt,
      service: 'mobile-app'
    },
    {
      title: 'Content Marketing',
      icon: FaFileContract,
      service: 'content-marketing'
    },
    {
      title: 'Advertising',
      icon: FaAdversal,
      service: 'ads'
    },
    {
      title: 'Khác',
      icon: FaThLarge,
      service: 'other'
    },
    {
      title: 'Khác2',
      icon: FaThLarge,
      service: 'other2'
    }
  ];

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      mt={60}
      px={60}
      bgGradient="linear(to-r, #1B0738, #0E0625, #1E0739)"
      py={20}
    >
      <Heading as="h4" fontSize={35} mt={3} color="#FAFBFB">
        Proton Service - Dịch vụ tiện ích về Công Nghệ
      </Heading>
      <Text mt={5} fontSize={20} textAlign="center" color="text.2">
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry dummy text ever since the 1500s
      </Text>

      <Flex w="full" columnGap={20} rowGap={28} mt={28} flexWrap="wrap">
        {SERVICE_DATA.map((item) => {
          const { icon, title, service } = item;
          return (
            <Flex key={title} w="28%" direction="column" borderRadius={4} gap={10} align="center">
              <Flex w={20} h={20} bgColor="#10194D" borderRadius={5} justify="center" align="center">
                <Icon as={icon} color="#4A6CF7" fontSize={40} />
              </Flex>
              <Link href={`/service/${service}`}>
                <Heading as="h3" fontSize={24} letterSpacing={0.5} color="#ccc" textAlign="center">
                  {title}
                </Heading>
              </Link>
              <Text fontSize={18} letterSpacing={0.5} color="text.2" textAlign="center">
                Lorem Ipsum is simply dummy text of the printing text of the printing
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(HomeService);
