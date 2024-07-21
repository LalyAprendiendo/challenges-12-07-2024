import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  const mensaje = { path: "recipes" }
  //const mensaje = { path: "tag" };
  //const mensaje = { path: "recipe/id", id: 7 }
  //const mensaje = { path: "name"};
  

  const message = JSON.stringify(mensaje);
  client.write(message);
});

client.on("data", (serverMessage: string) => {
  const mensaje = serverMessage.toString();
const mensajeJs = JSON.parse(mensaje);
  console.log(mensajeJs);
});
