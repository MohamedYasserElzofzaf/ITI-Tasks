describe("Test createArray function", () => {
    let length = 0;
    beforeEach(() => {
        length++;
    });

    it("should be return length of array", () => {
        expect(createArray(3)).to.have.lengthOf(3);
    });

    it("should be return array type", () => {
        expect(createArray(3)).to.be.an("array");
    });

    it("should be return length of length variable", () => {
        assert.lengthOf(createArray(length), length, "Not Equal");
    });

    it("pending test");
});