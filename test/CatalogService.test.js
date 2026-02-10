const cds = require('@sap/cds')

const { GET, POST,PATCH,DELETE, expect, axios } = cds.test (__dirname+'/..')
// axios.defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves GET CatalogService.Books', async () => {
    const { data ,status} = await GET `/odata/v4/catalog/Books ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([
      {"ID":1,"title":"Wuthering Waves"},
    ])
    expect(status).to.equal(200)
  })
  
  it('serves POST CatalogService.Books', async () => {
    const oPostData={
      "ID":5,
      "title":"Elden Ring",
      "stock":50
    }
    const { data,status } = await POST `/odata/v4/catalog/Books ${oPostData}`
    expect(data).to.containSubset(
      {"ID":5,"title":"Elden Ring"})
    expect(status).to.equal(201)
  })
  it('serves PATCH CatalogService.Books', async () => {
    const oPatchData={
      "ID":5,
      "title":"God Of War"
    }
    const { data,status } = await PATCH(`/odata/v4/catalog/Books('5')`,oPatchData)
    expect(data).to.containSubset(
      {"ID":5,"title":"God Of War"},
    )
    expect(status).to.equal(200)
  })

  it('serves DELETE CatalogService.Books', async () => {
    const { status } = await DELETE(`/odata/v4/catalog/Books('5')`)
    expect(status).to.equal(204)
  })

})
