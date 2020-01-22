
const expensiveOperation = () =>{
    console.log('expensiveOperation function is called!');
    return 22;
  }

const memoizedFn = (expensiveOperation) => {
    let cachedResult;
    return () => {
        if(cachedResult) return cachedResult;
        
        else{
            cachedResult = expensiveOperation();
            return cachedResult;
        }
    }
};

const init = () => {
    const memoized = memoizedFn(expensiveOperation);
    console.log(memoized());
    console.log(memoized());
    console.log(memoized());
}
module.exports = {
    memoizedFn,
    init
}