import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

import TheFooter from "./components/layout/TheFooter.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("the-footer", TheFooter);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.use(createPinia());

app.mount("#app");
