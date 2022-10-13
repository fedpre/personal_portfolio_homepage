import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

// Change thumbnails with the ones I will use for my work
import thumbProject1 from '../public/images/placeholder.png'
import thumbProject2 from '../public/images/placeholder.png'

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
            <WorkGridItem id="project1" title="project1" thumbnail={thumbProject1}>
              Description of project 1
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="project2"
              title="project2"
              thumbnail={thumbProject2}
            >
              Description of project 2
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
            <WorkGridItem id="project1" title="project1" thumbnail={thumbProject1}>
              Description of the project
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="project2"
              title="project2"
              thumbnail={thumbProject2}
            >
              Description of project 2
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
