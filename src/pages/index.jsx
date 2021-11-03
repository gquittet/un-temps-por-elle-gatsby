import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { AnimatedChevronDown } from '../components/animated-chevron-down';
import { Header } from '../components/header';
import { Part } from '../components/part';
import { StaticImage } from 'gatsby-plugin-image';

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
            <Heading
              as="h1"
              size="2xl"
              textAlign="center"
              pt={20}
              fontFamily="Forte"
            >
              {data?.site?.siteMetadata?.title}
            </Heading>
          </div>
          <Center pt={20} pb={10}>
            <Box w="75%" h="75%" textAlign="center">
              <StaticImage
                src='../images/logo.jpg'
                alt='Logo principal'
              />
            </Box>
          </Center>
          <Center>
            <Text
              fontSize="lg"
              pt={10}
            >
                            Soins de Bien-être － Soins esthétiques
            </Text>
          </Center>
          <AnimatedChevronDown pt="3rem"/>
        </Part>
        <Part id="nos-soins" color="blue">2.</Part>
        <Part id="tarifs" color="brown">3.</Part>
        <Part id="contact">
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            pt={20}
            fontFamily="Forte"
          >
                        Contact
          </Heading>
        </Part>
      </Box>
    </>
  );
}

export default IndexPage;
