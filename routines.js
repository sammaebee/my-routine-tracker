/* ================= DATA ================= */

const routines = {
  morning: {
    title: "🌅 Morning Routine",
    tasks: [
      { name: "5 min of extra sleep...", minutes: 5 },
      { name: "bed stretches, wake up...", minutes: 10 },
      { name: "Ok, GET UP & stretch [ice and boil water]", minutes: 15 },
      { name: "sit & enjoy tea & get sunlight", minutes: 10 },
      {
        name: "do puzzle, math, music theory + ur to-do list. more silence pls",
        minutes: 20,
      },
      { name: "eat food at the piano/guitar or draw & eat", minutes: 30 },
    ],
  },
  workMorning: {
    title: "☀️ Morning Routine (work)",
    tasks: [
      { name: "5 min of extra sleep...", minutes: 5 },
      { name: "bed stretches, wake up...", minutes: 5 },
      { name: "Ok, GET UP & stretch [ice and boil water]", minutes: 10 },
      { name: "Clean Teeth & cover hair", minutes: 5 },
      { name: "Shower", minutes: 10 },
      { name: "Dry up, lotion, skin care", minutes: 10 },
      { name: "Put on Clothes", minutes: 5 },
      { name: "Do hair style", minutes: 6 },
      { name: "Pack Bag, lunch, water. Rest up, drink tea", minutes: 15 },
      { name: "Go down to car & start it", minutes: 7 },
    ],
  },
  night: {
    title: "🌙 Night Routine",
    tasks: [
      { name: "Wind Down - Prep Bedroom Lights, Clothes, Water", minutes: 8 },
      { name: "Cover Hair & Floss", minutes: 3 },
      { name: "Brush tongue", minutes: 1 },
      { name: "Use Mouthwash", minutes: 2 },
      { name: "Brush Teeth", minutes: 2 },
      { name: "Shower & Clean face", minutes: 10 },
      { name: "Dry & Rest up", minutes: 8 },
      { name: "Put on clothes", minutes: 2 },
      { name: "Skin care - Gross pad, lip balm, moisturizer", minutes: 8 },
      { name: "Chill, night stretches + Whiten teeth", minutes: 20 },
      { name: "Rinse teeth + put back invisalign (chewy)", minutes: 5 },
    ],
  },
  nightShower: {
    title: "🌚 Night Routine (shower)",
    tasks: [
      { name: "Wind Down - Prep Bedroom Lights, Clothes, Water", minutes: 8 },
      { name: "Floss", minutes: 3 },
      { name: "Brush tongue", minutes: 1 },
      { name: "Use Mouthwash", minutes: 2 },
      { name: "Brush Teeth", minutes: 2 },
      { name: "Shower & Clean face", minutes: 15 },
      { name: "Dry & Rest up", minutes: 8 },
      { name: "Put on clothes", minutes: 2 },
      { name: "Skin care - Gross pad, lip balm, moisturizer", minutes: 8 },
      { name: "Chill, night stretches + Whiten teeth", minutes: 20 },
      { name: "Rinse teeth + put back invisalign (chewy)", minutes: 5 },
      { name: "Dry Scalp & Hair", minutes: 8 },
    ],
  },
  everythingShower: {
    title: "🧼 Everything Shower",
    tasks: [
      { name: "GET READY - get washcloth, hair clip, shaver, breathe...", minutes: 8 },
      { name: "Clarifying Shampoo", minutes: 4 },
      { name: "Normal Shampoo", minutes: 2 },
      { name: "Hair Mask + Leave on & Close water...", minutes: 3 },
      { name: "Wash Body (or Italy Towel time :0)", minutes: 8 },
      { name: "Shave Face, Pit, Arm, Leg", minutes: 15 },
      { name: "Get out & Dry up", minutes: 5 },
      { name: "Skin care - Gross pad, lip balm, moisturizer", minutes: 8 },
      { name: "Nose peel & Shave the inside of nose", minutes: 20 },
      { name: "Face, Hand, Feet masks", minutes: 5 },
      { name: "Nail Maintenance", minutes: 8 },
      { name: "Dry Hair", minutes: 8 },
    ],
  },
  middayStretch: {
    title: "🧍‍♂️ Midday Stretch",
    tasks: [
      { name: "Neck Rolls", minutes: 0.5 },
      { name: "Chin Reductions", minutes: 0.5 },
      { name: "Neck Extension - All Directions", minutes: 0.5},
      { name: "Ear to Shoulder Pull Both Sides", minutes: 0.5 },
      { name: "Overhead Tricep", minutes: 0.5 },
      { name: "Shoulder Rolls", minutes: 0.5 },
      { name: "Hold Hands Behind Back Stretch", minutes: 0.5 },
      { name: "One Arm Hug extends - Both Arms", minutes: 0.5 },
      { name: "Cactus Arms", minutes: 0.5 },
      { name: "Grab Hands On Back", minutes: 0.5 },
      { name: "Wrist Turn Hold", minutes: 0.5 },
      { name: "Arm Twist around body", minutes: 0.5 },
      { name: "Full Body Bend Twists", minutes: 0.5 },
      { name: "Standing Quad - Both Legs", minutes: 0.5 },
      { name: "Squat stretch", minutes: 0.5 },
      { name: "Butterfly Hold", minutes: 0.75},
      { name: "Bended Knees Down", minutes: 0.75 },
      { name: "Legs Agains wall - relax...", minutes: 3 },
    ],
  },
  warmUp: {
    title: "🍋‍🟩 Warm Up (Dynamic)",
    tasks: [
      { name: "Warm-up 1/8 - Arm Circles", minutes: 0.5 },
      { name: "Warm-up 2/8 - Arm Swings", minutes: 0.5 },
      { name: "Warm-up 3/8 - Trunk Twist", minutes: 0.5 },
      { name: "Warm-up 4/8 - Toe Touch Twist", minutes: 0.5 },
      { name: "Warm-up 5/8 - Knee Hugs", minutes: 0.5 },
      { name: "Warm-up 6/8 - Leg Swings", minutes: 0.5 },
      { name: "Warm-up 7/8 - Side Lunges", minutes: 0.5 },
      { name: "Warm-up 8/8 - Jumping Jacks", minutes: 0.5 },
    ],
  },
  coolDown: {
    title: "🍓 Cool Downs (Static)",
    tasks: [
      { name: "Cool Down 1/10 - Upward Salute Hold", minutes: 0.5 },
      { name: "Cool Down 2/10 - Toe Touch Hold", minutes: 0.5 },
      { name: "Cool Down 3/10 - Upward Dog", minutes: 0.5 },
      { name: "Cool Down 4/10 - Childs Pose", minutes: 0.5 },
      { name: "Cool Down 5/10 - Knees to Chest on Floor", minutes: 0.5 },
      { name: "Cool Down 6/10 - Lay Down Folded Leg on other leg", minutes: 0.5 },
      { name: "Cool Down 7/10 - Lay down Butterfly", minutes: 0.5 },
      { name: "Cool Down 8/10 - Spinal Twist ", minutes: 0.5 },
      { name: "Cool Down 9/10 - Normal Butterfly ", minutes: 0.5 },
      { name: "Cool Down 10/10 - Legs on wall Hold ", minutes: 0.5 },
    ],
  },
  cardioExercise: {
    title: "🫀 Cardio Exercise (Mon/Thur)",
    tasks: [
      { name: "Walking", minutes: 25 },
      { name: "Slow Down Walk", minutes: 5 },
      { name: "Cardio Video - https://youtu.be/PqqJBaE4srs?t=38", minutes: 12 },
    ],
  },
  upperBodyExercise: {
    title: "✌️ Upper Body Exercise (Tues/Fri)",
    tasks: [
      { name: "Upper Body & Arms Video - https://www.youtube.com/watch?v=D3ibxlPoino", minutes: 25 },
    ],
  },
  lowerBodyExercise: {
    title: "🏃‍♀️‍➡️ Lower Body Exercise (Weds/Sat)",
    tasks: [
      { name: "Lower Body Exercise (w/o dumbells) - https://www.youtube.com/watch?v=Yx0BW-H5W0 OR (with dumbells) - https://www.youtube.com/watch?v=RxRnfnQe0_s&t=831s", minutes: 25 },
    ],
  },
  piano15: {
    title: "🎹 Piano [15 min]",
    tasks: [
      { name: "Finger & Hand Stretches", minutes: 3 },
      { name: "Major Scales + Say Degree out loud", minutes: 6 },
      { name: "ii-V-I's and Chord Progressions", minutes: 6 },
    ],
  },
  piano30: {
    title: "🎹 Piano [30 min]",
    tasks: [
      { name: "Finger & Hand Stretches", minutes: 3 },
      { name: "Scales/Arpeggios + Say Degree out loud", minutes: 7 },
      { name: "ii-V-I's and Chord Progressions", minutes: 10 },
      { name: "Practice Jazz Standard", minutes: 10 },
    ],
  },
  piano45: {
    title: "🎹 Piano [45 min]",
    tasks: [
      { name: "Finger & Hand Stretches", minutes: 3 },
      { name: "Scales/Arpeggios + Say Degree out loud", minutes: 8.5 },
      { name: "ii-V-I's and Chord Progressions", minutes: 10 },
      { name: "Shell/Rootless Chord Voicings", minutes: 8.5 },
      { name: "Practice Jazz Standard", minutes: 15 },
    ],
  },
  piano60: {
    title: "🎹 Piano [1 Hr]",
    tasks: [
      { name: "Finger & Hand Stretches", minutes: 3 },
      { name: "Scales/Arpeggios + Say Degree out loud", minutes: 10 },
      { name: "ii-V-I's and Chord Progressions", minutes: 12 },
      { name: "Shell/Rootless Chord Voicings", minutes: 8 },
      { name: "Practice Jazz Standard", minutes: 20 },
      { name: "Improv over standard", minutes: 7 },
    ],
  },
  musicTheory15: {
    title: "🎵 Music Theory [15 min]",
    tasks: [
      { name: "Writing Warm Up", minutes: 5 },
      { name: "Music Knowledge - Tenuto & Music Trainer apps", minutes: 5 },
      { name: "Ear Training - Perfect Ear & Chet apps", minutes: 5 },
    ],
  },
  musicTheory30: {
    title: "🎵 Music Theory [30 min]",
    tasks: [
      { name: "Writing Warm Up", minutes: 8 },
      { name: "Music Knowledge - Tenuto & Music Trainer apps", minutes: 8 },
      { name: "Ear Training - Perfect Ear & Chet apps", minutes: 8 },
      { name: "Jazz Standard Study", minutes: 6 },
    ],
  },
  musicTheory45: {
    title: "🎵 Music Theory [45 min]",
    tasks: [
      { name: "Writing Warm Up", minutes: 10 },
      { name: "Music Knowledge - Tenuto & Music Trainer apps", minutes: 9 },
      { name: "Jazz Book", minutes: 11 },
      { name: "Ear Training - Perfect Ear & Chet apps", minutes: 9 },
      { name: "Jazz Standard Study", minutes: 6 },
    ],
  },
  musicTheory60: {
    title: "🎵 Music Theory [1 Hr]",
    tasks: [
      { name: "Writing Warm Up", minutes: 10 },
      { name: "Music Knowledge - Tenuto & Music Trainer apps", minutes: 10 },
      { name: "Jazz Book", minutes: 24 },
      { name: "Ear Training - Perfect Ear & Chet apps", minutes: 10 },
      { name: "Jazz Standard Study", minutes: 6 },
    ],
  },
  guitar15: {
    title: "🎸 Guitar [15 min]",
    tasks: [
      { name: "Warm Up : Scales + Spider 1-2-3-4 or 1-3-2-4", minutes: 5 },
      { name: "Fretboard Practice", minutes: 5 },
      { name: "Chord Shapes & Chord Transitions", minutes: 5 },
    ],
  },
  guitar30: {
    title: "🎸 Guitar [30 min]",
    tasks: [
      { name: "Warm Up : Scales + Spider 1-2-3-4 or 1-3-2-4", minutes: 5 },
      { name: "Fretboard Practice", minutes: 10 },
      { name: "Chord Shapes & Chord Transitions", minutes: 5 },
      { name: "Strumming Pattern", minutes: 5 },
      { name: "Play a solo", minutes: 5 },
    ],
  },
  guitar45: {
    title: "🎸 Guitar [45 min]",
    tasks: [
      { name: "Warm Up : Scales + Spider 1-2-3-4 or 1-3-2-4", minutes: 5 },
      { name: "Fretboard Practice", minutes: 10 },
      { name: "Chord Shapes & Chord Transitions & Power Chords", minutes: 10 },
      { name: "Strumming Pattern", minutes: 5 },
      { name: "Play a solo", minutes: 15 },
    ],
  },
  drawing15: {
    title: "✏️ drawing [15 min]",
    tasks: [
      { name: "Warm Ups", minutes: 5 },
      { name: "Caricature - Face 1", minutes: 2.5 },
      { name: "Caricature - Face 2", minutes: 2.5 },
      { name: "Body Poses Study", minutes: 5 },
    ],
  },
  drawing30: {
    title: "✏️ drawing [30 min]",
    tasks: [
      { name: "Warm Ups", minutes: 5 },
      { name: "Caricature - Face 1", minutes: 2.5 },
      { name: "Caricature - Face 2", minutes: 2.5 },
      { name: "Body Poses Study", minutes: 10 },
      { name: "Face Study", minutes: 10 },
    ],
  },
  drawing45: {
    title: "✏️ drawing [45 min]",
    tasks: [
      { name: "Warm Ups", minutes: 5 },
      { name: "Caricature - Face 1", minutes: 2.5 },
      { name: "Caricature - Face 2", minutes: 2.5 },
      { name: "Character Poses Sketches", minutes: 10 },
      { name: "Face Study", minutes: 10 },
      { name: "Animation Practice", minutes: 15 },
    ],
  },
  drawing60: {
    title: "✏️ drawing [1 Hr]",
    tasks: [
      { name: "Warm Ups", minutes: 3 },
      { name: "1 Quick Caricature", minutes: 2 },
      { name: "Character Poses Sketches", minutes: 15 },
      { name: "Face Study", minutes: 15 },
      { name: "Animation Practice", minutes: 15 },
      { name: "Wind Down: Other Artist Style Study", minutes: 10 },
    ],
  },
};

