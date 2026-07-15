import "./contact.css";
import {User , Mail , File} from "lucide-react";
import {FaPaperPlane} from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";



const validationSchema = Yup.object({
  name: Yup.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters").required("Name is required"),
  email: Yup.string().trim().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Only Gmail addresses are allowed").required("Email is required"),
  subject: Yup.string().trim().min(3, "Subject must be at least 3 characters").max(100, "Subject cannot exceed 100 characters").required("Subject is required"),
  message: Yup.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message cannot exceed 1000 characters").required("Message is required"),
});







const Contact = () => {

  const [success , setSuccess] = useState(false);
  const [error,setError] = useState(false);
  const [loading , setLoading] = useState(false);

  const formik = useFormik({
    initialValues : {
      name: "",
      email: "",
      subject: "",
      message: "",
    } ,
    validationSchema ,
    onSubmit : async (values , {resetForm}) => {
      try {
        setLoading(true);
        setSuccess(false);
        setError(false);
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setSuccess(true);
        resetForm();
      } catch (error) {
        setError(true)
      }finally {
        setLoading(false);
      }
    }
  });



  return (
    <section id="contact">
      <h4>LET'S CONNECT</h4>
      <form onSubmit={formik.handleSubmit} autoComplete="off">

        {success && <p className="success">Email sent successfully.</p>}
        {error && <p className="error">Failed to send email.</p>}
        {loading && <p className="loading">Loading.........</p>}

        <div>
          <User size={18} color="white" className="icon"/>
          <input type="text" {...formik.getFieldProps("name")} placeholder="Your name" name="name" id="name"/>
          {formik.touched.name && formik.errors.name && (<span>{formik.errors.name}</span>)}
        </div>

        <div>
          <Mail size={18} color="white" className="icon"/>
          <input type="email" {...formik.getFieldProps("email")} placeholder="Your email" name="email" id="email"/>
          {formik.touched.email && formik.errors.email && (<span>{formik.errors.email}</span>)}
        </div>

        <div>
          <File color="white" className="icon" size={18}/>
          <input type="text" {...formik.getFieldProps("subject")} placeholder="Subject" name="subject" id="subject"/>
          {formik.touched.subject && formik.errors.subject && (<span>{formik.errors.subject}</span>)}
        </div>

        <div>
          <textarea placeholder="Enter message" {...formik.getFieldProps("message")} rows={10} name="message" id="message"></textarea>
          {formik.touched.message && formik.errors.message && (<span>{formik.errors.message}</span>)}
        </div>

        <button disabled={loading} type="submit">SEND MESSAGE<FaPaperPlane size={15}/></button>

      </form>
    </section>
  )
}

export default Contact;