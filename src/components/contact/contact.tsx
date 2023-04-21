import './contact.scss'

export const Contact = () => {
  return (
    <div>
      <div className={"h3"}>Contact Me</div>
      <div className={"contact-section"}>
        <div className="contact-label">
          Check out my Instagram
          <i className="bi bi-instagram"></i>
          <a href={"https://www.instagram.com/jammadoesart/"} target="_blank">@jammadoesart</a>

        </div>
        <div className="contact-label">
          Booking through email
          <i className="bi bi-envelope"></i>
          <a href={"mailto:jamiehotalen@gmail.com"}>jamiehotalen@gmail.com</a>
        </div>
      </div>
    </div>
  )
}