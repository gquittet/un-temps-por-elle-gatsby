import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { AnimatedChevronDown } from '../components/animated-chevron-down';
import { Header } from '../components/header';
import { Part } from '../components/part';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from '../components/link';

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
          <Header/>
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
        <Part id="contact">
          <Text
            as="h2"
            fontSize="4xl"
            textAlign="center"
            pt={10}
            fontFamily="Forte"
          >
            Contact
          </Text>
          <Center>
            <a
              href="https://v01dsOciTy.com"
              target="_blank"
              rel="noreferrer"
            >
              Made with ❤️ by Guillaume Quittet
            </a>
          </Center>
        </Part>
      </Box>
    </>
  );
}

export default IndexPage;
