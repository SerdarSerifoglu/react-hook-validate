import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };


const validationRules = [["name","age", "surname"],["name", "surname"], ["name","age"],["name","birthDate"]]

  const validationFunction = (data,formData) => {
    for (let i = 0; i < validationRules.length; i++) {
      const element = validationRules[i];
      for (let y = 0; y < element.length; y++) {
        const element2 = element[y];
       if( formData[element2] === undefined ||  formData[element2] === null || formData[element2] === ""){
        return console.log(element.join("-"));
       }
      }
      
    }
    return true;
  }

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", {
          required: "Name is required",
          validate: (value, formValues) => validationFunction(value,formValues)
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        {...register("surname", {
          required: "Surname is required",
          validate: (value, formValues) => validationFunction(value,formValues)
        })}
      />
      {errors.surname && <p>{errors.surname.message}</p>}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        {...register("age", {
          required: "Age is required",
          validate: (value, formValues) => validationFunction(value,formValues)
        })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <label htmlFor="birthDate">Birth Date</label>
      <input
        id="birthDate"
        type="date"
        {...register("birthDate", {
          required: "Birth date is required",
          validate: (value, formValues) => validationFunction(value,formValues)
        })}
      />
      {errors.birthDate && <p>{errors.birthDate.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default App;
