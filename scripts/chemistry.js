const chemistryFormulas = [
    {
        topic: "Mole Concept",
        description: "এক মোল হলো একটি পদার্থের এমন পরিমাণ যা ৬.০২২ × ১০²³ কণা (অণু, পরমাণু, বা আয়ন) ধারণ করে।",
        formula: "Number of Moles = Mass of Substance / Molar Mass",
        examples: [
            "যদি কোনো পদার্থের ভর 18g হয় এবং তার মোলার ভর 18g/mol হয়, তবে মোলের সংখ্যা = 1 মোল।",
            "৫৬g Fe এ কত মোল আছে? Fe এর মোলার ভর ৫৬g/mol। উত্তর: ১ মোল।"
        ]
    },
    {
        topic: "Ideal Gas Equation",
        description: "গ্যাসের চাপ, আয়তন এবং তাপমাত্রার সম্পর্ক।",
        formula: "PV = nRT",
        examples: [
            "যদি P = 1 atm, V = 22.4 L, n = 1 mol, এবং T = 273 K হয়, তবে R = 0.0821 L·atm/mol·K।",
            "একটি গ্যাস যদি ২ atm চাপ এবং ১০ L আয়তন থাকে, n = ০.৫ মোল এবং T = ৩৫০ K হয়, তবে P = nRT/V।"
        ]
    },
    {
        topic: "Concentration (Molarity)",
        description: "সমাধানে দ্রবীভূত পদার্থের পরিমাণ।",
        formula: "M = n / V",
        examples: [
            "যদি ১ মোল NaCl ১ লিটার পানিতে দ্রবীভূত হয়, তবে মোলারিটি = ১ M।",
            "০.৫ মোল H₂SO₄ ২ লিটার সমাধানে দ্রবীভূত হলে, মোলারিটি = ০.২৫ M।"
        ]
    },
    {
        topic: "Dilution Formula",
        description: "সমাধানের ঘনত্ব পরিবর্তন করার সূত্র।",
        formula: "M₁V₁ = M₂V₂",
        examples: [
            "যদি M₁ = ২M, V₁ = ৫০ml, এবং M₂ = ১M হয়, তবে V₂ = ১০০ml।",
            "২০ml ৫M HCl কে ১M করতে কতটা পানির প্রয়োজন? উত্তর: ১০০ml।"
        ]
    },
    {
        topic: "pH Calculation",
        description: "একটি সমাধানের অম্লতা বা ক্ষারকতা পরিমাপ।",
        formula: "pH = -log[H⁺]",
        examples: [
            "যদি [H⁺] = 1 × 10⁻³ হয়, তবে pH = 3।",
            "NaOH এর [OH⁻] = 1 × 10⁻² হলে, pOH = 2 এবং pH = 12।"
        ]
    },
    {
        topic: "Percentage Composition",
        description: "যে কোনো যৌগে একটি উপাদানের শতাংশ বের করার সূত্র।",
        formula: "% Element = (Mass of Element / Molar Mass of Compound) × 100",
        examples: [
            "H₂O-তে H এর শতাংশ = (২g/১৮g) × ১০০ = ১১.১১%",
            "CO₂-তে O এর শতাংশ = (৩২g/৪৪g) × ১০০ = ৭২.৭৩%"
        ]
    },
    {
        topic: "Boyle's Law",
        description: "গ্যাসের চাপ এবং আয়তনের মধ্যে সম্পর্ক।",
        formula: "P₁V₁ = P₂V₂",
        examples: [
            "যদি P₁ = ১ atm, V₁ = ২ L এবং P₂ = ২ atm হয়, তবে V₂ = ১ L।",
            "গ্যাস সংকুচিত হলে চাপ বাড়ে।"
        ]
    },
    {
        topic: "Charles's Law",
        description: "গ্যাসের আয়তন এবং তাপমাত্রার মধ্যে সম্পর্ক।",
        formula: "V₁/T₁ = V₂/T₂",
        examples: [
            "যদি V₁ = ২L, T₁ = ২৭৩K এবং T₂ = ৫৪৬K হয়, তবে V₂ = ৪L।",
            "তাপমাত্রা বাড়লে গ্যাসের আয়তনও বাড়ে।"
        ]
    },
    {
        topic: "Avogadro's Law",
        description: "একই অবস্থায় গ্যাসের আয়তন এবং কণার সংখ্যা।",
        formula: "V₁/n₁ = V₂/n₂",
        examples: [
            "যদি V₁ = ১০L, n₁ = ০.৫ mol এবং n₂ = ১ mol হয়, তবে V₂ = ২০L।",
            "১ মোল গ্যাসের আয়তন = ২২.৪L।"
        ]
    },
    {
        topic: "Heat (Calorimetry)",
        description: "তাপের পরিমাণ যা পদার্থের তাপমাত্রা পরিবর্তন করে।",
        formula: "Q = mcΔT",
        examples: [
            "যদি m = ২kg, c = ৪২০০ J/kg·K এবং ΔT = ১০K হয়, তবে Q = ৮৪,০০০ J।",
            "বস্তুর গরম হওয়ার পরিমাণ নির্ণয়।"
        ]
    },
    {
        topic: "Chemical Equilibrium (Law of Mass Action)",
        description: "সমানুপাতিক ধ্রুবকের মাধ্যমে রাসায়নিক সমীকরণের ভারসাম্য।",
        formula: "Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
        examples: [
            "2H₂ + O₂ ⇌ 2H₂O এর জন্য Kc = [H₂O]² / [H₂]²[O₂]।",
            "বিভিন্ন অবস্থায় সমাধানের ভারসাম্য পরিবর্তন।"
        ]
    },
    {
        topic: "Electrolysis (Faraday's Laws)",
        description: "বিদ্যুৎ প্রবাহ দ্বারা রাসায়নিক পরিবর্তন।",
        formulas: [
            "Mass Deposited = (Z × I × t)",
            "Equivalent Weight = (Atomic Weight / Valency)"
        ],
        examples: [
            "Cu²⁺ + 2e⁻ → Cu। ১ ফ্যারাড = ৯৬,৪৮৫ কুলম্ব।",
            "NaCl এর ইলেক্ট্রোলাইসিস: Na⁺ এবং Cl₂ তৈরি।"
        ]
    },
    {
        topic: "Rate of Reaction",
        description: "প্রতিক্রিয়ার হার পরিমাপ।",
        formula: "Rate = Δ[Reactant]/Δt = -Δ[Product]/Δt",
        examples: [
            "যদি NO₂ ভেঙ্গে ১ সেকেন্ডে ০.১ M কমে যায়, তবে হার = -০.১ M/s।",
            "প্রতিক্রিয়ার হার তাপমাত্রা বৃদ্ধি পেলে বৃদ্ধি পায়।"
        ]
    },
    {
        topic: "Gibbs Free Energy",
        description: "কোনো প্রক্রিয়া স্বতঃস্ফূর্ত কিনা তা নির্ধারণ করে।",
        formula: "ΔG = ΔH - TΔS",
        examples: [
            "যদি ΔH = -100kJ, T = 298K, এবং ΔS = 200J/K হয়, তবে ΔG = -159.6kJ।",
            "যদি ΔG ঋণাত্মক হয়, প্রতিক্রিয়া স্বতঃস্ফূর্ত।"
        ]
    }
];

// Function to display the formulas
const displayChemistryFormulas = () => {
    const container = document.getElementById("formula-container");
    container.innerHTML = "";

    chemistryFormulas.forEach(item => {
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
window.onload = displayChemistryFormulas;