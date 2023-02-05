'use client';
import ButtonPrimary from '@/components/button-primary';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from 'react-icons/fa';
import Typed from 'react-typed';
// import BgIntro from '../images/bg-intro.jpg';
import LogoIntro from '../images/logo-intro.png';

const HomeIntro: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={32}
      bgImage={`url(https://img.freepik.com/free-vector/blue-background-with-particles-wave_1017-33654.jpg?w=1480&t=st=1675610315~exp=1675610915~hmac=61c5c294ccab44e47d5768b9e6f9a0dae375b7f6f94d815f97ac43bbda807289)`}
      bgSize="cover"
      backgroundRepeat="no-repeat"
      pos="relative"
      py={20}
    >
      <Box
        pos="absolute"
        w="full"
        h="full"
        bgGradient="linear(to-r, #1B0738, #0E0625, #1E0739)"
        opacity={0.85}
        top={0}
        left={0}
        zIndex={5}
      />
      <Flex w="50%" py={60} direction="column" align="flex-end" zIndex={10}>
        <Heading
          as="h2"
          fontWeight={700}
          fontSize={54}
          color="#FFF"
          lineHeight={{ xs: '55px', '2xl': '60px' }}
          letterSpacing={1}
        >
          Proton <Typed strings={['Tech ', 'Studio ', 'Blog ']} typeSpeed={150} backSpeed={150} loop />
        </Heading>

        <ButtonPrimary title="Khám phá ngay" rightIcon={<FaArrowRight />} mt={16} />
      </Flex>

      <Flex w="50%" align="center" justify="flex-start" pr={32} zIndex={10}>
        <Image src={LogoIntro} alt="logo intro proton tech" width={250} height={400} />
      </Flex>
    </Flex>
  );
};

export default memo(HomeIntro);
