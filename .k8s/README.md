```sh
# Generate the k8s manifest
$ yarn generate
---
#

# Generate and apply the k8s manifest
$ yarn generate | kubectl apply -f -
namespace/my-namespace created
sealedsecret.bitnami.com/app-env created
configmap/app-env created
deployment.apps/app created
ingress.extensions/app created
service/app created
```

## With Postgres

```sh
$ export AUTO_DEVOPS_ENABLE_POSTGRES="📦"
# Generate and apply the k8s manifest
$ yarn generate | kubectl apply -f -
namespace/my-namespace created
sealedsecret.bitnami.com/app-env created
configmap/app-env created
deployment.apps/app created
ingress.extensions/app created
service/app created
sealedsecret.bitnami.com/azure-pg-admin-user created
secret/azure-pg-user-866e53cf created
```

## With Hasura

```sh
$ export AUTO_DEVOPS_ENABLE_HASURA="⛩️"
# Generate and apply the k8s manifest
$ yarn generate | kubectl apply -f -
namespace/my-namespace created
sealedsecret.bitnami.com/app-env created
configmap/app-env created
deployment.apps/app created
ingress.extensions/app created
service/app created
sealedsecret.bitnami.com/azure-pg-admin-user created
secret/azure-pg-user-866e53cf created
deployment.apps/hasura created
ingress.extensions/hasura created
service/hasura created
configmap/hasura-env created
sealedsecret.bitnami.com/hasura-env created
```
