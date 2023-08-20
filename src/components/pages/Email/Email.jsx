import { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import  "./Email.css"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next";

 
function Email() {
    const[email,setEmail]= useState("")
    const[message,setMessage]= useState("")
     const { t } = useTranslation();
    function sendEmail(e) {
        e.preventDefault();

        if (email ===''||message==='') {
            alert("preencha todos os campos")
            return;
        }

        const templateParams ={
            message: message,
            email:email
        }

        emailjs.send("service_qslc8zp","template_shikpvp", templateParams,"XLyMd4YOBAS7_8-Qm")
        .then((response)=>{console.log("enviado",response.status,response.text)
        setEmail('')
        setMessage('')        
    },(Err)=>{console.log("ERRO:",err)})
    }
    return(
        <section id='Contact' className='Container3 d-flex justify-content-center'>
            <div>
            <h1 className="projSec">{t("Contact")}</h1>
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3 col-12 mx-auto" controlId="exampleForm.ControlInput1">
            
            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} value={email} />
          </Form.Group>
          <Form.Group className="mb-3 col-12 mx-auto" controlId="exampleForm.ControlTextarea1">
            
            <Form.Control as="textarea" rows={2} onChange={(e)=>setMessage(e.target.value)} placeholder={t("message")} value={message} />
          </Form.Group>
          
                  <button type='submit' value="send" className="cybr-btn1 aling-item-center my-3">
                    {t("Send")}
                    <span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn1__glitch">
                      {t("Send")}
                    </span>
                    <span aria-hidden className="cybr-btn1__tag">
                      R25
                    </span>
                  </button>
                
        </Form></div>
      </section>
    );
}
export default Email;