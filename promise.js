const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (stringFilter) => {
  try {
    const [resultIXX, resultVGC] = await Promise.all([
                                      promiseTheaterIXX(),
                                      promiseTheaterVGC(),
                                   ]);
    let sum = 0;
    sum += resultIXX?.filter((item) => item.hasil === stringFilter)?.length || 0;
    sum += resultVGC?.filter((item) => item.hasil === stringFilter)?.length || 0;
    return sum;
  } catch (error) {
    console.log("Error: " + error);
  }
};

module.exports = {
  promiseOutput,
};
