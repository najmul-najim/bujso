const differentiationFormulas = [
    {
        formula: "d/dx [xⁿ] = n * xⁿ⁻¹",
        description: "এটি শক্তির সূত্র, যেখানে একটি ভেরিয়েবল এক্সের শক্তি নিয়ে তার ডিফারেনশিয়েশন বের করা হয়।",
        examples: [
            "d/dx [x³] = 3 * x²",
            "d/dx [x⁵] = 5 * x⁴",
            "d/dx [x⁻²] = -2 * x⁻³"
        ]
    },
    {
        formula: "d/dx [sin(x)] = cos(x)",
        description: "এটি সাইন ফাংশনের ডিফারেনশিয়েশন।",
        examples: [
            "d/dx [sin(x)] = cos(x)",
            "d/dx [sin(2x)] = 2 * cos(2x)",
            "d/dx [sin(3x)] = 3 * cos(3x)"
        ]
    },
    {
        formula: "d/dx [cos(x)] = -sin(x)",
        description: "এটি কসাইন ফাংশনের ডিফারেনশিয়েশন।",
        examples: [
            "d/dx [cos(x)] = -sin(x)",
            "d/dx [cos(2x)] = -2 * sin(2x)",
            "d/dx [cos(3x)] = -3 * sin(3x)"
        ]
    },
    {
        formula: "d/dx [tan(x)] = sec²(x)",
        description: "এটি ট্যানজেন্ট ফাংশনের ডিফারেনশিয়েশন।",
        examples: [
            "d/dx [tan(x)] = sec²(x)",
            "d/dx [tan(2x)] = 2 * sec²(2x)",
            "d/dx [tan(3x)] = 3 * sec²(3x)"
        ]
    },
    {
        formula: "d/dx [eˣ] = eˣ",
        description: "এটি প্রাকৃতিক লগারিদম বেস ই (e) এর শক্তির ডিফারেনশিয়েশন।",
        examples: [
            "d/dx [eˣ] = eˣ",
            "d/dx [e^(2x)] = 2 * e^(2x)",
            "d/dx [e^(3x)] = 3 * e^(3x)"
        ]
    },
    {
        formula: "d/dx [ln(x)] = 1/x",
        description: "এটি প্রাকৃতিক লগারিদমের ডিফারেনশিয়েশন।",
        examples: [
            "d/dx [ln(x)] = 1/x",
            "d/dx [ln(2x)] = 1/(2x) * 2 = 1/x",
            "d/dx [ln(3x)] = 1/(3x) * 3 = 1/x"
        ]
    },
    {
        formula: "d/dx [u/v] = (v * du/dx - u * dv/dx) / v²",
        description: "এটি ভাগের ডিফারেনশিয়েশন সূত্র।",
        examples: [
            "d/dx [x² / x³] = (3x² * 2x - x² * 3x²) / x⁶ = (6x³ - 3x⁴) / x⁶",
            "d/dx [x³ / x²] = (x² * 3x² - x³ * 2x) / x⁴ = (3x⁴ - 2x⁴) / x⁴ = x⁴ / x⁴",
            "d/dx [3x² / x] = (x * 6x - 3x² * 1) / x² = (6x² - 3x²) / x² = 3"
        ]
    },
    {
        formula: "d/dx [u + v] = du/dx + dv/dx",
        description: "এটি যোগফলের ডিফারেনশিয়েশন সূত্র।",
        examples: [
            "d/dx [x + x²] = 1 + 2x",
            "d/dx [sin(x) + cos(x)] = cos(x) - sin(x)",
            "d/dx [eˣ + x] = eˣ + 1"
        ]
    }
];

// Function to display the formulas
const displayFormulas = () => {
    const container = document.getElementById("formula-container");
    container.innerHTML = ""; // Clear the container

    differentiationFormulas.forEach(formula => {
        const card = document.createElement("div");
        card.classList.add("card");

        const formulaHeading = document.createElement("h3");
        formulaHeading.textContent = formula.formula;

        const formulaDescription = document.createElement("p");
        formulaDescription.textContent = formula.description;

        const exampleList = document.createElement("ul");

        formula.examples.forEach(example => {
            const exampleItem = document.createElement("li");
            exampleItem.textContent = example;
            exampleList.appendChild(exampleItem);
        });

        card.appendChild(formulaHeading);
        card.appendChild(formulaDescription);
        card.appendChild(exampleList);

        container.appendChild(card);
    });
};

// Call the function to display the formulas when the page loads
window.onload = displayFormulas;