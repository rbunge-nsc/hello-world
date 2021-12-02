var careers = [
    'technical project manager',
    'technical program manager',
    'web developer',
    'software engineer',
    'system analyst',
    'devops engineer',
    'business analyst',
    'product manager',
    'architect',
    'quality assurance engineer',
    'UX designer',
    'UI designer',
    'product manager',
    'data scientist',
    'machine learning engineer',
    'data analyst',
    'database admin',
    'network architect',
    'full stack developer',
    'cloud computing engineer',
    'information security analyst',
    'data security analyst',
    'mobile developer',
    'systems engineer',
    'ethical hacker',
    'cloud administrator',
    'accessibility specialist',
    'network engineer',
    'computer support technician',
    'technical support',
    'IT support',
    'web designer',
    'web producer',
    'SEO manager',
    'sales engineer',
    'business systems analyst',
    'security specialist',
    'IT security analyst',
    'network security engineer',
    'cyber security specialist',
    'computer forensic investigator',
    'network reliability engineer',
    'network infrastructure specialist',
    'game developer',
    'computer programmer',
    'chief information officer',
    'chief technology officer',
    'security engineer',
    'network development engineer',
    'business intelligence engineer',
    'system development engineer',
    'cloud support engineer',
    'SDET (software design engineer in test)',
    'IT application development engineer',
    'windows systems engineer',
    'SysOps manager',
    'Linux Operations Manager',
    'IT Support Engineer',
    'Technical Sales',
    'Technical Trainer',
    'Technology Specialist',
    'CRM (customer relationship management) developer',
    'support escalation engineer',
    'hardware engineer',
    'hardware tester',
    'technical account manager',
    'technical delivery manager',
    'systems support manager',
    'systems support engineer',
    'Data & AI specialist'
]


// generates a random number
function newCareer() {
    var randomNumber = Math.floor(Math.random() * careers.length - 1);
    document.getElementById('displayCareer').innerHTML = careers[randomNumber];
}

function getHint(){
var txt
if (confirm("The world is at your fingertips! Basic internet searches are extremely helpful if you know what you're looking for!"));
}

function getHint2(){
var txt
if (confirm("Try doing an interent search for the first portion of the comment text."));
}

function getHint3(){
var txt
if (confirm("Do you know the keyboard shortcut for select all?"));
}
