
 var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    describe("test findItemsOver20 function",function(){
        it("should return array of items over 20",function(){
        console.log(results);
        console.log(findItemsOver20(itemList))
        assert.equal(results,findItemsOver20(itemList),"it must return "+results)
    });
    });
