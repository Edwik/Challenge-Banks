import axios from "axios";
import { BASE_URL } from "@env";

export enum Method {
  GET = "get",
}

export interface ConfigAxios {
  data?: unknown;
  params?: unknown;
}

/**
 * Función que realiza una petición usando la libreria axios
 * @param method metodo de la peticion
 * @param route ruta
 * @param config ConfigAxios
 * @param errorType message, response, request
 * Retorna la respuesta de la peticion HTTP
 */
export const Fetch = async (
  method: Method,
  route: string,
  config?: ConfigAxios
): Promise<any> => {
  try {
    const response = await axios({
      method: method,
      url: BASE_URL.concat(route),
      data: config?.data,
      params: config?.params,
      timeout: 4000,
    });
    return {
      response: response,
      status: response?.status,
      data: response?.data,
    };
  } catch (error: any) {
    return { error: error };
  }
};
