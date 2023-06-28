import { FetchClient } from "../rest/fetchClient";
import { EdamanProvider } from "./edamanProvider";

export const edamanProvider = new EdamanProvider(new FetchClient())