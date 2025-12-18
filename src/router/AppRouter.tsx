import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loading from '@/pages/Loading'

const Landing = lazy(() => import('@/pages/Landing'))
const ArtePlus = lazy(() => import('@/pages/locations/ArtePlus'))
const Astrum = lazy(() => import('@/pages/locations/Astrum'))
const BoheyDulang = lazy(() => import('@/pages/locations/BoheyDulang'))

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/locations/arte-plus" element={<ArtePlus />} />
        <Route path="/locations/astrum" element={<Astrum />} />
        <Route path="/locations/bohey-dulang" element={<BoheyDulang />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter


