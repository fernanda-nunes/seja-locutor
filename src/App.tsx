import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router-tree-gen";
import { PromoPopup } from "./components/PromoPopup";

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PromoPopup checkoutUrl="https://pay.kiwify.com.br/UHv1Mn4" />
    </>
  );
}

export default App;