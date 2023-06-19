import { Link } from "react-router-dom";
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

export function SignIn() {
  const [formData, setFormData] =useState({
    email:'',
    password:'',
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (event)=>{
    setFormData({...formData,[event.target.name] : event.target.value});
  }
  // Función para manejar el cambio en los campos del formulario
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/api/users',formData)
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log('hubo un error');
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
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input type="email" label="Email" size="lg" name="email" onChange={handleChange} />
              <Input type="password" label="Password" size="lg" name="password" onChange={handleChange} />
              <div className="-ml-2.5">
                <Checkbox label="Recordarme" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/auth/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
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

export default SignIn;
