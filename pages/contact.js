import { Container, Heading } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { Meta } from '../components/work'



const Contact = () => (
  <Layout title="Contact">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Contact
      </Heading>
      <Section delay={0.3}>
         <Meta>Twitter</Meta>
      </Section>
    </Container>
  </Layout>

)

export default Contact