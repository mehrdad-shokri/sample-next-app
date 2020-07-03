import { create } from "@socialgouv/kosko-charts/socialgouv/app/environments";
export default create();

const name = "app";
function create() {
  return {
    containerPort: 8080,

    image: {
      name: process.env.CI_REGISTRY_IMAGE,
      tag: process.env.CI_COMMIT_TAG
        ? process.env.CI_COMMIT_TAG.slice(1)
        : process.env.CI_COMMIT_SHA,
    },

    ingress: {
      secretName: process.env.PRODUCTION ? "${name}-crt" : "wildcard-crt",
    },

    labels: {
      component: "next",
    },
    name: name,

    servicePort: 80,
  };
}
