import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Banking App">
      <Container>
        <Title>
          Banking App <Badge>2022</Badge>
        </Title>
        <P>
          The Banking app developed for Android in Kotlin has the purpose to
          help you manage and keep track of your finances. The user creates a
          new account, or login into an existing one, and start using the app
          right away. The main dashboard shows the balance and a list of
          transactions that the user has done. Through the navigation at the
          bottom, the user can go to the operations tab to deposit or withdraw
          money, assign it to a specific category, choose the date, and record
          the transaction. Both users and transactions are recorded on Firebase.
          The cloud database helps manage authentication and storing data for
          later use.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              href="https://github.com/fedpre/android-banking-app"
              target="_blank"
            >
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Kotlin, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link href="https://youtu.be/S2m8b0olvZM">
              Video walkthrough
              <ExternalLinkIcon mx="5px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/bankingapp_01.png" alt="Project 1" />
      </Container>
    </Layout>
  )
}

export default Work
