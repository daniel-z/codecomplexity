/* eslint-disable no-new-func */
function buildFnc(fncCode) {
  return Function(`
    return (inputArray) => {
      ${fncCode}
    };
  `)();
}

function* generateIterator(limit) {
  let idx = 0;
  while (idx < limit) yield idx++;
}

onmessage = function(message) {
  const { code } = message.data[0];
  const testFunction = buildFnc(code);
  const metrics = [];
  let testCases = [1000, 5000, 10000, 15000, 20000, 30000, 50000, 100000, 150000];

  testCases.forEach((arrayItems, idx) => {
    const startTime = Date.now();

    testFunction(Array(arrayItems));
    const endTime = Date.now();

    metrics.push({
      name: arrayItems,
      time: endTime - startTime
    });

    postMessage(metrics);
  });
};
