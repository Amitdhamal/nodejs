function breadcutting(callback) {
    console.log('Cutting the bread...');
  setTimeout(() => {
    console.log('Bread is cut.');
    callback(null,'Cut Bread');
  }, 1000);
}

function addFilling(sandwich, callback) {
    console.log('Adding filling to the sandwich...');
    setTimeout(() =>  {
        console.log('Filling added to the sandwich.');
        callback(null,'Filled Sandwich');
    }, 1000);
}

function grillSandwich(sandwich, callback) {
    console.log('Grilling the sandwich...');
    setTimeout(() => {
        console.log('Sandwich is grilled.');
        callback(null,'Grilled Sandwich');
    }, 1000);
}

breadcutting((err,bread) => {
    if (err) {
        console.error('Error cutting bread: ', err);
        return;
    }
    addFilling(bread, (err,uncookedsandwitch) => {
        if (err) {
            console.error('Error adding filling: ', err);
            return;
        }    
        grillSandwich(uncookedsandwitch, (err, sandwich) => {
            if (err) {
                console.error('Error grilling sandwich: ', err);
                return;
            }
            setTimeout(() => { 
                console.log('Sandwich is ready to serve!')
            },1000)
        });
    });
});