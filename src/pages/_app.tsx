import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/global.scss'

import NProgress from 'nprogress'
import '../styles/nprogress.css'
import { Router } from 'next/router'

//Route Events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  
  )
}

export default MyApp
