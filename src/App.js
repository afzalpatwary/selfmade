
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/about/About';
import CommonHeader from './Components/commonHeader/CommonHeader';
// import Features from './Components/features/Features';
import Footer from './Components/footer/Footer';
import LoginForm from './Components/form/LoginForm';
import StepFormMain from './Components/form/StepFormMain';
import StepThree from './Components/form/StepThree';
import Header from './Components/header/Header'
import State from './Components/state/State';
import Testimonial from './Components/testimonial/Testimonial';
import CaseDetails from './Pages/caseDetails/CaseDetails';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import SingUp from './Pages/SingUp';


function App() {

  return (
    <div>
      <BrowserRouter basename='/react-selfmade'>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />

          {/* <Route index element={} /> */}
          <Route path="home" element={<Home />} />
          <Route path="singUp" element={<StepThree />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="stepFormMain" element={<StepFormMain />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
          <Route path="about" element={<About SecHeader={
            <CommonHeader
              SectionTag='ABOUT US'
              SectionTitle='Your Business Bestie'
              addClass={"mb-4"}
              SectionIntro2='Selfmade is a membership geared at giving women the tools, resources, community, and coaching they need to get started on their ventures. With us by your side, you can launch your business ideas or grow your existing business.'
              tagClass={"d-inline-block"}
            />
          }
          />} />
          <Route path="product" element={<Product />} />
          <Route path="/features" element={<SingUp />} />
          <Route path="/price" element={<StepThree />} />
          <Route path="/testimonial" element={<Testimonial SecHeader={
            <CommonHeader
              SectionTag='TESTIMONIAL'
              SectionTitle='Selfmade Makes a Difference'
              addClass={"text-center mb-4"}
              tagClass={"d-inline-block"}
            />
          } />} />
          <Route path="state" element={<State />} />
          <Route path="caseDetails/:caseId" element={<CaseDetails />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
