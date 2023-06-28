import { FetchClient } from "../rest/fetchClient";
import { EdamanProvider } from "./edaman/edamanProvider";

export const edamanProvider = new EdamanProvider(new FetchClient())