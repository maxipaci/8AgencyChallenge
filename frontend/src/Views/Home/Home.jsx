import React from 'react';
import './Home.css';

const members = [
    {name: "José Perez", rol: "Presidente"},
    {name: "José Perez", rol: "Customer Service Senior Manager"},
    {name: "José Perez", rol: "Senior Customer Success Consultant"},
    {name: "José Perez", rol: "Gerente de Consultoría de Soluciones"},
]

function Home() {
    const renderMembers = () => {
        return members.map((member, index) => {
            return (
                <div className="member" key={index}>
                    <div className="member-pic"></div>
                    <div className="member-info">
                        <div className="member-name">{member.name}</div>
                        <div className="member-rol">{member.rol}</div>
                    </div>
                </div>
            )
        })
    }


  return (
    <div className="Home" >
        <div className="Content">
            <div className="Section">
                <img className="ImageSection" src="/images/assets/Group_5.jpg" alt="group5"/>
                <p>Te invitan a este webinar, donde trataremos la tematica de como humanizar la 
                    experiencia del cliente de Banca y Seguros en el nuevo entorno digital.</p>
                <p>Ademas podremos conocer las estrategias que aplicó LOREM para generar una experiencia 
                    memorable para sus clientes, mientras se convertia en el gran unicornio de LATAM.</p>
                <p>Escucha de primera mano la voz de nuestros especialistas:</p>
                <div className="MembersSerction">
                {renderMembers()}
                </div>
                <p>Participa e inspirate para innovar y mejorar la interaccion entre clientes y 
                    marcas con historias de exito de empresas del ambito financiero en America Latina.</p>
                <p>¡Te esperamos!</p>
                <img className="ImageSection" src="/images/assets/Group_5.jpg" alt="group5"/>
            </div>
            <div className="Form">
                <form action = "http://127.0.0.1:5000/Attendees" method = "post">
                    <p>¡Inscribite y reserva tu lugar ahora!</p>
                    <div className="Form-Group">
                    <label>Nombre</label>
                    <input name='firstName'>
                    </input>
                        </div>
                        <div className="Form-Group">
                    <label>Apellido</label>
                    <input name='lastName'>
                    </input>
                        </div>
                        <div className="Form-Group">
                    <label>Correo electronico del trabajo</label>
                    <input name='email'>
                    </input>
                        </div>
                        <div className="Form-Group">
                    <label>Pais</label>
                    <select name='idCountry'>
                        <option value="1">Argentina</option>
                        <option value="2">Brasil</option>
                        <option value="3">Mexico</option>
                    </select>
                        </div>
                        <div className="Form-Group">
                    <label>Numero de telefono</label>
                    <input name='phone'>
                    </input>
                        </div>
                        <div className="Form-Group">
                    <label>Puesto de trabajo</label>
                    <input name='job'>
                    </input>
                        </div>
                        <button className="boton" type='submit'>Inscribirse</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Home;
