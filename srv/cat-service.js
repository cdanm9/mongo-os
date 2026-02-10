const cds = require('@sap/cds')

// 1. Import the MDBHandler
const MDBHandler =require("cap_mdb_handler").default;
const db_name="mongo-os-db"
const {mongohost,mongopass,mongouri,mongourl}=cds.env
const uri=mongohost+encodeURIComponent(mongopass)+mongouri;
console.log(mongourl)

module.exports = class CatalogService extends cds.ApplicationService { async init() {
      const oHandler = new MDBHandler(uri, db_name);

  const { Books } = cds.entities('CatalogService')
  



  this.before (['CREATE', 'UPDATE'], Books, async (req) => {
    console.log('Before CREATE/UPDATE Books', req.data)
  })
  this.after ('READ', Books, async (books, req) => {
    console.log('After READ Books', books)
  })

   this.on('READ', '*', async (req) => {
        return await oHandler.read(req);
    });

    this.on('CREATE', '*', async (req) => {
        return await oHandler.create(req);
    });

    this.on('UPDATE', '*', async (req) => {
        return await oHandler.update(req);
    });

    this.on('DELETE', '*', async (req) => {
        return await oHandler.delete(req);
    });


  return super.init()
}}
