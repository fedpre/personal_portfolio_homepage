import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPost1 from '../public/images/placeholder.png'
import thumbPost2 from '../public/images/placeholder.png'
import thumbPost3 from '../public/images/placeholder.png'
import thumbPost4 from '../public/images/placeholder.png'

const Blog = () => (
  <Layout title="Blog Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Post 1"
            thumbnail={thumbPost1}
            href="/"
          />
          <GridItem
            title="Post 2"
            thumbnail={thumbPost2}
            href="/"
          />
          <GridItem
            title="Post 3"
            thumbnail={thumbPost3}
            href="/"
          />
          <GridItem
            title="Post 4"
            thumbnail={thumbPost4}
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Blog
