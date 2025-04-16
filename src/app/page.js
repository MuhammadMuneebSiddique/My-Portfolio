import Footer from "/src/components/footer";
import Header from "/src/components/header";
import About from "/src/pages/aboutPage/page";
import Contact from "/src/pages/contactPage/page";
import LandingPage from "/src/pages/landingPage/page";
import Project from "/src/pages/projectPage/page";
import Skill from "/src/pages/skillPage/page";


export default function Home() {
  return (
    <>
      <Header/>
      <LandingPage/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}
