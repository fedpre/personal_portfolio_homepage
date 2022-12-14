import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

// Change thumbnails with the ones I will use for my work
import thumbBetterBudgeting from '../public/images/works/betterbudget_02.png'
import thumbCrmStudent from '../public/images/works/crmstudent_02.png'
import thumbPhpMotors from '../public/images/works/phpmotors_01.png'
import thumbBankingApp from '../public/images/works/bankingapp_01.png'
import thumbFinanceTrackerNotion from '../public/images/works/financial_tracker_notion_01.png'

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
            <WorkGridItem
              id="crmstudent"
              title="CRM Student App"
              thumbnail={thumbCrmStudent}
              stack={["React", "Spring Boot", "PostgreSQL"]}
            >
              Customer software for higher education institution to register,
              retrieve, and track students.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="phpmotors"
              title="PHPMotors Website"
              thumbnail={thumbPhpMotors}
              stack={["PHP", "HTML", "CSS", "MySQL"]}
            >
              PHP-based website for a car dealer with advanced search and
              logistic management functionalities.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="bankingapp"
              title="Android Banking App"
              thumbnail={thumbBankingApp}
              stack={["Kotlin", "Firebase", "Firestore"]}
            >
              Banking app to help you manage your finances and stay withing your
              budget.
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
          <Section delay={0.3}>
            <WorkGridItem
              id="betterbudget"
              title="Better Budget"
              thumbnail={thumbBetterBudgeting}
              stack={["NodeJS", "React Native", "MongoDB"]}
            >
              Educational software for high school kids to learn good financial
              habits.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.8}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Digital Products
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="financialtrackernotion"
              title="Financial Tracker - Notion"
              thumbnail={thumbFinanceTrackerNotion}
              stack={["Notion Template"]}
            >
              Manage all your finances in Notion.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
