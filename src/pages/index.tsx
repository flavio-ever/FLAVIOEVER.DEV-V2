import React from 'react'
import { GetStaticProps } from 'next'

import client from 'graphql/client'

import HomeTemplate, { HomeTemplateProps } from '../templates/Home'

import { GET_AUTHOR } from 'graphql/queries'

export default function HomePage({ title, bio }: HomeTemplateProps) {
  return <HomeTemplate title={title} bio={bio} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { authors } = await client.request(GET_AUTHOR, { first: 1 })

  return {
    props: {
      title: authors[0].title,
      bio: authors[0].bio.html
    }
  }
}
