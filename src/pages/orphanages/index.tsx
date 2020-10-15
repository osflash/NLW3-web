import React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const CreateOrphanage = dynamic(
  () => import('../../components/CreateOrphanage'),
  {
    ssr: false
  }
)

const orphanages: NextPage = () => {
  return <CreateOrphanage />
}

export default orphanages
