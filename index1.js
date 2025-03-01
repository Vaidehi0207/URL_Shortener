const promises = () => {
    return new Promise((resolve, reject) =>{
        resolve('Success');
    })
};
promises().then(() => {
    console.log('Resolved');
})



