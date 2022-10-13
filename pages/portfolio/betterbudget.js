import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Better Budgeting">
      <Container>
        <Title>
          Better Budgeting <Badge>2021</Badge>
        </Title>
        <P>
        A financial learning mobile & web application to teach youth about budgeting and investing. Built using React Native on top of a Node.js backend, connected to a MongoDB database. Developed by a team of 3 engineers.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/fedpre/financial_app_react_native" target="_blank">
            GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React Native, MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link href="https://www.youtube.com/watch?v=YcB7ZZliagA" target="_blank">
            Video walkthrough 
              <ExternalLinkIcon mx="5px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/betterbudget_02.png" alt="Better Budget" />
        <WorkImage src="/images/works/betterbudget_01.png" alt="Better Budget" />
      </Container>
    </Layout>
  )
}

export default Work
