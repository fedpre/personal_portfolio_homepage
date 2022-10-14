import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="PHP Motors">
      <Container>
        <Title>
          PHP Motors<Badge>2022</Badge>
        </Title>
        <P>
        PHP-based website for a car dealer with advanced search and logistic management functionalities. It implements a MySQL database to store user credentials, available stock, and deals creation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/fedpre/phpmotors" target="_blank">
            GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web app</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, HTML, CSS, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link href="https://youtu.be/izu-hQumjqU">
              Video walkthrough
              <ExternalLinkIcon mx="5px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/phpmotors_01.png" alt="Project 1" />
        <WorkImage src="/images/works/phpmotors_02.png" alt="Project 1" />
      </Container>
    </Layout>
  )
}

export default Work
