import "../styles/form.css";

function form({ formData, onInputChange }) {
  return (
    <form className="placement" autoComplete="off">
      <h4 className="text-center">Fill your data below </h4>
      <div className="form-field">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="prenom"
          onChange={(e) => onInputChange("Prenom", e.target.value)}
          required
          placeholder="your name"
        />
      </div>
      <div className="form-field">
        <label className="form-label">Last name</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="nom"
          onChange={(e) => onInputChange("Nom", e.target.value)}
          required
          placeholder="your Last name"
        />
      </div>
      <div className="form-field">
        <label className="form-label">Job</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="Poste"
          onChange={(e) => onInputChange("Poste", e.target.value)}
          required
          placeholder="your Job"
        />
      </div>
      <div className="form-field">
        <label className="form-label">Phone</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="Telephone"
          onChange={(e) => onInputChange("Telephone", e.target.value)}
          required
          placeholder="your Phone"
        />
      </div>
      
      <div className="form-field">
        <label className="form-label">Address</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="Adresse"
          onChange={(e) => onInputChange("Adresse", e.target.value)}
          required
          placeholder="your Address"
        />
      </div>
      <div className="form-field">
        <label className="form-label">postal code</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="Code_postal"
          onChange={(e) => onInputChange("Code_postal", e.target.value)}
          required
          placeholder="your postal code"
        />
      </div>
      <div className="form-field">
        <label className="form-label">City</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="Ville"
          onChange={(e) => onInputChange("Ville", e.target.value)}
          required
          placeholder="your City"
        />
      </div>
      <div className="form-field">
        <label className="form-label">Country</label>
        <input
          className="form-input"
          autoComplete="off"
          type="text"
          data-name="Pays"
          onChange={(e) => onInputChange("Pays", e.target.value)}
          required
          placeholder="your Country"
        />
      </div>
    </form>
  );
}

export default form;
