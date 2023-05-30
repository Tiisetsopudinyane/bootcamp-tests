describe("this test yearsAgo function",function(){
it("should return number of years",function(){
        assert.equal(yearsAgo(1997),new Date().getFullYear()-1997,"output should be the difference of current year and the input year")
    });});
