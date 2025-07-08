# Authorize Users with JWTs for Qlik Embedded

> [!IMPORTANT]
> Please consider using modern Qlik frameworks and authentication via [qlik-embed](https://qlik.dev/embed/qlik-embed/), rather than using this example.

This example is referenced in the tutorial [Implement JWT Authorization](https://qlik.dev/authenticate/jwt/implement-jwt-authorization/). It is recommended to use this tutorial in combination with this example.

---

By authorizing users with JWTs, you can embed analytics from Qlik into your own web applications using your host application's access control model.

### Developer Use-Cases

If you are developing web apps that integrate analytics, this sample is going to help you embed Qlik Cloud Analytics into those web apps.

Upon implementing JWT authorization to Qlik, there are a number of ways to add embedded content:

* JavaScript embedded visualization using nebula.js
* iframe embedded visualization using the single API
* Connect to REST endpoints when you need to in your web application front-end

### User Work Flow

When you add authorization to Qlik using JWTs the goal is to abstract away the login experience to a Qlik Cloud tenant.
As a developer the last thing you want is to have an end user redirected to an interactive login
when the solution is embedded. JWT authorization enables users to have a seamless experience with embedded Qlik content.

## Setup

### Qlik Cloud tenant

1. Obtain access to a Qlik Cloud Enterprise tenant with JWT authorization capabilities.

2. Complete the tutorial for [creating signing keys and configuring JWT authorization](https://qlik.dev/tutorials/create-signed-tokens-for-jwt-authorization) on the tenant.

### Add the private key

1. Copy to the clipboard the contents of the private key file generated in step 2
of the [Qlik Cloud Tenant](#qlik-cloud-tenant) section of this readme.

2. In your project, add the private key to `.data/private.key`.

3. Ensure the path and file reference to the private key file is properly reflected in the `token.js` file
so your JWT is properly signed.

### Update environment variables

Update the environment variables in the `config.js` file.

- **qlikWebIntegrationId:** This is the include list Id created in your Qlik Cloud tenant. See [Implement JWT Authorization](https://qlik.dev/tutorials/implement-jwt-authorization)

- **tenantDomain:** The domain name for your Qlik Cloud tenant. For example, `mytenanthostname.region.qlikcloud.com`.

- **appId:** The UUID (GUID) for the Qlik Sense application with content to embed.

- **objId:** The object Id for the chart from the Qlik Sense application to embed. This item is required when you 
use iframe embedding with the [single API](https://qlik.dev/apis/javascript/single-integrations).

- **issuer:** The issuer value from the JWT configuration in Qlik Cloud. See [creating signing keys and configuring JWT authorization](https://qlik.dev/tutorials/create-signed-tokens-for-jwt-authorization)
for more information.

- **keyid:** the key id value from the JWT configuration in Qlik Cloud. See [creating signing keys and configuring JWT authorization](https://qlik.dev/tutorials/create-signed-tokens-for-jwt-authorization)
for more information.
