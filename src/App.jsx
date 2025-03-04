import Home from "./pages/Home"
import SplashScreen from "./components/SplashScreen"
import "./App.css"
import React from "react";
import DetailsModalEntry from "./components/DetailsModalEntry";


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  //to open AND close the modal
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //to close the modal
  //const closeModal = () => {
  //  setIsModalOpen(false);
  //};

  return (
    <div className="App">
      <h1>something title thing</h1>
      <button onClick={openModal}>Open File</button>
      <DetailsModalEntry isOpen={isModalOpen} onClose={closeModal} />

      <div className="appContainer w-full min-h-[100vh]">
        <SplashScreen />
        <Home />
      </div>
    </div>


  );

  //ooopsie!
  //  return (
  //    <div className="appContainer w-full min-h-[100vh]">
  //      <SplashScreen />
  //      <Home />
  //    </div>
  //  );
}

export default App
