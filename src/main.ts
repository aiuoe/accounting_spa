import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import "./assets/main.css";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import Chip from "primevue/chip";
import DataTable from "primevue/datatable";
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import ColorPicker from "primevue/colorpicker";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";

const token = localStorage.getItem("token");

const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:8000/graphql",
    headers: {
      Authorization: "Bearer " + token,
    },
  }),
  cache: new InMemoryCache(),
});

createApp({
  setup() {
    provideApolloClient(apolloClient),
      provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .component("DataTable", DataTable)
  .component("Dropdown", Dropdown)
  .component("InputNumber", InputNumber)
  .component("InputText", InputText)
  .component("Dialog", Dialog)
  .component("ColorPicker", ColorPicker)
  .component("Chip", Chip)
  .component("Column", Column)
  .component("Tag", Tag)
  .component("Card", Card)
  .component("Button", Button)
  .use(createPinia())
  .use(PrimeVue)
  .use(router)
  .mount("#app");
