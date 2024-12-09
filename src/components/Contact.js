import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
function Contact() {
  //mh.ajc.aks@gmail.com
  //MonsterHunter93
  //https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
  // https://www.emailjs.com/docs/examples/reactjs/
  // https://dashboard.emailjs.com/admin
  let navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hfkwwca", "template_x7sdstd", form.current, {
        publicKey: "0AgovMWxJctwdvcUX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    navigate(`/sent`);
  };

  return (
    <main>
      <div className="background p-3   ">
        <form
          className="w-50 text-warning d-flex flex-column mb-3  mlr-auto"
          ref={form}
          onSubmit={sendEmail}
          // action="mailto:mh.ajc.aks@gmail.com"
          // method="post"
        >
          <div className="form-group">
            <label for="nomEvent">Votre nom/prénom/pseudo</label>
            <input
              type="text"
              name="user_name"
              class="form-control"
              id="nomEvent"
              placeholder="Votre pseudo ou nom "
              required
            />
          </div>

          <div className="form-group">
            <label for="email">email</label>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                @
              </span>
              <input
                id="email"
                type="email"
                name="user_email"
                class="form-control"
                placeholder="Email@email.fr"
                aria-label="Email"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="subject">Sujet</label>
            <input
              name="sujet"
              type="text"
              class="form-control"
              id="subject"
              placeholder="Sujet ... "
              required
            />
          </div>
          <div className="form-group">
            <label for="body">Message</label>
            <textarea
              name="message"
              className="form-control"
              id="body"
              rows="3"
              placeholder="Contenu du mail "
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-outline-warning mt-3" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Contact;
