import TopBar from "./components/TopBar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Leadership from "./components/Leadership"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

