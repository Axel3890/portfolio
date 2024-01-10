import "./Sendemail.css"
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
const endPoint = "https://portfolioapi-ttr39mir5-axel-gomezs-projects.vercel.app"
const Sendemail = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        comment: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const [isLoading, setIsLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          setIsLoading(true);
          const response = await axios.post(endPoint + "/sendEmail", formData);
          setIsLoading(false);
          Swal.fire({
            icon: "success",
            title: "Gracias por contactarte!",
            text: "Email enviado correctamente!.",
          });
    
          setFormData({
            name: "",
            email: "",
            comment: "",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error... Intenta de nuevo más tarde",
          });
          setIsLoading(false);
        }
      };

    return(
        
        <div className="emailcontact">
        <div class="form-container">
        <h2>Quieres contactarme? Enviame un correo, te responderé lo antes posible!</h2>
            <form class="form" onSubmit={handleSubmit}>
                <div class="form-group">
                <label for="email">Nombre</label>
                <input required name="nombre" id="nombre" type="text" value={formData.nombre} onChange={handleInputChange}/>
                </div>
                <div class="form-group">
                <label for="email">email</label>
                <input required name="email" id="email" type="text" value={formData.email} onChange={handleInputChange}/>
                </div>
                <div class="form-group">
                <label for="Asunto">Asunto</label>
                <input required name="asunto" id="asunto" type="text" value={formData.asunto} onChange={handleInputChange}/>
                </div>
                <div class="form-group">
                <label for="textarea">¿Como puedo ayudarte?</label>
                <textarea required cols="50" rows="10" id="textarea" name="comment" value={formData.comment} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="form-submit-btn" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
            </form>
        </div>
        </div>
    )
}


export default Sendemail;