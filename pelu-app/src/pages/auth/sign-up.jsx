import { 
  Link, 
  useNavigate
} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export function SignUp() {
  const [formData, setFormData] =useState({
    name:'',
    email:'',
    password:'',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  // Función para manejar el cambio en los campos del formulario
  const handleChange = (event)=>{
    setFormData({...formData,[event.target.name] : event.target.value});
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/api/register',formData)
      .then((response)=>{
        if(response.status===201){
          navigate('/auth/sign-in');
          Swal.fire(
            'Bien Hecho!',
            'Se ha enviado un correo de confirmación a '+response.data.email,
            'success',
          )
        }
      })
      .catch((error)=>{
        if (error.response && error.response.status === 422) {
          // Error de validación, mostrar mensajes de error
          setErrors(error.response.data.errors);
        } else {
          // Otro tipo de error, manejarlo según tus necesidades
          console.log(error);
        }
      });
  }
  return (
    <>
      <img
        src="https://img.freepik.com/vector-gratis/fondo-flor-suave-nina-pelo-largo-ondulado-ilustracion-vectorial_1284-1952.jpg?w=1380&t=st=1686795072~exp=1686795672~hmac=e5aa0c5d572f6c9eb98419c0769887ba228e4d33526b97a07f8a67ad6f1ed84d"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />      
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">        
        <form onSubmit={handleSubmit}>
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Crear Cuenta
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              {Object.keys(errors).length > 0 && (
              <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error en los campos
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">           
                  
                    <div>
                      {Object.values(errors).map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                    </div>                  
                </div>
              </div>
              )}
              <Input label="Nombre" size="lg" name="name" onChange={handleChange} />
              <Input type="email" label="Email" name="email" size="lg" onChange={handleChange}/>
              <Input type="password" label="Contraseña" name="password" size="lg" onChange={handleChange}/>
              <Input type="password" label="Repite Contraseña" name="password_confirmation" size="lg" onChange={handleChange}/>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                Crear Cuenta
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Ya tienes una cuenta?
                <Link to="/auth/sign-in">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Acceder
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default SignUp;
