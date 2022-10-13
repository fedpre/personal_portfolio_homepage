import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Financial Tracker">
      <Container>
        <Title>
          Financial Tracker - Notion <Badge>2021</Badge>
        </Title>
        <P>Manage all your finances in Notion. Easy way to track your income and expenses. Linked databases to keep track of year yearly net profit/loss. Flexible budgeting categories that connects to your expenses.

</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://fedpregnolato.gumroad.com/l/WMKec" target="_blank">
              Gumroad <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Notion Template</span>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link href="https://youtu.be/ZN7bvlKuLzw">
              Video walkthrough
              <ExternalLinkIcon mx="5px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/financial_tracker_notion_01.png"
          alt="Financial tracker web"
        />
        <WorkImage
          src="/images/works/financial_tracker_notion_02.jpg"
          alt="Financial tracker phone"
        />
      </Container>
    </Layout>
  )
}

export default Work
