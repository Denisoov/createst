import axios from "axios";
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default class {
  private $axios;

  constructor(axios: NuxtAxiosInstance) {
    this.$axios = axios
  }

  public async signIn(data: Object) {
    return this.$axios.post("/api/getToken", data);
  }

  public async logIn(data: Object) {
    return this.$axios.post("/registration", data);
  }
}
