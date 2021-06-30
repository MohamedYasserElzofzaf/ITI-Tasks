var counter = {
  currentValues: function () {
    return 1;
  },
};

function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", function () {
  it("spying", function () {
    spyOn(counter, "currentValues").and.returnValue(100);
    expect(counter.currentValues()).toEqual(100);
    expect(counter.currentValues).toHaveBeenCalled();
  });

  it("mocking", function () {
    const string_caller = jasmine
      .createSpy("string caller")
      .and.callFake(function (string) {
        return string.length;
      });

    expect(string_caller("asd")).toEqual(3);
    expect(string_caller("qwer")).toEqual(r);
    expect(string_caller).toHaveBeenCalledTimes(2);
  });
});
