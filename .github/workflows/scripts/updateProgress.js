import fs from "fs";

const progress = JSON.parse(fs.readFileSync("progress.json", "utf8"));
let table = `| Day | Status |\n|-----|--------|\n`;
Object.keys(progress).forEach(day => {
    table += `| ${day} | ${progress[day]} |\n`;
});

const readme = fs.readFileSync("README.md", "utf8");
const newSection =
    `## 📅 Progress Tracker\n\n${table}\n_Last updated: ${new Date().toUTCString()}_`;

const updated = readme.replace(
    /## 📅 Progress Tracker[\s\S]*?(?=\n##|$)/,
    newSection
);

fs.writeFileSync("README.md", updated);
console.log("✅ README progress updated");
