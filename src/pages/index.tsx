import React from 'react'
import { GetStaticProps } from 'next'

import client from 'graphql/client'

import HomeTemplate, { HomeTemplateProps } from '../templates/Home'

import {
  GET_AUTHOR,
  GET_CONTACT,
  GET_JOBS,
  GET_PROJECTS
} from 'graphql/queries'
import { useRouter } from 'next/router'

export default function HomePage({
  authorProps,
  jobsProps,
  projectsProps,
  contactProps
}: HomeTemplateProps) {
  const router = useRouter()

  // retorna loading enquanto está sendo criado
  if (router.isFallback) return null

  return (
    <HomeTemplate
      authorProps={authorProps}
      jobsProps={jobsProps}
      projectsProps={projectsProps}
      contactProps={contactProps}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { authors } = await client.request(GET_AUTHOR, { first: 1 })
  const { jobs } = await client.request(GET_JOBS)
  const { projects } = await client.request(GET_PROJECTS)
  const { contacts } = await client.request(GET_CONTACT)

  const props = {
    authorProps: {
      title: authors[0]?.title || '',
      smartBio: authors[0]?.smallBio.html || '',
      largeBio: authors[0]?.largeBio.html || '',
      downloadUrl: authors[0]?.downloadUrl || ''
    },
    jobsProps: jobs,
    projectsProps: projects,
    contactProps: {
      description: contacts[0]?.description.html || '',
      contactUrl: contacts[0]?.contactUrl || ''
    }
  }

  return {
    revalidate: 60, // ISR  https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    props
  }
}
