import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Italy!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Federico Pregnolato
            </Heading>
            <p>Developer / Designer / Solutions Architect</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/federico.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Federico is a freelance and full-stack developer based in Rome with a passion for building digital products/services. He thrives on solving real-world problems and enjoys seeing a new project from planning to launch. When not coding, he tries new things and explores new fun stuff. 
            Follow me on my journey to discover tech, coding, engineering, and design. {' '}
            {/* <NextLink href="/portfolio/project1">
              <Link>Project 1</Link>
            </NextLink> */}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1992</BioYear>
            Born in Rome, Italy.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Studied Electronic Engineering at Rome Tre University - Rome
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the Fullstack Open course from Helsinki University -
            Finland
          </BioSection>
          {/* <BioSection>
            <BioYear style={{ opacity: 0 }}>2021</BioYear>
            Completed the Notion Certified User certification
          </BioSection> */}
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Bachelor&apos;s of Science in Business Management with
            Techonolgy emphasis at Brigham Young University - Idaho
          </BioSection>
          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Works as freelance
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ❤︎
          </Heading>
          <Paragraph>
            History, Travel, <Link href="/">Calisthenics</Link>, Photography,
            Machine Learning, Computer Science
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Follow me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/fedpre" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @fedpre
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/fed_pre" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @fed_pre
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/fdrprg/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @fdrprg
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/federicopregnolato/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Federico Pregnolato
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/channel/UCM6BEBd-x7GSsI5xqU_E91A"
              title="FeDEV"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/blog">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
          <Box align="center" my={4}>
           <span style={{ "color": "#444", "fontSize": "12px"}}>© 2022 Federico Pregnolato. All rights reserved.</span>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
