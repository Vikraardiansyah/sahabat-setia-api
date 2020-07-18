const chai = require("chai");
const chaiHttp = require("chai-http");
const server = "http://localhost:5000";
chai.use(chaiHttp);
chai.should();
describe("Books.js", () => {
  describe("/books/", () => {
    it("should return success get all books", () => {
      chai
        .request(server)
        .get("/books")
        .end((err, res) => {
          chai.assert.equal(res.status, 200);
          chai.assert.lengthOf(res.body.data, 6);
        });
    });
  });
});
