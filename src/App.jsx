import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsSection from './components/BrandsSection'
import ModelsSection from './components/ModelsSection'
import PromoSection from './components/PromoSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState(null)
  const showError = useCallback((msg) => setToast(msg), [])

  return (
    <>
      <Navbar />
      <Hero onError={showError} />
      <BrandsSection />
      <ModelsSection onError={showError} />
      <PromoSection onError={showError} />
      <FeaturesSection />
      <Footer />
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
    </>
  )
}
