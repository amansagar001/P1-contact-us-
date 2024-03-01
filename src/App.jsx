import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
// rafce -->snippet
function App() {
  return (
    <>
      <div>
        <Navigation />
        <ContactHeader />
        <main className="main_container">
          <ContactForm />
        </main>
      </div>
    </>
  );
}

export default App;
