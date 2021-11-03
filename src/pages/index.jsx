import { Box, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { AnimatedChevronDown } from '../components/animated-chevron-down';
import { Header } from '../components/header';
import { Part } from '../components/part';

// markup
function IndexPage() {
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
            <Heading
              as="h1"
              textAlign="center"
              pt={20}
            >
              {data?.site?.siteMetadata?.title}
            </Heading>
          </div>
          {/*<StaticImage*/}
          {/*  width="20em"*/}
          {/*  src='../images/logo.jpg'*/}
          {/*  alt='Logo principal'*/}
          {/*/>*/}
          <AnimatedChevronDown />
        </Part>
        <Part id="nos-soins" color="blue">2.</Part>
        <Part id="tarifs" color="brown">3.</Part>
        <Part id="contact" color="yellow">4.</Part>
      </Box>
    </>
  );
}

export default IndexPage;
