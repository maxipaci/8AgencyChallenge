import React, { useEffect } from 'react';
import './Home.css';
import { ValidateName, ValidateEmail, ValidatePhone, ValidateJob } from '../../Utils/Validator';
import { SendRequest } from '../../Http/HttpClient';
import { HttpActions } from '../../Http/HttpActions';
import Swal from 'sweetalert2';

const members = [
    {name: "José Perez", rol: "Presidente"},
    {name: "José Perez", rol: "Customer Service Senior Manager"},
    {name: "José Perez", rol: "Senior Customer Success Consultant"},
    {name: "José Perez", rol: "Gerente de Consultoría de Soluciones"},
]

function Home() {
    const [firstNameError, setFirstNameError] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneError, setPhoneError] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [jobError, setJobError] = React.useState('');
    const [job, setJob] = React.useState('');
    const [idCountry, setIdCountry] = React.useState(1);
    const [countries, setCountries] = React.useState(
        [
            {id: 1, name: "Argentina"},
            {id: 2, name: "Brasil"},
            {id: 3, name: "Mexico"},
        ]
        );

    useEffect(() => {
        const getCountries = async () => {
          try {
            const response = await SendRequest(
                HttpActions.GET,
                'Countries', 
                null);
            if (response.data.Success) {
                setCountries(response.data.Data.Countries);
            }
          } catch (e) {
            console.log(e);
          }
        }
        getCountries()
      }, [])

    const renderCountries = () => {
        return countries.map((country, index) => {
            return (
                <option key={index} value={country.id}>{country.name}</option>
            )
        })
    }

    const validateFirstName = (e) => {
        setFirstNameError(ValidateName(e.target.value).message);
        setFirstName(e.target.value);
    }

    const validateLastName = (e) => {
        setLastNameError(ValidateName(e.target.value, 'apellido').message);
        setLastName(e.target.value);
    }

    const validateEmail = (e) => {
        setEmailError(ValidateEmail(e.target.value).message);
        setEmail(e.target.value);
    }

    const validatePhone = (e) => {
        setPhoneError(ValidatePhone(e.target.value).message);
        setPhone(e.target.value);
    }

    const validateJob = (e) => {
        setJobError(ValidateJob(e.target.value).message);
        setJob(e.target.value);
    }

    const isValidForm = () => {
        return firstNameError === '' &&
               lastNameError === '' &&
               emailError === '' && 
               phoneError === '' && 
               jobError === '' &&
               firstName !== '' &&
               lastName !== '' &&
               email !== '' &&
               phone !== '' &&
               job !== '';
    }

    const resetForm = () => {
        setFirstNameError('');
        setFirstName('');
        setLastNameError('');
        setLastName('');
        setEmailError('');
        setEmail('');
        setPhoneError('');
        setPhone('');
        setJobError('');
        setJob('');
        setIdCountry(1);
        document.getElementById('firstNameInput').value = '';
        document.getElementById('lastNameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('phoneInput').value = '';
        document.getElementById('jobInput').value = '';
    }


    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const payload = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                job: job,
                idCountry: idCountry
            }
    
            console.log(payload);
            await SendRequest(HttpActions.POST, 'Attendees', payload);
            const text = 'Inscripcion realizada con exito !'
            Swal.fire({
              icon: 'success',
              title: 'Inscripcion exitosa',
              text,
            })
            resetForm();
        } catch (e) {
            const text = 'Ocurrio un error, intenta nuevamente mas tarde.'
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text,
            })
            console.log(e);
        }
        
    }



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
                <form onSubmit={(e) => onSubmit(e)} id='form'>
                    <p>¡Inscribite y reserva tu lugar ahora!</p>
                    <div className="Form-Group">
                    <label>Nombre</label>
                    <input name='firstName' type="text" id="firstNameInput" onChange={(e) => validateFirstName(e)}>
                    </input>
                    <div className="ErrorLabel">{firstNameError}</div>
                        </div>
                        <div className="Form-Group">
                    <label>Apellido</label>
                    <input name='lastName' type="text" id="lastNameInput" onChange={(e) => validateLastName(e)}>
                    </input>
                    <div className="ErrorLabel">{lastNameError}</div>
                        </div>
                        <div className="Form-Group">
                    <label>Correo electronico del trabajo</label>
                    <input name='email' type="email" id="emailInput" onChange={(e) => validateEmail(e)}>
                    </input>
                    <div className="ErrorLabel">{emailError}</div>
                        </div>
                        <div className="Form-Group">
                    <label>Pais</label>
                    <select name='idCountry' onChange={(e) => setIdCountry(e.target.value)}>
                        {renderCountries()}
                    </select>
                        </div>
                        <div className="Form-Group">
                    <label>Numero de telefono</label>
                    <input name='phone' type="number" id="phoneInput" onChange={(e) => validatePhone(e)}>
                    </input>
                    <div className="ErrorLabel">{phoneError}</div>
                        </div>
                        <div className="Form-Group">
                    <label>Puesto de trabajo</label>
                    <input name='job' type="text" id="jobInput"  onChange={(e) => validateJob(e)}>
                    </input>
                    <div className="ErrorLabel">{jobError}</div>
                        </div>
                    <button className="boton" type='submit' style={!isValidForm() ? {cursor: 'auto', backgroundColor: 'gray'} : {}} disabled={!isValidForm()}>Inscribirse</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Home;
