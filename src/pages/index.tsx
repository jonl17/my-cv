import type { GetStaticProps, NextPage } from 'next'
import { createClient } from '../../prismicio'
import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

type Props = {
  homepage: Content.HomepageDocument
}

const Home: NextPage<Props> = ({ homepage }) => {
  return (
    <div className="p-5 lg:p-10">
      <div className="lg:flex justify-between">
        <h1 className="text-3xl mb-5">Jón Gabríel Lorange</h1>
        <h1>Curriculum Vitae 2022</h1>
      </div>

      <SliceZone slices={homepage.data.slices} components={components} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const homepage = await client.getSingle<Content.HomepageDocument>('homepage')

  return {
    props: {
      homepage,
    },
  }
}
