function aclean(array) {
  let map = new Map();
  for (let word of array) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}