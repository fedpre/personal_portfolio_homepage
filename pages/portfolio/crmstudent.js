import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="CRM Student App">
      <Container>
        <Title>
          CRM Student App <Badge>2021</Badge>
        </Title>
        <P>Description of the project</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link
              href="https://github.com/fedpre/CRM-spring-boot-react"
              target="_blank"
            >
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Spring Boot, PostgreSQL, React</span>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link href="https://www.youtube.com/watch?v=73VZi1gOeiI">
              Video walkthrough
              <ExternalLinkIcon mx="5px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/crmstudent_02.png" alt="Project 1" />
        <WorkImage src="/images/works/crmstudent_01.png" alt="Project 1" />
      </Container>
    </Layout>
  )
}

export default Work
