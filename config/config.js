const loginTypes = {
  INTERACTIVE_LOGIN: 'interactive-login',
  JWT_LOGIN: 'jwt-login'
}

module.exports = {
  loginTypes,
  currentLoginType: loginTypes.JWT_LOGIN,
  
  // app config 
  qlikWebIntegrationId: process.env.qlikWebIntegrationId,
  tenantDomain: process.env.tenantDomain,
  appId: process.env.appId,
  objId: process.env.objId,
  
  // token config
  issuer: process.env.issuer,
  keyid: process.env.keyid
};
