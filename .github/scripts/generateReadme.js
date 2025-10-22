const fs = require("fs");
const path = require("path");

const PROGRESS_FILE = path.join(__dirname, "../../progress.json");
const README_FILE = path.join(__dirname, "../../README.md");

function readProgress() {
    if (!fs.existsSync(PROGRESS_FILE)) return {};
    try {
        return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
    } catch (err) {
        console.warn(`Warning: failed to parse ${PROGRESS_FILE}: ${err.message}`);
        return {};
    }
}

const progress = readProgress();
const totalDays = 30;
const completed = typeof progress.completedDays === "number" ? progress.completedDays : 0;
const percent = Math.round((completed / totalDays) * 100);

let lines = [];
lines.push("# 30-days-js-challenge");
lines.push("");
lines.push(`Progress: ${completed}/${totalDays} (${percent}%)`);
lines.push("");
lines.push("## Days");
for (let i = 1; i <= totalDays; i++) {
    const key = `Day ${i}`;
    const status = progress[key] || "⏳ Pending";
    lines.push(`- **${key}**: ${status}`);
}
lines.push("");

// write only if different
const content = lines.join("\n");
const prev = fs.existsSync(README_FILE) ? fs.readFileSync(README_FILE, "utf8") : "";
if (prev !== content) {
    fs.writeFileSync(README_FILE, content);
    console.log("README.md updated");
} else {
    console.log("README.md already up to date");
}