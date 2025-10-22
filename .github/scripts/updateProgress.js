const fs = require("fs");
const path = require("path");

const PROGRESS_FILE = path.join(__dirname, "../../progress.json");

function readProgress() {
    if (!fs.existsSync(PROGRESS_FILE)) return {};
    try {
        return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
    } catch (err) {
        console.warn(`Warning: failed to parse ${PROGRESS_FILE}: ${err.message}`);
        return {};
    }
}

function writeProgress(p) {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(p, null, 2) + "\n");
}

function computeCompletedFromDays(progress) {
    const dayKeys = Object.keys(progress).filter((k) => /^Day\s+\d+$/i.test(k));
    return dayKeys.filter((k) => /completed|✅/i.test(String(progress[k] || ""))).length;
}

const progress = readProgress();

// compute completedDays if missing or not a number
const computed = computeCompletedFromDays(progress);
if (typeof progress.completedDays !== "number" || Number.isNaN(progress.completedDays)) {
    progress.completedDays = computed;
    writeProgress(progress);
    console.log(`Normalized completedDays -> ${computed}`);
} else if (progress.completedDays !== computed) {
    // keep completedDays in sync with Day entries
    progress.completedDays = computed;
    writeProgress(progress);
    console.log(`Synchronized completedDays -> ${computed}`);
} else {
    console.log(`No change. completedDays = ${progress.completedDays}`);
}

