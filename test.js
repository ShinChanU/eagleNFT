const fs = require("fs");

let inputStr = "3) white NAVY suit";
let len = 33066;
let cnt = 0;
let percent;

for (let i = 1; i <= len; i++) {
  try {
    var data = fs.readFileSync(`build/json/${i}.json`, "utf8");
    if (data.includes(inputStr)) {
      cnt++;
      console.log(`imageNum: ${i}`);
    }
  } catch (e) {
    console.log(e);
  }
}

percent = (100 / (len / cnt)).toFixed(5);

console.log(`${inputStr} 총 개수: ${cnt}, 나올 확률 ${percent}`);
