# "Authorize Users with JWTs for Qlik Embedded" - Authorization and Embedding Examples


> :sparkles: Updated: October 2021<br>
:sparkles: Published: October 2021

This example is referenced in the tutorial [Implement JWT Authorization](https://qlik.dev//tutorials/implement-jwt-authorization)
on [qlik.dev](https://qlik.dev). It is recommended to use this tutorial in combination with this example.

---


By authorizing users with JWTs, you can embed analytics from Qlik into your own web applications using your host application's access control model.

## Adding authorization to Qlik tenants and web applications using JWTs and JavaScript

| ![JWT icon](https://cdn.glitch.me/221a8c3a-1294-4afa-8416-98d7a157298e%2Fjwt_64px.png?1634489478634) | ![JavaScript icon](https://cdn.glitch.me/221a8c3a-1294-4afa-8416-98d7a157298e%2F64px-JavaScript-logo.png?1634489478633) | ![Qlik logo](https://cdn.glitch.me/221a8c3a-1294-4afa-8416-98d7a157298e%2Fthumbnails%2FQlik-Logo_CMYK_64.png?1634489478670) |
| --- | --- | --- |

### Developer Use-Cases

If you are developing apps that integrate analytics, this sample is going to accelerate rendering analytics content based on your use case.

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

### Remix this project

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/qlik-cloud-jwt)

### Add the private key to the remixed project

1. Copy to the clipboard the contents of the private key file generated in step 2
of the [Qlik Cloud Tenant](#qlik-cloud-tenant) section of this readme.

2. In your remixed project, click on the New File button and in the input field type in `.data/private.key.txt`.

![NewFile](https://cdn.glitch.me/221a8c3a-1294-4afa-8416-98d7a157298e%2Fthumbnails%2F2021-10-24_20-16-32.989.png?1635121033990)

3. Press the Add This File button to have it open in the editor. Paste the private key into the Glitch editor window.
This adds the private key to a project directory that is not copied during a remix.

![AddThisFile](https://cdn.glitch.me/221a8c3a-1294-4afa-8416-98d7a157298e%2F2021-10-24_20-16-50.737.png?1635121029143)

4. Ensure the path and file reference to the private key file is properly reflected in the `token.js` file
so your JWT is properly signed.

### Update environment variables

Update the environment variables in the `.env` section of Glitch, or in the `config.js` file.

- **qlikWebIntegrationId:** This is the include list Id created in your Qlik Cloud tenant. See [Implement JWT Authorization](https://qlik.dev//tutorials/implement-jwt-authorization)

- **tenantDomain:** The domain name for your Qlik Cloud tenant. For example, `mytenanthostname.region.qlikcloud.com`.

- **appId:** The UUID (GUID) for the Qlik Sense application with content to embed.

- **objId:** The object Id for the chart from the Qlik Sense application to embed. This item is required when you 
use iframe embedding with the [single API}(https://qlik.dev/apis/javascript/single-integrations).

- **issuer:** The issuer value from the JWT configuration in Qlik Cloud. See [creating signing keys and configuring JWT authorization](https://qlik.dev/tutorials/create-signed-tokens-for-jwt-authorization)
for more information.

- **keyid:** the key id value from the JWT configuration in Qlik Cloud. See [creating signing keys and configuring JWT authorization](https://qlik.dev/tutorials/create-signed-tokens-for-jwt-authorization)
for more information.