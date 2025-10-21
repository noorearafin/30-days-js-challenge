const fs = require("fs");
const path = require("path");

const PROGRESS_FILE = path.join(__dirname, "../../progress.json");

let progress = {};
if (fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
} else {
    progress = { completedDays: 0 };
}

progress.completedDays += 1;

fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

console.log(`✅ Progress updated! Completed days: ${progress.completedDays}`);

