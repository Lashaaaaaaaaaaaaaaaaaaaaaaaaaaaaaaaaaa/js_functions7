// 1 homework

// function mySetTimeout(delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }

// mySetTimeout(3000).then(() => {
//     console.log('3 seconds passed');
// });





// 2 homework

function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}


function makeToy(time) {
    console.log('Starting to make toy');
    return mySetTimeout(time).then(() => {
        console.log('Toy made!');
        return 'Toy ^';
    });
}


function deliverToys(time) {
    console.log('Starting to deliver toy');
    return mySetTimeout(time).then(() => {
        return 'Toy Delivered';
    });
}


function sellToy(time) {
    console.log('Starting to sell toy');
    return mySetTimeout(time).then(() => {
        return 'Toy Sold!';
    });
}



// then / catch

makeToy(3000)
    .then((result) => {
        console.log(result); // ამოაგდებს: Toy made!
        return deliverToys(2000);
    })
    .then((result) => {
        console.log(result); // ამოაგდებს: Toy delivered!
        return sellToy(1000);
    })
    .then((result) => {
        console.log(result); // ამოაგდებს: Toy sold!
    })
    .catch((error) => {
        console.error('Operation failed:', error);
    });


// async / await
    
async function ToyShop() {
    try {
        const toy = await makeToy(3000);
        console.log(toy); // ამოაგდებს: Toy made!
    
        const delivered = await deliverToys(2000);
        console.log(delivered); // ამოაგდებს: Toy delivered!
    
        const sold = await sellToy(1000);
        console.log(sold); // ამოაგდებს Toy sold!
    } catch (error) {
            console.error('Operation failed:', error);
    }
}
    
ToyShop();