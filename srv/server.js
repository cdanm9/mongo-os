// const cds = require('@sap/cds');

// // 1. Import the MDBHandler
// const MDBHandler =require("cap_mdb_handler");

// const db_name="mongo-os-db"
// const {monoghost,mongopass,mongouri}=cds.env
// const uri=monoghost+encodeURIComponent(mongopass)+mongouri;

// // require('dotenv').config();

// module.exports = cds.service.impl(async function () {

//     // 2. Create a new instance of the MDBHandler
//     const oHandler = await MDBHandler(uri, db_name);

//     // 3. Register the event handlers
//     this.on('READ', '*', async (req) => {
//         return await oHandler.read(req);
//     });

//     this.on('CREATE', '*', async (req) => {
//         return await oHandler.create(req);
//     });

//     this.on('UPDATE', '*', async (req) => {
//         return await oHandler.update(req);
//     });

//     this.on('DELETE', '*', async (req) => {
//         return await oHandler.delete(req);
//     });
// });