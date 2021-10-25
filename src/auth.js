export const auth = async () => {
  
  const shouldLoginBox = document.querySelector('#should-login-box')
  const loginLink = shouldLoginBox.querySelector('a')
  
  // 1) get config
  const { tenantDomain, qlikWebIntegrationId, appId, objId, currentLoginType, loginTypes } = await fetch("config").then((resp) => resp.json());
  const config = { tenantDomain, qlikWebIntegrationId, appId, objId, currentLoginType, loginTypes };
  // 2) get logged in
  if(currentLoginType === loginTypes.JWT_LOGIN) await handleAutomaticLogin()
  else if (currentLoginType === loginTypes.INTERACTIVE_LOGIN) await handleUserLogin()

  
  async function handleAutomaticLogin() {
    const { token } = await fetch("token").then(resp => resp.json()); 
    
    // 2.1) login, in order to save some credentials in browser storage
    //    we are going to need these for next api calls like getting CSRF token
    const login = await fetch(
      `https://${tenantDomain}/login/jwt-session?qlik-web-integration-id=${qlikWebIntegrationId}`,
      {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
          "qlik-web-integration-id": qlikWebIntegrationId
        },
        rejectunAuthorized: false
      }
    );
  }
  
  async function handleUserLogin() {
    const response = await fetch(`https://${tenantDomain}/api/v1/csrf-token`, {
      credentials: 'include',
      headers: { 'qlik-web-integration-id': qlikWebIntegrationId }
    })
    
    if(response.status === 401) {
      shouldLoginBox.style.display = 'block'
    
      const loginUrl = new URL(`https://${tenantDomain}/login`);
      loginUrl.searchParams.append('returnto', window.location.href);
      loginUrl.searchParams.append('qlik-web-integration-id', qlikWebIntegrationId);

      loginLink.href = loginUrl.href;
    }
  }
  
  // 3) get CSRF token
    const csrfTokenInfo = await (await fetch(
    `https://${tenantDomain}/api/v1/csrf-token?qlik-web-integration-id=${qlikWebIntegrationId}`,
    {
      credentials: "include",
      headers: {
        "Qlik-Web-Integration-ID": qlikWebIntegrationId
      }
    }
  ));
   
  // 8) if we reached in this step with out any error, try to remove the helper box
  shouldLoginBox.style.display = 'none'
  
  
  
  return { config, csrfTokenInfo }
}