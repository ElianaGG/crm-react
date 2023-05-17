import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { agregarCliente } from "../data/Clientes";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  //Validación
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("Email inválido");
  }

  //Retornar errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);
  return redirect("/");
}

function NuevoCliente() {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Nuevo cliente</h1>
      <p className="mt-3 font-semibold">
        Llenar todos los campos para registrar un nuevo cliente
      </p>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-8 mt-5">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario />
          <input
            type="submit"
            className="text-white text-lg bg-indigo-700 font-bold hover:bg-indigo-900 rounded-md w-full p-3"
            value="Registrar cliente"
          />
        </Form>
      </div>

      <div className="flex justify-start">
        <button
          type="button"
          className="text-white bg-indigo-700 font-bold hover:bg-indigo-900 rounded-md px-3 py-2 mt-2"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </>
  );
}

export default NuevoCliente;
