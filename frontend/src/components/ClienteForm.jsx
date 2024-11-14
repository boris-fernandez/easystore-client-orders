// src/components/Form.js
import { useState } from "react";
import { useForm } from "react-hook-form"; // Usamos react-hook-form para manejar el formulario
import { formSchema } from "./schemas/formSchema"; // Importamos el esquema de validación

const Form = () => {
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      formSchema.parse(data);
      setFormData(data);
      console.log("Formulario enviado:", data);
    } catch (err) {
      console.error(err.errors); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("firstName")}
          placeholder="Nombre"
          className="input-class"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <input
          {...register("lastName")}
          placeholder="Apellido"
          className="input-class"
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Celular"
          className="input-class"
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="input-class"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
