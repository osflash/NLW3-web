import React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import ImageModel from '../../models/Image'
import OrphanageModel from '../../models/Orphanage'
import api from '../../services/api'

interface Image extends ImageModel {
  url: string
}

interface ExtentionOrphanage extends OrphanageModel {
  images: Image[]
}

interface OrphanageProps {
  orphanage: ExtentionOrphanage
}

const Orphanage = dynamic(() => import('../../components/Orphanage'), {
  ssr: false
})

const OrphanageApp: NextPage<OrphanageProps> = ({ orphanage }) => {
  return <Orphanage orphanage={orphanage} />
}

OrphanageApp.getInitialProps = async ({ res, query }) => {
  const { id } = query

  try {
    const { data } = await api.get(`api/orphanages/${id}`)

    return { orphanage: data }
  } catch (error) {
    if (res) {
      res.writeHead(301, {
        Location: '/app'
      })

      res.end()
    }
  }
}

export default OrphanageApp
