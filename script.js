const prompts=[
"You are facing competition from newer stores that target the newer generation better.",
"How can you appeal to a new customer base while already having an established, loyal old one?",
"How do you plan on measuring the success of your plan?",
"How should we adapt without lowering prices like our competitors have?",
"How can we train our staff to prevent future similar hospitality conflicts?",
"How will you ensure that the unique, casual brand identity of our food truck successfully translates into a sit-down dining experience?",
"How do we pivot our current promotional schedule and billboard advertisements that heavily feature this suspended athlete?",
"What digital strategies can give our brand the highest customer interaction and return?",
"How will you ensure the loyalty of the new customers we are attracting?",
"How would you respond if your proposed solution requires significant changes from employees who are already comfortable with the current system?"
];
let current=0;
const text=document.getElementById("prompt-text"), number=document.getElementById("prompt-number");
document.getElementById("generate-btn").onclick=()=>{let n=Math.floor(Math.random()*prompts.length);if(n===current)n=(n+1)%prompts.length;current=n;text.textContent=prompts[n];number.textContent=`${String(n+1).padStart(2,"0")} / ${prompts.length}`};
let seconds=300, interval=null;const display=document.getElementById("timer-display"),timer=document.querySelector(".timer");
function render(){let m=Math.floor(seconds/60),s=seconds%60;display.textContent=`${m}:${String(s).padStart(2,"0")}`;let p=((300-seconds)/300)*360;timer.style.background=`conic-gradient(var(--pink) ${p}deg,rgba(255,255,255,.12) ${p}deg)`}
document.getElementById("start-btn").onclick=()=>{if(interval)return;interval=setInterval(()=>{if(seconds<=0){clearInterval(interval);interval=null;return}seconds--;render()},1000)};
document.getElementById("pause-btn").onclick=()=>{clearInterval(interval);interval=null};
document.getElementById("reset-btn").onclick=()=>{clearInterval(interval);interval=null;seconds=300;render()};render();
