// When navigating always scrolling up
import { useEffect } from 'react'
import { useLocation } from 'react-router'

interface ScrollToTopProps {
  children: React.ReactNode
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location])

  return <>{children}</>
}

export default ScrollToTop
