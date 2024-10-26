import "../styles/SignatureCreator.css";
import React, { useRef } from "react";

function SignatureCreator({ formData }) {
  const containerRef = useRef();
  return (
    <div className="organisation">
      <h2 className="text-center">Preview</h2>
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      style={{
        maxWidth: "600px",
        fontFamily: "Montserrat, sans-serif",
        color: "#00007e",
      }}
    >
      <tbody ref={containerRef}>
        <tr>
          {/* Section Image */}
          <td width="150" valign="top" style={{ paddingRight: "20px" }}>
            <img
              src="https://i.imgur.com/0fbQr7h.gif"
              alt="Logo"
              style={{
                border: 0,
                display: "block",
                width: "128px",
                height: "154px",
                objectFit: "cover",
              }}
            />
          </td>

          {/* Section Texte */}
          <td valign="top" style={{ color: "#00007e", lineHeight: "1.5" }}>
            <h2 style={{ marginTop: "3px", fontSize: "14px", fontWeight: "bold", margin: 0 }}>
              {formData.Prenom || "Juste"} {formData.Nom || "Le Blanc"}
            </h2>
            <p style={{ margin: "5px 0", fontSize: "12px" }}>
              {formData.Poste ||
                "Chargé de communication événementielle / Event communication Officer"}
            </p>
            <p style={{ margin: "5px 0", fontSize: "12px" }}>
              <strong>
                {formData.Agence || "Agence française de développement"}
              </strong>
            </p>
            <p style={{ fontSize: "12px" }}>
              <a
                href={`tel:${formData.Telephone || "+33(0)766461608"}`}
                style={{ color: "#000093", textDecoration: "none" }}
              >
                {formData.Telephone || "+33 (0)7 66 46 16 08"}
              </a>
              <br />
              {formData.Adresse || "32 rue notre dame des victoires"} –{" "}
              {formData.Code_postal || 75002} {formData.Ville || "Paris"},{" "}
              {formData.Pays || "France"}
              <br />
              <a
                href={formData.Website || "http://www.expertisefrance.fr"}
                target="_blank"
                style={{ color: "#000093", textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                {formData.Website || "www.expertisefrance.fr"}
              </a>
            </p>
          </td>
        </tr>

        {/* Section Bas de page */}
        <tr>
          <td
            colSpan="2"
            style={{
              paddingTop: "10px",
              fontFamily: "Verdana, sans-serif",
              fontSize: "12px",
              color: "#000093",
              lineHeight: "1.4",
            }}
          >
            <p style={{ margin: 0 }}>
              POUR SUIVRE L'ÉMISSION SPÉCIALE DES 10 ANS #EF10 INSCRIVEZ-VOUS
              <a
                href="https://www.expertisefrance10ans.fr/v/begin?ref=onremote&lang=en"
                style={{ color: "#000093", textDecoration: "none" }}
              >
                {" "}
                ICI
              </a>
              .<br />
              TO WATCH THE 10-YEAR ANNIVERSARY SPECIAL #EF10 REGISTER
              <a
                href="https://www.expertisefrance10ans.fr/v/begin?ref=onremote&lang=fr"
                style={{ color: "#000093", textDecoration: "none" }}
              >
                {" "}
                HERE
              </a>
              .
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default SignatureCreator;
