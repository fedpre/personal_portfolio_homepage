import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

// Change thumbnails with the ones I will use for my work
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Portfolio
        </Heading>
        {/* Change the thumbnails, titles, and descriptions to reflect my work */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="Walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="Walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="Walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.5}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaboration
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="Walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
