import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'

const Blog = () => (
  <Layout title="Blog Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="/"
          />
          <GridItem
            title="My desk setup"
            thumbnail={thumbMyDeskSetup}
            href="/"
          />
          <GridItem
            title="How to Use Inkdrop"
            thumbnail={thumbHowToUseInkdrop}
            href="/"
          />
          <GridItem
            title="Build your Portfolio"
            thumbnail={thumbPortfolio}
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Blog
