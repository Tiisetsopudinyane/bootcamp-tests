var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = findItemsOver(itemList, 25);
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    describe("this test",function(){it("should return an array as expected ",function(){
        assert.deepEqual(findItemsOver(itemList,20),results,"must return"+results)
    });});
