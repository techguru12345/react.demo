import React, { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const FormData = () => {
  const form = useRef();


    const [user, setUser] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      textarea: '',
    });

    const handleInput = (event) => {
      const { name, value } = event.target;
      setUser((prev) => {
        return { ...user, [name]: value }
      })
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      emailjs.sendForm('service_kswihbb', 'template_t00xfrd', form.current, 'wNlBR48Gy_inelkdn')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
          console.log(user);
          event.target.reset()
          alert('form submitted')  
    };


    return (
      <section>
        <div className="container" >

          <form ref={form} onSubmit={handleSubmit} className="--form-control --card --flex-center --dir-column">

            <div classname="form-group col-md-6">
              <input
                type="text"
                placeholder="name"
                name="name"
                onChange={handleInput}
                value={user.name}
              />
            </div>

            <div classname="form-group col-md-6">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleInput}
                value={user.email}
              />
            </div>

            <div classname="form-group col-md-6">

              <input
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={handleInput}
                value={user.phone}


              />
            </div>
            <div classname="form-group col-md-6">

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleInput}
                value={user.subject}

              />
            </div>

            <div classname="form-group col-md-12">


              <textarea
                classname="form-control"
                name="textarea"
                placeholder="Textarea"
                onChange={handleInput}
                value={user.textarea}

                rows="6"
              ></textarea>
            </div>

            <button type="submit"  onSubmit={handleSubmit} classname="btn btn-default btn-primary bold">Submit-here</button>
          </form>

        </div>
      </section>
    );
    }
  export default FormData;