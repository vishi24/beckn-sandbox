# Sandbox User Guide

Before making the request to sandbox api's, you need to have the [Postman](https://www.postman.com/downloads/) tool. Please follow the further steps to install the postman on specific OS.

## Installing Postman on Mac

Follow the [Install postman on Mac](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-postman-on-mac) to install postman on Mac

## Installing Postman on Linux

Follow the [Install postman on Linux](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-postman-on-linux) to install postman on Linux.

## Installing Postman on Windows

Follow instructions at [Install postman on Windows](https://learning.postman.com/docs/getting-started/installation-and-updates/#installing-postman-on-windows) to install postman on windows

Once you are done with the installation process of postman. Please import the collection using below step.

## Sandbox architrcture

Below is the architecture diagram.

<img alt="architecture" src="images/sandbox_arch_diagram.png" width="700"/>

Below is the sequence diagram.

<img alt="sequence" src="images/sandbox_seq_diagram.png" width="700"/>

## Import Collection in Postman

You can import collections, API specifications, and data files directly into Postman.

To import your data into Postman, select Import in the upper left. The Import modal opens.

<img src="images/import-export-import-ui-v10-3.jpg" width="700"/>

You can import your postman collection by by selecting file from local storage. Please download the collection from

For DSEP:
<https://raw.githubusercontent.com/beckn/beckn-sandbox/main/artefacts/DSEP/dsep-services-sandbox.postman_collection.json>

For Mobility:
<https://raw.githubusercontent.com/beckn/beckn-sandbox/main/artefacts/Mobility/mobility-services-sandbox.postman_collection.json>

For Financial Services:
<https://raw.githubusercontent.com/beckn/beckn-sandbox/addpostmancollection/artefacts/Finance-Services/financial-services-sandbox.postman_collection.json>

For DENT Protocol: <https://raw.githubusercontent.com/beckn/beckn-sandbox/main/artefacts/DENT/DENT-protocol-sandbox.postman_collection.json>

Once collection is imported successfully, you can view the imported collection with name `MOBILITY Sandbox` in left sidebar's collection list. You will find the two folders having names `Ride hailing` (ONDC) and `Public transit` (UMTC).

## Making request to Sandbox API in Postman

In collection's `Ride hailing` folder, there are list of api request. You can click on any request and hit the `Send` button (shown in image below) to make the request and get the response.

<img src="images/postman_making_request.png" width="700"/>

The image shows the requet method as `POST`, url is `{{BASE_URL}}/search` which is endpoint of sandbox search api, `raw` body of type `JSON` which is request body. You can change these to make request modification.

## Collection variable

Yuo have seen url and request JSON body has some variables used (for example: `{{BASE_URL}}, {{COUNTRY}}, {{BAP_ID}}, {{TRANSACTION_ID}}`). These variables are collection level variables. To view the list of variables you can click on collection name `MOBILITY Sandbox` and choose the `variables` tab. Please check the image below.

<img src="images/postman_collection_variable.png" width="700"/>

## Make changes Sandbox API code

### Make changes in request of Sandbox API

To make changes in request, it requires change in request raw JSON body in postman. Along with JSON body changes, there is need to change the sandbox changes in request DTOs. Please find the list of DTO's for `Ride hailing (ONDC)` at `src/ondc/dto` and for `Public transit (UMTC)` at `src/umtc/dto`. Filename in the list as per the request action. For example, for search request, DTO file is `src/ondc/dto/search-request.dto.ts`.

### Make changes in response of Sandbox API

The response is mocked in codebase. The mocked JSON files are separated in codebase and list of JSON files can be viewed at `src/ondc/response` for ONDC and `src/umtc/response` for UMTC folder. For example, in search response you can make changes in file `src/ondc/response/response.search.json` and this will reflect in sandbox search api response.

## Setting up sandbox code in local

For setting up sandbox on local machine to create local playground you will require 6 application as listed below:

<ul>
<li>BAP Client Protocol Server</li>
<li>BAP Network Protocol Server</li>
<li>BPP Client Protocol Server</li>
<li>BPP Network Protocol Server</li>
<li>Beckn Sandbox</li>
<li>Beckn Sandbox webhook</li>
<li>Docker Desktop and Docker Cli</li>
</ul>

### Setting up instances of Protocol Server

For setting up

<ol>
<li>Do 4 separate git clones of <a href="https://github.com/beckn/protocol-server">Beckn Protocol Server Repo</a> one for each instance i.e. BAP Client, BAP Network, BPP Client and BPP Network</li>
<li>Do a <b>git checkout</b> to <b>master</b> branch in all 4 code base of Protocol server.</li>
<li>Now run <i><b>npm install</b></i> in all the four repos</li>
<li>Now we have to register the local BAP network and BPP Network on the Beckn registry.</b></i>.</li>
<li>Open this <a href="https://registry.becknprotocol.io/login">Registry Url</a></li>
<li>Login with your Gmail ID.</li>
<li>Click on the admin tab and select the network particpant.</li>
<li>Click on <b>+</b> icon </li>
<li>Now we have to create an entry for the BAP network.</li>
<li>Enter the ParticipantID for BAP network <b><i>Note: This participant ID will be used as subscriberID in further setup process.</i></b></li>
<li>Now click on the admin tab and select <b>Network Participant.</b></li>
<li>Search for the participant Id that you created and click on edit button.</li>
<li>Select the <b>Network Role Tab</b></li>
<li>Select the network domain. And if you want an universal BAP then leave it blank.</li>
<li>Select Type as BAP.</li>
<li>Enter the participant ID in the subscriberId field as mentioned in the note.</li>
<li>Select Status field as subscribed.</li>
<li>Now go to the BAP netowork code base and open <b><i>config/default.yml</i></b> and check for the Port</li>
<li>Now do <b><i>npm install -g localtunnel</i></b> as this will help to make your local BAP network and BPP network and Webhook application to be available on Public internet.</li>
<li>Now Run this command <b><i>lt --port < bap network port > --subdomain < any subdomain ></i> Note:</b> Use this subdomain everytime when you run localtunnel as it will generate same public DNS URL and you will not be required to change the URLs on registry.</li>
<li>Copy the url generated and paste that url in URL field on the registry network role tab and click on save and more.</li>
<li>Now go to participant key tab and click on <b>+</b> icon to add a participant key info. </li>
<li>Now provide a key in the key field. <b><i>Note: This key will be used as uniqueKey in default.yml file.</i></b></li>
<li>Now go to BAP network code and run <b><i>npm run generate-keys</i></b></li>
<li>Now copy the generated public key and paste in the <b>Signing Public Key
</b> and <b>Encr Public Key
</b></li>
<li>Add Valid from date as current date and valid until date as a date atleast after one year of the current date.</li>
<li>Check the verified check-box and click on Save and more.</li>
<li>Now your BAP is registered. Now add specific details in the <b>default.yml</b> file. </li>
<li><b>Private Key:</b> Copy the private key generated by above command. 
<br><b>Public key:</b> Copy the public key generated by above command
<br><b>Subscriber Id:</b> Copy the subscriber id from the registry entry
<br><b>Subscriber Uri</b> Copy the subscriberUri from the registry entry
<br><b>Unique Key: </b> Copy the participant-key from the registry entry from the participant key tab</br>
</li>
<li>Copy the same values and paste them respectively in the <b><i>config/default.yml</i></b> file of BAP Client code base</li>
<li>Now install Docker and Docker CLI</li>
<li>Now create a terminal from BAP Client code base and run command <b><i>docker-compose up -d</i></b>. This will start all the docker containers in the background that are required to run the whole setup.</li>
<li>Now we have to do configuration for BPP Network.</li>
<li>Open this <a href="https://registry.becknprotocol.io/login">Registry Url</a></li>
<li>Login with your Gmail ID.</li>
<li>Click on the admin tab and select the network particpant.</li>
<li>Click on <b>+</b> icon </li>
<li>Now we have to create an entry for the BPP network.</li>
<li>Enter the ParticipantID for BPP network <b><i>Note: This participant ID will be used as subscriberID in further setup process.</i></b></li>
<li>Now click on the admin tab and select <b>Network Participant.</b></li>
<li>Search for the participant Id that you created and click on edit button.</li>
<li>Select the <b>Network Role Tab</b></li>
<li>Select the network domain. And if you want an universal BPP then leave it blank.</li>
<li>Select Type as BPP.</li>
<li>Enter the participant ID in the subscriberId field as mentioned in the note.</li>
<li>Select Status field as subscribed.</li>
<li>Now go to the BPP netowork code base and open <b><i>config/default.yml</i></b> and check for the Port</li>

<li>Now Run this command <b><i>lt --port < bpp network port > --subdomain < any subdomain ></i> Note:</b> Use this subdomain everytime when you run localtunnel as it will generate same public DNS URL and you will not be required to change the URLs on registry.</li>
<li>Copy the url generate and paste that url in URL field on the registry network role tab and click on save and more.</li>
<li>Now go to participant key tab and click on <b>+</b> icon to add a participant key info. </li>
<li>Now provide a key in the key field. <b><i>Note: This key will be used as uniqueKey in default.yml file.</i></b></li>
<li>Now go to BPP network code and run <b><i>npm run generate-keys</i></b></li>
<li>Now copy the generated public key and paste in the <b>Signing Public Key
</b> and <b>Encr Public Key
</b></li>
<li>Add Valid from date as current date and valid until date as a date atleast one year ahead of the current date.</li>
<li>Check the verified check-box and click on Save and more.</li>
<li>Now Open a terminal on sandbox-webhook code base and check for Port in <b><i>/src/main.ts</i></b> file.</li>
<li>Now Run this command <b><i>lt --port < sanbox-webhook port > --subdomain < any subdomain ></i> Note:</b> Use this subdomain everytime when you run localtunnel as it will generate same public DNS URL and you will not be required to change the URLs on registry.</li>
<li>Now your BPP network is registered. Now add specific details in the <b>default.yml</b> file. </li>
<li><b>Private Key:</b> Copy the private key generated by above command. 
<br><b>Public key:</b> Copy the public key generated by above command
<br><b>Subscriber Id:</b> Copy the subscriber id from the registry entry
<br><b>Subscriber Uri</b> Copy the subscriberUri from the registry entry
<br><b>Unique Key: </b> Copy the participant-key from the registry entry from the participant key tab
<br><b>WebhookUrl: </b> Copy paste the URL that you generate by running localtunnel for sandbox-webhook
</li>
<li>Copy the same values and paste them respectively in the <b><i>config/default.yml</i></b> file of BPP Client code base</li>
<li>Now open all the three localtunnel urls on the browser and then provide the public IP address of your machine in order to link your url to that IP address.</li>
<li>Now your configuration part is done.</li>
<li>Now open 9 separate terminals and run the respective commands.
<br> One for BAP client: <b><i>npm run dev</i></b>
<br> One for BAP network: <b><i>npm run dev</i></b>
<br> One for BAP network localtunnel: <b><i>localtunnel lt command that we ran in above step</i></b>
<br> One for BPP client: <b><i>npm run dev</i></b>
<br> One for BPP network: <b><i>npm run dev</i></b>
<br> One for BPP network localtunnel: <b><i>localtunnel lt command that we ran in above step</i></b>
<br> One for sandbox: <b><i>npm run start:dev</i></b>
<br> One for sandbox-webhook: <b><i>npm run start:dev</i></b>
<br> One for sandbox-webhook localtunnel: <b><i>localtunnel lt command that we ran in above step</i></b>
</li>
<li>Now go to the postman collection that you did setup before and use the properties values as follows.
<br><b>bap_uri:</b> use localtunnel url of BAP network
<br><b>bap_id:</b> use subscriberId for BAP network
<br><b>base_url:</b> use localhost url of BAP client
<br><b>bpp_id:</b> use subscriberId for BPP network
<br><b>bpp_uri:</b> use localtunnel url of BPP network
<br><b>core_version:</b> 1.1.0
</li>
<li>Now hit the url and you will get the response from sandbox.</li>
<li>Your setup is complete.</li>
</ol>

## Flow of Data from each protocol server and sandbox application.

<ol>
<li>First you hit the API from postman collection.</li>
<li>This API hit the BAP client Protocol server. And then BAP client verifies the payload and then it hits the BAP network Protocol server with the same payload.</li>
<li>Now the request comes to the BAP network protocol server. It also verifies the payload and if the payload is fine then in case of Search API call it will hit the beckn gateway app and in case of other APIs it will directly hit the BPPs.</li>
<li>In case of search APIs gateway app will receive the request from the BAP network Protocol server and in response it will send and acknowledgment message to the protocol server.</li>
<li>Now Gateway will look for all the BPPs that falls under the domain that is sent in the payload and verifies them and after verification it will hit each BPPs with the payload and will wait for their response.</li>
<li>Then the BPP netowork protocol server will receive the request from the gateway in case of search API call and from the BAP network Protocol server in case of other API calls and will validate the payload. And after validation it will hit the BPP client protocol server.</li>
<li>Now the BPP client protocol server will receive the request and then it will send the request to the sandbox-webhook app.</li>
<li>Now the sandbox-webhook will look for the domain in the payload and according to that it will hit the specific route of the sandbox.</li>
<li>Now the sandbox will receive the request and as per the request it provide the response to sandbox-webhook.</li>
<li>Now the whole above flow will occur in the reverse direction.</li>
<li>And in this way the whole flow is completed.</li>
<ol>
