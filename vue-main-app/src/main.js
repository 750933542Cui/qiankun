import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

createApp(App).use(router).mount("#app");

const apps = [
  {
    name: "reactApp", // app name registered
    entry: "//localhost:8080/",
    container: "#childApp",
    activeRule: "/reactApp",
  },
];

registerMicroApps(apps, {
  beforeLoad: [
    (app) => {
      console.log("before load", app.name);
    },
  ],
  beforeMount: [
    async (app) => {
      // Loading instance non-blocking
      // const asyncData = await fetchAsyncData();
      console.log("before mount", app.name);
    },
  ],
  afterMount: [(app) => console.log("after mount", app.name)],
  afterUnmount: [(app) => console.log("after unload")],
});

start();
