import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase-config/firebase-config";
import "./Contact.css";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const validation = {
    name: {
      required: {
        value: true,
        message: "Enter Username",
      },
    },
    email: {
      required: {
        value: true,
        message: "Enter Email",
      },
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: "Enter valid Email address",
      },
    },
    msg: {
      required: {
        value: true,
        message: "Enter your message",
      },
    },
  };

  function refresh() {
    window.location.href = "./";
  }

  function writeUserData(name, email, msg) {
    const db = getDatabase(app);
    const userId = name;
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      message: msg,
    });
  }

  return (
    <div className="main">
      <h1>
        Contact <span>Me</span>
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          setModal(true);
          writeUserData(data.name, data.email, data.msg);
        })}
      >
        <div className="input">
          <label htmlFor="name">Your Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            {...register("name", validation.name)}
          />
          <br />
          <p className="errormsg">{errors.name && errors.name.message}</p>
        </div>
        <div className="input">
          <label htmlFor="email">Your Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", validation.email)}
          />
          <br />
          <p className="errormsg">{errors.email && errors.email.message}</p>
        </div>
        <div className="input">
          <label htmlFor="message">Your Message</label>
          <br />
          <input
            type="textarea"
            id="message"
            name="message"
            placeholder="Enter Your Message"
            {...register("msg", validation.msg)}
          />
          <br />
          <p className="errormsg">{errors.msg && errors.msg.message}</p>
        </div>
        <div className="btnGroup">
          <div>
            <button type="submit" id="submitBtn" className="btn">
              Submit
            </button>
          </div>
          <div>
            <button type="reset" id="clearBtn" className="btn">
              Reset
            </button>
          </div>
        </div>
      </form>
      {modal && (
        <div className="modal">
          <div className="userDetails">
            <p>I'll reach you out soon, Thank You!!!</p>
            <button onClick={refresh} className="btn">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
