# Fiori_App

A SAPUI5 / Fiori application integrated with SAP S/4HANA backend via OData services, demonstrating smart controls, annotations, and enterprise-grade UI features.

---

## Features

- Uses SAP Fiori Elements annotations (`UI.LineItem`, `Org.OData.Capabilities.V1.SortRestrictions`) for declarative UI definition  
- SmartFilterBar and SmartTable components for easy filtering and responsive data display  
- Custom filters implemented via controller logic (e.g., filtering by category)  
- Dialog controls for user interaction (approval confirmation)  
- Integration with SAP S/4HANA OData backend (`ProductSet` entity)  
- Responsive and modular UI using XML Views and MVC pattern  

---



## Getting Started

### Prerequisites

- Node.js and npm installed  
- UI5 CLI installed globally:

```bash
npm install -g @ui5/cli
## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Sat Aug 09 2025 15:35:44 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.18.4|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>List Report Page V2|
|**Service Type**<br>SAP System (ABAP On-Premise)|
|**Service URL**<br>https://sapes5.sapdevcenter.com/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/|
|**Module Name**<br>project1|
|**Application Title**<br>App Title|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_fiori_3|
|**UI5 Version**<br>1.84.14|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|
|**Main Entity**<br>ProductSet|
|**Navigation Entity**<br>ToSupplier|

## project1

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```
## Screenshots and Demo

![App Screenshot](./images/app-screenshot.png)

![Demo GIF](./images/app-demo.gif)
#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

## Screenshots and Demo

![App Screenshot](./images/app-screenshot.png)

![Demo GIF](./images/app-demo.gif)
