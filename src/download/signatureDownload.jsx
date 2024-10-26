import React from 'react';
import "../styles/SignatureCreator.css";

function SignatureCreator({ formData }) {
  const createHTMLFile = () => {
      const regex = /^(?=[\s\S]{0,100}$)[\p{L}\p{M}0-9\s'.,-]*$/u;
      for (const elements in formData) {
        if (formData[elements] === "") {
          console.log(formData[elements] + elements + " is empty");
        }
        if (!regex.test(formData[elements])) {
          alert("Please enter a valid input for " + elements + " field");
          return;
        } 
      }
    const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Signature</title>
        <style>
          body {
            font-family: Montserrat, sans-serif;
            color: #00007e;
          }
          table {
            max-width: 600px;
            width: 100%;
          }
          td {
            vertical-align: top;
          }
          .logo {
            width: 128px;
            height: 154px;
            object-fit: contain;
          }
          .text-section h2 {
            font-size: 16px;
            font-weight: bold;
            margin: 0;
          }
          .text-section p {
            margin: 5px 0;
            font-size: 14px;
          }
          .contact-info a {
            color: #000093;
            text-decoration: none;
          }
          .footer p {
            margin: 0;
            font-family: Verdana, sans-serif;
            font-size: 12px;
            color: #000093;
            line-height: 1.4;
          }
          .footer a {
            color: #000093;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <table border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td width="128px" height="154px" style="padding-right: 20px">
                <img src="https://i.imgur.com/0fbQr7h.gif" alt="Logo" class="logo" />
              </td>
              <td class="text-section" style="line-height: 1.5">
                <h2>${formData.Prenom || "Juste"} ${formData.Nom || "Le Blanc"}</h2>
                <p style="margin-top: 0; margin-bottom: 0;">${formData.Poste || "Chargé de communication événementielle / Event communication Officer"}</p>
                <p style="margin-top: 0;"><strong>Agence française de développement</strong></p>
                <p style= "margin-top: 20px; margin-bottom: 5px;" class="contact-info">
                  <a href="tel:${formData.Telephone}">${formData.Telephone || "+33 (0)7 66 46 16 08"}</a><br />
                  ${formData.Adresse || "32 rue notre dame des victoires"} – ${formData.Code_postal || "75002"} ${formData.Ville || "Paris"}, ${formData.Pays || "France"}<br />
                  <a href="http://www.expertisefrance.fr" target="_blank" rel="noopener noreferrer">
                    www.expertisefrance.fr
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="footer" style="padding-top: 20px">
                <p>
                  POUR SUIVRE L'ÉMISSION SPÉCIALE DES 10 ANS #EF10 INSCRIVEZ-VOUS
                  <a target="_blank" href="https://www.expertisefrance10ans.fr/v/begin?ref=onremote&lang=en"> ICI</a>.<br />
                  TO WATCH THE 10-YEAR ANNIVERSARY SPECIAL #EF10 REGISTER
                  <a target="_blank" href="https://www.expertisefrance10ans.fr/v/begin?ref=onremote&lang=fr"> HERE</a>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      </html>
    `;

    // Créer un blob
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Créer un lien pour le téléchargement
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Nettoyage
  };

  return (
    <div style={{ alignSelf: "center" }}>
      <button className='button_style' onClick={createHTMLFile}>Download Signature</button>
    </div>
  );
}

export default SignatureCreator;
