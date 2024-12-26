const physicsFormulas = [
    {
        topic: "Newton's First Law of Motion",
        description: "বস্তু তার গতিশীল অবস্থা বা স্থির অবস্থায় থাকতে চায়, যতক্ষণ না কোনো বাহ্যিক বল প্রয়োগ হয়।",
        formula: "Inertia = m × v (conceptual, no direct formula)",
        examples: [
            "যদি একটি বস্তু স্থির থাকে, এটি স্থির থাকবে যতক্ষণ না একটি বল প্রয়োগ হয়।",
            "যদি একটি গাড়ি চলতে থাকে, এটি চলতেই থাকবে যতক্ষণ না ব্রেক প্রয়োগ করা হয়।",
            "বস্তুটি থামাতে বা তার গতি পরিবর্তন করতে বল প্রয়োজন।"
        ]
    },
    {
        topic: "Newton's Second Law of Motion",
        description: "বল = ভর × ত্বরণ।",
        formula: "F = ma",
        examples: [
            "যদি m = 10kg এবং a = 2m/s² হয়, তবে F = 20N।",
            "বল এবং ত্বরণের একই দিকে থাকে।",
            "যদি বল বৃদ্ধি পায়, তবে ত্বরণও বৃদ্ধি পাবে।"
        ]
    },
    {
        topic: "Newton's Third Law of Motion",
        description: "প্রতিটি ক্রিয়ার একটি সমান ও বিপরীত প্রতিক্রিয়া থাকে।",
        formula: "F(action) = -F(reaction)",
        examples: [
            "রকেটের ধোঁয়া নিচের দিকে যায়, ফলে রকেট উপরের দিকে উঠে।",
            "একটি গাড়ির টায়ার রাস্তাকে পেছনের দিকে ঠেলে দেয়, ফলে গাড়ি সামনের দিকে যায়।"
        ]
    },
    {
        topic: "Work Done",
        description: "বল প্রয়োগ করে বস্তুর উপর কাজ করার পরিমাণ।",
        formula: "W = F × d × cos(θ)",
        examples: [
            "যদি F = 10N, d = 5m এবং θ = 0° হয়, তবে W = 50J।",
            "একটি বস্তু উপরের দিকে সরানো হলে কাজ ধনাত্মক হয়।",
            "যদি বস্তু না সরানো হয়, কাজ = 0।"
        ]
    },
    {
        topic: "Kinetic Energy",
        description: "বস্তু চলার সময় তার যে শক্তি থাকে।",
        formula: "KE = ½ mv²",
        examples: [
            "যদি m = 5kg এবং v = 3m/s হয়, তবে KE = 22.5J।",
            "গতি দ্বিগুণ হলে, গতিশক্তি চারগুণ হয়।",
            "বস্তুর গতি থামানো হলে গতিশক্তি শূন্য হয়।"
        ]
    },
    {
        topic: "Potential Energy",
        description: "উচ্চতার কারণে সঞ্চিত শক্তি।",
        formula: "PE = mgh",
        examples: [
            "যদি m = 2kg, g = 9.8m/s² এবং h = 5m হয়, তবে PE = 98J।",
            "বস্তুর উচ্চতা দ্বিগুণ হলে, সম্ভাব্য শক্তি দ্বিগুণ হয়।"
        ]
    },
    {
        topic: "Gravitational Force",
        description: "বস্তুর মধ্যে আকর্ষণের বল।",
        formula: "F = G × (m₁m₂)/r²",
        examples: [
            "যদি G = 6.67 × 10⁻¹¹ Nm²/kg², m₁ = 5kg, m₂ = 10kg, এবং r = 2m হয়, তবে F ≈ 8.34 × 10⁻¹⁰ N।",
            "পৃথিবী এবং চাঁদের মধ্যে মহাকর্ষ বলের প্রয়োগ।"
        ]
    },
    {
        topic: "Ohm's Law",
        description: "ভোল্টেজ, প্রবাহ এবং প্রতিরোধের মধ্যে সম্পর্ক।",
        formula: "V = IR",
        examples: [
            "যদি I = 2A এবং R = 5Ω হয়, তবে V = 10V।",
            "বৈদ্যুতিক সার্কিটে ভোল্টেজের পার্থক্য নির্ণয়।"
        ]
    },
    {
        topic: "Power",
        description: "একক সময়ে কাজ করার হার।",
        formula: "P = W/t",
        examples: [
            "যদি W = 100J এবং t = 2s হয়, তবে P = 50W।",
            "বিদ্যুৎ সরঞ্জামের শক্তি প্রয়োজন নির্ধারণ।"
        ]
    },
    {
        topic: "Wave Speed",
        description: "তরঙ্গের বেগ নির্ণয়ের সূত্র।",
        formula: "v = fλ",
        examples: [
            "যদি f = 50Hz এবং λ = 2m হয়, তবে v = 100m/s।",
            "তরঙ্গ ধরণের উপর নির্ভরশীল।"
        ]
    },
    {
        topic: "Acceleration",
        description: "গতি পরিবর্তনের হার।",
        formula: "a = (v - u)/t",
        examples: [
            "যদি v = 20m/s, u = 10m/s এবং t = 5s হয়, তবে a = 2m/s²।",
            "গাড়ির গতি দ্রুত বাড়ানোর উদাহরণ।"
        ]
    },
    {
        topic: "Force of Friction",
        description: "বস্তু চলার বিপরীতে কাজ করা বল।",
        formula: "f = μN",
        examples: [
            "যদি μ = 0.3 এবং N = 50N হয়, তবে f = 15N।",
            "মসৃণ পৃষ্ঠে ঘর্ষণ কম।"
        ]
    },
    {
        topic: "Momentum",
        description: "বস্তুর ভর ও গতির গুণফল।",
        formula: "p = mv",
        examples: [
            "যদি m = 5kg এবং v = 10m/s হয়, তবে p = 50kg·m/s।",
            "একটি চলন্ত গাড়ি এবং একটি স্থির গাড়ির গতিমাত্রা তুলনা।"
        ]
    },
    {
        topic: "Equations of Motion",
        description: "বস্তুর গতি নির্ধারণের সূত্র।",
        formulas: [
            "v = u + at",
            "s = ut + ½at²",
            "v² = u² + 2as"
        ],
        examples: [
            "যদি u = 5m/s, a = 2m/s² এবং t = 4s হয়, তবে v = 13m/s।",
            "যদি u = 0, a = 9.8m/s² এবং t = 2s হয়, তবে s = 19.6m।"
        ]
    }
];

// Function to display the formulas
const displayPhysicsFormulas = () => {
    const container = document.getElementById("formula-container");
    container.innerHTML = "";

    physicsFormulas.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const heading = document.createElement("h3");
        heading.textContent = item.topic;

        const description = document.createElement("p");
        description.textContent = item.description;

        const formulaBlock = document.createElement("pre");
        if (Array.isArray(item.formulas)) {
            formulaBlock.textContent = `Formulas:\n${item.formulas.join("\n")}`;
        } else {
            formulaBlock.textContent = `Formula: ${item.formula}`;
        }

        const examplesList = document.createElement("ul");
        item.examples.forEach(example => {
            const exampleItem = document.createElement("li");
            exampleItem.textContent = example;
            examplesList.appendChild(exampleItem);
        });

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(formulaBlock);
        card.appendChild(examplesList);

        container.appendChild(card);
    });
};

// Load formulas when page loads
window.onload = displayPhysicsFormulas;