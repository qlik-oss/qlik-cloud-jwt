export const connectQlikApp = async (config, csrfTokenInfo) => {
  // 4) setup socket connection to Qlik Application
  const url = `wss://${config.tenantDomain}/app/${config.appId}?qlik-web-integration-id=${config.qlikWebIntegrationId}&qlik-csrf-token=${csrfTokenInfo.headers.get("qlik-csrf-token")}`;
  
  
  // 5) fetch schema for communicating with Qlik's engine API
  const schema = await fetch("https://unpkg.com/enigma.js/schemas/12.936.0.json").then(response => response.json());
  
  // 6) create qlik engine session
  const session = window.enigma.create({ schema, url });
  
  // 7) open the app
  const app = await (await session.open()).openDoc(config.appId);
  
  return { app };
}