let currentRoutineKey = null;
let currentRoutine = null;
let currentTaskIndex = 0;
let timeRemaining = 0;
let timerInterval = null;
let paused = false;
let lastBeepSecond = null;

/* ================= HELPERS ================= */

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function getTotalMinutes(tasks) {
  return tasks.reduce((s, t) => s + t.minutes, 0);
}

/* ================= ROUTINE META ================= */

function populateRoutineMeta() {
  Object.keys(routines).forEach((key) => {
    const r = routines[key];
    const total = getTotalMinutes(r.tasks);
    const done = new Date(Date.now() + total * 60000);
    document.getElementById(`${key}Meta`).innerText = `${
      r.tasks.length
    } tasks • ${total} min • Done by ${formatTime(done)}`;
  });
}

/* ================= SCHEDULE ================= */

function buildScheduleTable(startTime = new Date()) {
  const tbody = document.getElementById("scheduleTableBody");
  tbody.innerHTML = "";

  let t = new Date(startTime);

  currentRoutine.tasks.forEach((task, i) => {
    t = new Date(t.getTime() + task.minutes * 60000);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${task.name}</td>
      <td>${task.minutes} min</td>
      <td>${formatTime(t)}</td>
    `;
    tbody.appendChild(row);
  });
}

function updateScheduleHighlight() {
  document.querySelectorAll("#scheduleTableBody tr").forEach((row, i) => {
    row.classList.remove("task-current", "task-complete");
    if (i < currentTaskIndex) row.classList.add("task-complete");
    if (i === currentTaskIndex) row.classList.add("task-current");
  });
}

/* ================= TIMER ================= */

function startRoutine(key, resume = false) {
  currentRoutineKey = key;
  currentRoutine = routines[key];

  document.getElementById("routineGrid").style.display = "none";
  document.getElementById("timerView").style.display = "block";
  document.getElementById("routineTitle").innerText = currentRoutine.title;
  document.getElementById("taskTotal").innerText = currentRoutine.tasks.length;

  buildScheduleTable();
  if (!resume) currentTaskIndex = 0;
  startTask();
}

function startTask() {
  const task = currentRoutine.tasks[currentTaskIndex];
  if (!paused) timeRemaining ||= task.minutes * 60;

  lastBeepSecond = null;

  document.getElementById("taskName").innerText = task.name;
  document.getElementById("taskIndex").innerText = currentTaskIndex + 1;

  updateScheduleHighlight();
  updateTimerDisplay();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!paused) {
      timeRemaining--;
      if (
        timeRemaining <= 5 &&
        timeRemaining > 0 &&
        lastBeepSecond !== timeRemaining
      ) {
        document.getElementById("beep").play();
        lastBeepSecond = timeRemaining;
      }

      saveState();

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        currentTaskIndex++;
        timeRemaining = 0;

        document.getElementById("beep").play();

        currentTaskIndex >= currentRoutine.tasks.length
          ? finishRoutine()
          : startTask();
      }

      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById("timeLeft").innerText = `${String(
    Math.floor(timeRemaining / 60)
  ).padStart(2, "0")}:${String(timeRemaining % 60).padStart(2, "0")}`;
}

function pauseTimer() {
  paused = true;
}

function resumeTimer() {
  paused = false;
  refreshScheduleFromNow();
}

/* ================= COMPLETE + SHOW RANDOM IMAGE ================= */
const images = [
  "./assets/pic1.jpg",
  "./assets/pic2.jpg",
  "./assets/pic3.jpg",
  "./assets/pic4.gif",
  "./assets/pic5.jpg",
  "./assets/pic6.jpg",
  "./assets/pic7.jpg",
  "./assets/pic8.jpg",
  "./assets/pic9.jpg",
  "./assets/pic10.jpg",
  "./assets/pic11.jpg",
  "./assets/pic12.jpg",
  "./assets/pic13.jpg",
  "./assets/pic14.jpg",
  "./assets/pic15.jpg",
  "./assets/pic16.jpg",
  "./assets/pic17.jpg",
  "./assets/pic18.jpg",
  "./assets/pic19.jpg",
  "./assets/pic20.jpg",
  "./assets/pic21.jpg",
];

const modal = new bootstrap.Modal(document.getElementById("imageModal"), {
  backdrop: "static",
  keyboard: false,
});

function showRandomImage() {
  const img = document.getElementById("modalImage");
  const random = images[Math.floor(Math.random() * images.length)];
  img.src = random;

  modal.show();

  setTimeout(() => {
    modal.hide();
    img.src = "";
  }, 10000);
}

function finishRoutine() {
  showRandomImage();

  document.getElementById("done").play();
  localStorage.removeItem("routineState");
  document.getElementById("taskName").innerText = "Routine Complete 🎉";
  document.getElementById;
}

/* ================= STORAGE ================= */

function saveState() {
  localStorage.setItem(
    "routineState",
    JSON.stringify({
      key: currentRoutineKey,
      task: currentTaskIndex,
      time: timeRemaining,
    })
  );
}

function loadState() {
  const state = JSON.parse(localStorage.getItem("routineState"));
  if (state) {
    currentTaskIndex = state.task;
    timeRemaining = state.time;
    startRoutine(state.key, true);
  }
}

/* ================= SKIP TASK ================= */

function skipTask() {
  clearInterval(timerInterval);
  document.getElementById("beep").play();

  currentTaskIndex++;
  timeRemaining = 0;
  paused = false;

  if (currentTaskIndex >= currentRoutine.tasks.length) {
    finishRoutine();
    return;
  }

  refreshScheduleFromNow();
  startTask();
}

function refreshScheduleFromNow() {
  const tbody = document.getElementById("scheduleTableBody");
  tbody.innerHTML = "";

  let now = new Date();

  currentRoutine.tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    if (index < currentTaskIndex) {
      row.classList.add("task-complete");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${task.name}</td>
        <td>${task.minutes} min</td>
        <td>✔</td>
      `;
    } else {
      now = new Date(now.getTime() + task.minutes * 60000);
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${task.name}</td>
        <td>${task.minutes} min</td>
        <td>${formatTime(now)}</td>
      `;
    }

    tbody.appendChild(row);
  });

  updateScheduleHighlight();
}

/* ================= RESET LOGO ================= */

function resetToHome() {
  if (currentRoutine) {
    const confirmReset = confirm("Are you sure you want to end this timer?");
    if (!confirmReset) return;
  }

  clearInterval(timerInterval);
  timerInterval = null;

  currentRoutineKey = null;
  currentRoutine = null;
  currentTaskIndex = 0;
  timeRemaining = 0;
  paused = false;

  localStorage.removeItem("routineState");

  document.getElementById("timerView").style.display = "none";
  document.getElementById("routineGrid").style.display = "block";

  populateRoutineMeta();
}

/* ================= THEME ================= */

function toggleTheme() {
  const html = document.documentElement;
  const next = html.dataset.bsTheme === "light" ? "dark" : "light";
  html.dataset.bsTheme = next;
  localStorage.setItem("theme", next);
}

function loadTheme() {
  document.documentElement.dataset.bsTheme =
    localStorage.getItem("theme") || "light";
}

/* ================= INIT ================= */

loadTheme();
populateRoutineMeta();
loadState();

