import { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import SignatureCreator from "./components/SignatureCreator";
import HelpingLink from "./components/helping_link";
import Download from "./download/signatureDownload";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Prenom: "",
    Nom: "",
    Poste: "",
    Telephone: "",
    Telephone_bis: "",
    Adresse: "",
    Code_postal: "",
    Ville: "",
    Pays: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="page-Wrapper">
      <div className="constraint">
        <div className="grid">
          <Header />
          <Form formData={formData} onInputChange={handleInputChange} />
          <SignatureCreator formData={formData} />
          <Download formData={formData} />
          <HelpingLink />
        </div>
      </div>
    </div>
  );
}

export default App;
