import "../styles/helping_link.css";
import gmailLogo from "../asset/gmail.jpeg";
import appleMail from "../asset/applemail.png";
import outlook from "../asset/outlook.jpeg";
import spark from "../asset/spark.jpeg";
import airMail from "../asset/airMail.jpeg";
import thunderBird from "../asset/thunderBird.jpeg";
function helpingLink() {
  return (
    <div className="linkCategories">
      <h2>Need some help ?</h2>
      <div className="linksGrid">
        <a
          className="links"
          href="https://pdf.wondershare.fr/signature/insert-html-signature-in-gmail.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="gmailImg" src={gmailLogo} alt="" />
        </a>
        <a
          className="links"
          href="https://mlid.fr/apple-creer-signature-html-mail-mac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="appleMail" src={appleMail} alt=""></img>
        </a>
        <a
          className="links"
          href="https://fr.extendoffice.com/documents/outlook/3847-outlook-import-insert-html-signatures.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="outlook" src={outlook} alt=""></img>
        </a>
        <a
          className="links"
          href="https://sparkmailapp.com/blog/create-professional-email-signature"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="spark" src={spark} alt=""></img>
        </a>
        <a
          className="links"
          href="https://help.airmailapp.com/en-us/article/html-source-signature-airmail-for-macos-nmzfoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="airMail" src={airMail} alt=""></img>
        </a>
        <a
          className="links"
          href="https://support.mozilla.org/fr/kb/ajouter-signature-messages"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="thunderBird" src={thunderBird} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default helpingLink;
