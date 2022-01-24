import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Title from '../components/Title';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Title title="Hi, I'm NotReallyEight" />
      <Introduction />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
