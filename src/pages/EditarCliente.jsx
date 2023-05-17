import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { obtenerCliente, actualizarCliente } from "../data/Clientes";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "El cliente no fue encontrado",
    });
  }
  return cliente;
}

export async function action({ request, params }) {
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

  //Actualizar cliente
  await actualizarCliente(params.clienteId, datos);
  return redirect("/");
}

function EditarCliente() {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Editar cliente</h1>
      <p className="mt-3 font-semibold">
        Puede editar los campos que considere necesario
      </p>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-8 mt-5">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post" noValidate>
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="text-white text-lg bg-indigo-700 font-bold hover:bg-indigo-900 rounded-md w-full p-3"
            value="Actualizar cliente"
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

export default EditarCliente;
