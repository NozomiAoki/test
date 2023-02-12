import { worker } from "@/mocks/browser";

export default defineNuxtPlugin(async () => {
  //   if (process.env.DEBUG) {
  // NODE_ENVのが適切かもしれない
  await worker.start({
    onUnhandledRequest: "bypass",
  });
  //   }
});
