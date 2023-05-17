import { useRouteError } from "react-router-dom";

export default function ErrorPagina() {
  const error = useRouteError();
  console.log(error.message);

  return (
    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 py-6 rounded-lg shadow-2xl">
      <p class="text-4xl font-bold tracking-wider text-indigo-400">
        CRM - CLIENTES
      </p>
      <p class="text-2xl font-bold tracking-wider text-gray-600 mt-4">
        Ocurrió un error
      </p>
      <p class="text-gray-500 mt-8 py-2 border-y-2 text-center">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
