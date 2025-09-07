import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './App.module.css'
import MapPage from '../Map/MapPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import ListPage from '@/pages/ListPage/ListPage'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/map" replace />} />
          
          <Route path='/map' element={<MapPage />} />
          <Route path='/list' element={<ListPage />} />

          <Route path='*' element={<Navigate to="/map" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}