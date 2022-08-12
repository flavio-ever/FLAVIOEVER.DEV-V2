import React from 'react'
import { GetStaticProps } from 'next'

import client from 'graphql/client'

import HomeTemplate, { HomeTemplateProps } from '../templates/Home'

import { GET_AUTHOR, GET_JOBS, GET_PROJECTS } from 'graphql/queries'

export default function HomePage({
  authorProps,
  jobsProps,
  projectsProps
}: HomeTemplateProps) {
  return (
    <HomeTemplate
      authorProps={authorProps}
      jobsProps={jobsProps}
      projectsProps={projectsProps}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { authors } = await client.request(GET_AUTHOR, { first: 1 })
  const { jobs } = await client.request(GET_JOBS)
  const { projects } = await client.request(GET_PROJECTS)
  console.log(projects)

  return {
    props: {
      authorProps: {
        title: authors[0].title,
        smartBio: authors[0].smallBio.html,
        largeBio: authors[0].largeBio.html,
        downloadUrl: authors[0].downloadUrl
      },
      jobsProps: jobs,
      projectsProps: projects
    }
  }
}
