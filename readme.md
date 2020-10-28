# SIMPLE PROJECT WITH NODE, TS AND TYPEORM

# DATABASE

```bash=1
docker run --name postgres_container -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

```bash=1
yarn typeorm migration:run
```

# OTHER COMMANDS

```bash=1
yarn typeorm migration:create -n CreateUsers
yarn typeorm migration:run
yarn typeorm migration:show
yarn typeorm migration:revert
yarn typeorm -h
yarn typeorm migration:revert -h
```
