import React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const OrphanagesMap = dynamic(() => import('../components/OrphanagesMap'), {
  ssr: false
})

const App: NextPage = () => {
  return <OrphanagesMap />
}

export default App
