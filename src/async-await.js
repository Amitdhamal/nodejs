
let bread = true;
let veggies = true;
let toaster = true;

function breadcutting() {
    return new Promise((resolve, reject) => {
        console.log('Cutting the bread...');
        setTimeout(() => {
            console.log('Bread is cut.');
            if(bread){
                resolve('Cut Bread');
            }
            reject('bread is not available');
        }, 1000);
    });
}

function addiingVeggies(cutted_bread) {
  return new Promise((resolve, reject) => {
        console.log('Adding veggies to the sandwich...')
        setTimeout(() => {
            if(veggies){
                console.log('Veggies added to the sandwich.');
                resolve('Veggie Sandwich');
            }   else {
                reject('veggies are not available');
            }
        resolve('Veggie Sandwich');
    }, 1000);
  });
}

function grilling(ungrilled_sandwich) {
   return new Promise((resolve, reject) => {
    console.log('Grilling the sandwich...')
    setTimeout(() => {
        if(toaster){
            console.log('Sandwich is grilled.');
            resolve('Grilled Sandwich');
        } else{reject('toaster is not available');    

        }    
    }, 1000);
   });
}

async function makeSandwich() {
    try {
        const bread = await breadcutting();
        const veggies = await addiingVeggies(bread);
        const grilledSandwich = await grilling(veggies);
        console.log('Sandwich is ready to serve!');
    } catch (error) {
        console.error('Error making sandwich: ', error);
    }
}
makeSandwich();
