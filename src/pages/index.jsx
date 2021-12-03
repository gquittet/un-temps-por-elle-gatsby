import { Box, Button, Center, Icon, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { AnimatedChevronDown } from '../components/animated-chevron-down';
import { Header } from '../components/header';
import { ContactButton } from '../components/contact-button';
import { Part } from '../components/part';
import { StaticImage } from 'gatsby-plugin-image';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaWaze } from '@react-icons/all-files/fa/FaWaze';

// markup
function IndexPage() {
  // noinspection GraphQLUnresolvedReference
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Box
        as="main"
        w="100%"
        h="100vh"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          overflowY: 'scroll',
        }}
      >
        <Part id="accueil" color="white">
          <Header />
          <div>
            <Text
              as="h1"
              fontSize="4xl"
              textAlign="center"
              pt={10}
              fontFamily="Forte"
            >
              {data?.site?.siteMetadata?.title}
            </Text>
          </div>
          <Center pt={5} pb={5}>
            <Box w="15rem" textAlign="center">
              <StaticImage
                src='../images/logo.jpg'
                alt='Logo principal'
              />
            </Box>
          </Center>
          <Center>
            <Text
              fontSize="lg"
              pt={5}
            >
              Soins de Bien-être － Soins esthétiques
            </Text>
          </Center>
          <AnimatedChevronDown pt={5}/>
        </Part>

        <Part id="nos-soins" color="blue">
          <Header />
          <Text
            as="h2"
            fontSize="4xl"
            textAlign="center"
            pt={10}
            fontFamily="Forte"
          >
            Nos soins
          </Text>
        </Part>

        <Part id="tarifs" color="brown">
          <Header />
          <Text
            as="h2"
            fontSize="4xl"
            textAlign="center"
            pt={10}
            fontFamily="Forte"
          >
            Tarifs
          </Text>
        </Part>

        <Part id="contact" h="full">
          <Header />
          <Text
            as="h2"
            fontSize="4xl"
            textAlign="center"
            pt={10}
            fontFamily="Forte"
          >
            Contact
          </Text>
          <ContactButton
            pt={5}
            icon={<FaPhoneAlt />}
            colorScheme="blackAlpha"
            text="0478/12.66.59"
            uri="tel:+32478126659"
          />
          <ContactButton
            pt={5}
            icon={<FaFacebook />}
            colorScheme="facebook"
            text="Ou via Facebook"
            uri="https://www.facebook.com/francoisegaillez.untempsporelle"
          />
          <ContactButton
            pt={5}
            icon={<FaWaze />}
            colorScheme="blue"
            text="Venez nous rendre visite"
            uri="http://waze.com/ul?ll=50.408968804122246,4.166313420679421"
          />
          <Box pos="relative" h="36vh">
            <Center pos="absolute" bottom="0" left="0" right="0">
              <a
                href="https://v01dsOciTy.com"
                target="_blank"
                rel="noreferrer"
              >
                Made with ❤️ by Guillaume Quittet
              </a>
            </Center>
          </Box>
        </Part>
      </Box>
    </>
  );
}

export default IndexPage;
