import React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Orphanage from '../models/Orphanage'
import api from '../services/api'

interface OrphanagesMapProps {
  orphanages?: Orphanage[]
}

const OrphanagesMap = dynamic(() => import('../components/OrphanagesMap'), {
  ssr: false
})

const App: NextPage<OrphanagesMapProps> = ({ orphanages }) => {
  return <OrphanagesMap orphanages={orphanages} />
}

App.getInitialProps = async () => {
  const { data } = await api.get<Orphanage[]>('api/orphanages')

  return { orphanages: data }
}

export default App
