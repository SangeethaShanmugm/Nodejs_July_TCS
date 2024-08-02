let chai = require("chai")
let chaiHttp = require("chai-http");
let expect = chai.expect;

chai.use(chaiHttp)

describe("Test my rest api", () => {
    it("should return status 200 for /", async function () {
        try {
            const res = await chai.request("http://localhost:4000").get("/")
            expect(res).to.have.status(200)
        } catch (err) {
            throw err
        }
    })

    it("should return status 200 for /movies", async function () {
        try {
            const res = await chai.request("http://localhost:4000").get("/movies")
            expect(res).to.have.status(200)
        } catch (err) {
            throw err
        }
    })
    it("should return status 404 for /movies", async function () {
        try {
            const res = await chai.request("http://localhost:4000").get("/movies")
            expect(res).to.have.status(404)
        } catch (err) {
            throw err
        }
    })
})