import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbDataStructure from '../public/images/contents/blog-data-structures.png'
import thumbPublishWebsite from '../public/images/contents/blog-publish-website.jpg'
import thumb2MinuteRule from '../public/images/contents/blog-2-minute-rule.jpg'
import thumbMastersJourney from '../public/images/contents/blog-master-journey.jpg'

const Posts = () => (
  <Layout title="Blog Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Data Structure Tutorial"
            thumbnail={thumbDataStructure}
            href="https://github.com/fedpre/Data-Structure-Tutorial/blob/master/0-welcome.md"
          />
          <GridItem
            title="How to Publish a Website for FREE"
            thumbnail={thumbPublishWebsite}
            href="https://www.linkedin.com/pulse/how-publish-website-free-federico-pregnolato/"
          />
          <GridItem
            title="The 2-Minute Rule"
            thumbnail={thumb2MinuteRule}
            href="https://www.linkedin.com/pulse/2-minute-rule-federico-pregnolato/"
          />
          <GridItem
            title="The Master's Journey"
            thumbnail={thumbMastersJourney}
            href="https://www.linkedin.com/pulse/masters-journey-federico-pregnolato/"
          /> 
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
