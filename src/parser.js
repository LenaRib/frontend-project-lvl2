const genDiff = (filepath1, filepath2) => {
  console.log(filepath1, filepath2);
  const json1 = '{"val1":1, "val2":2}';
  const json2 = '{"val1":2, "val2":2, "val3":3}';
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const len1 = keys1.length;
  const len2 = keys2.length;
  for (let i = 0; i < len1; i += 1) {
    const value1 = obj1[keys1[i]];
    console.log(value1);
    for (let j = 0; j < len2; j += 1) {
      const value2 = obj2[keys2[j]];
      console.log(value2);
    }
  }
};

export default genDiff;
