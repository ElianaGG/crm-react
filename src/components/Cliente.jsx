import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/Clientes";

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect("/");
}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();

  const { id, nombre, empresa, email, telefono } = cliente;
  return (
    <tr className="border-b">
      <td className="p-4 space-y-2">
        <p className="font-semibold">{nombre}</p>
        <p className="text-gray-600">{empresa}</p>
      </td>

      <td className="p-4">
        <p className="text-gray-600">{email}</p>
      </td>

      <td className="p-4">
        <p className="text-gray-600">{telefono}</p>
      </td>

      <td className="p-6 space-x-4 flex justify-center">
        
        <button
          type="button"
          className="text-white bg-indigo-700 font-bold hover:bg-indigo-900 rounded-md px-4 py-2"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("¿Desea eliminar registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-white bg-red-600 font-bold hover:bg-red-800 rounded-md px-4 py-2"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;
