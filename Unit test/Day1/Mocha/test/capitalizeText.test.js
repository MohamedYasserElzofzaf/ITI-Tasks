describe("Test capitalText function return capitalized string", () => {
    it("should output capitalized string ", () => {
        capitalizeText("yasser").should.equal("YASSER");
    });

    it("should output string type", () => {
        capitalizeText("yasser").should.be.a("string");
    });

    it("should throw error", () => {
        expect(capitalizeText).to.throw(TypeError, "parameter should be string");
    });
});