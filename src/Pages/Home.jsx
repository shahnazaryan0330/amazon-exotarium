import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import AboutUs from '../components/About/AboutUs';
import News from '../components/News/News';
import Animals from '../components/Animals/Animals';
import TicketInfo from '../components/TicketInfo/TicketInfo';
import Footer from '../components/Footer/Footer';

export default function Home() {
   return(
      <>
         <Header />
         <Navigation />
         <AboutUs fullContent={false}/>
         <News/>
         <Animals/>
         <TicketInfo/>
         <Footer/>
      </>
   )
}