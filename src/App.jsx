import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Comparison from './pages/Comparison'
import Review from './pages/Review'
import BestFor from './pages/BestFor'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import AffiliateDisclosure from './pages/AffiliateDisclosure'
import EditorialGuidelines from './pages/EditorialGuidelines'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppShell() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semrush-vs-ahrefs" element={<Comparison />} />
          <Route path="/semrush-review" element={<Review />} />
          <Route path="/best-seo-tool-small-business" element={<BestFor />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/editorial-guidelines" element={<EditorialGuidelines />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
