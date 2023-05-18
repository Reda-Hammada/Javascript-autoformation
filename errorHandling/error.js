// Error
// Error;
// new Error("ops an error");

// throw error or exception and stop the program in the run time
// throw new Error();

//  try & catch
function fail() {
  try {
    console.log("this works");
    throw new Error("oopsie !!!");
  } catch (error) {
    console.log("we have made an opsie", error);
  } finally {
    console.log("still good");
    return "returning fail";
  }
}

fail();

// asynchornous error handling
// promises

function promiseFail() {
  Promise.resolve("async")
    .then((res) => {
      throw new Error("fail 1");

      console.log(res);
      return res;
    })
    // it is neccessarily to catch the error otherwise the code will fail silentely
    .catch((Err) => {
      console.log(Err);
    });
}
promiseFail();

// async function
(async function asyncError() {
  try {
    await Promise.reject("opsie");
    await Promise.reject("opsie#2");
  } catch (err) {
    console.log(err);
  }
})();
