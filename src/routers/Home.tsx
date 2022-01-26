import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HomeIntroduction from '../components/HomeIntroduction';
import Title from '../components/Title';

function Home() {
  return (
    <div className="Home">
      <Title title="Hi, I'm NotReallyEight" />
      <HomeIntroduction />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
