import { GetStaticProps } from 'next'
import client from 'graphql/client'
import HomeTemplate, { HomeTemplateProps } from '../templates/Home'

import {
  GET_AUTHOR,
  GET_CONTACT,
  GET_CAREER,
  GET_PROJECTS
} from 'graphql/queries'

export default function HomePage({
  authorProps,
  careerProps,
  projectsProps,
  contactProps
}: HomeTemplateProps) {
  return (
    <HomeTemplate
      authorProps={authorProps}
      careerProps={careerProps}
      projectsProps={projectsProps}
      contactProps={contactProps}
    />
  )
}

const graphQlAdapter = (
  authors: any[],
  careers: any[],
  projects: any[],
  contacts: any[]
): HomeTemplateProps => {
  const author = authors[0]
  const contact = contacts[0]

  return {
    authorProps: {
      title: author.title,
      smartBio: author.smallBio.html,
      downloadUrl: author.downloadUrl
    },
    careerProps: careers,
    projectsProps: projects,
    contactProps: {
      description: contact.description.html,
      contactUrl: contact.contactUrl
    }
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const { authors } = await client.request(GET_AUTHOR, { first: 1 })
  const { careers } = await client.request(GET_CAREER)
  const { projects } = await client.request(GET_PROJECTS)
  const { contacts } = await client.request(GET_CONTACT)

  return {
    revalidate: 60, // ISR  https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    props: graphQlAdapter(authors, careers, projects, contacts)
  }
}
