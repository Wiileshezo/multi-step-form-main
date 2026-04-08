import { createApp } from "vue";
import App from "./App.vue";

import MultiStepForm from "./components/views/MultiStepForm.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

app.component("multi-step-form", MultiStepForm);
app.component("the-footer", TheFooter);
app.component("base-card", BaseCard);

app.mount("#app");
