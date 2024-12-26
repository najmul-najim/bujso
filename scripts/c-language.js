const cLanguageTopics = [
    {
        topic: "Hello World Program",
        description: "প্রথম প্রোগ্রাম যা কনসোলে 'Hello, World!' প্রিন্ট করে।",
        syntax: `
#include<stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`,
        examples: [
            "কনসোলে 'Hello, World!' দেখা যাবে।",
            "এই প্রোগ্রামে `stdio.h` ব্যবহার করা হয়েছে।",
            "প্রত্যেক C প্রোগ্রামে `main()` ফাংশন থাকা আবশ্যক।"
        ]
    },
    {
        topic: "Variables and Data Types",
        description: "ভেরিয়েবল ঘোষণা এবং ডেটা টাইপস।",
        syntax: `
#include<stdio.h>
int main() {
    int age = 25;
    float pi = 3.14;
    char initial = 'N';
    printf("Age: %d, Pi: %.2f, Initial: %c", age, pi, initial);
    return 0;
}`,
        examples: [
            "ইন্টিজার, ফ্লোট, এবং ক্যারেক্টার ডেটা টাইপস।",
            "printf() ফাংশন ব্যবহার করে মান প্রিন্ট করা হয়েছে।",
            "মেমোরি অপ্টিমাইজেশনের জন্য সঠিক ডেটা টাইপ ব্যবহার করুন।"
        ]
    },
    {
        topic: "Control Structures (if-else)",
        description: "নিয়ন্ত্রণ কাঠামো প্রোগ্রামে শর্ত ব্যবহারের জন্য।",
        syntax: `
#include<stdio.h>
int main() {
    int num = 10;
    if (num > 0) {
        printf("Positive Number");
    } else {
        printf("Non-Positive Number");
    }
    return 0;
}`,
        examples: [
            "প্রোগ্রামে শর্ত নির্ধারণে ব্যবহার।",
            "if এবং else ব্লক ব্যবহার করা হয়েছে।",
            "চলকটি (num) পজিটিভ কিনা পরীক্ষা করা হয়েছে।"
        ]
    },
    {
        topic: "Loops (for Loop)",
        description: "লুপ ব্যবহার করে কোড পুনরাবৃত্তি।",
        syntax: `
#include<stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
        examples: [
            "for লুপ ব্যবহার করা হয়েছে।",
            "1 থেকে 5 পর্যন্ত সংখ্যা প্রিন্ট করা হয়েছে।",
            "ইন্টারভাল 1 করে ইনক্রিমেন্ট করা হয়েছে।"
        ]
    },
    {
        topic: "While Loop",
        description: "while লুপ ব্যবহার করে কোড পুনরাবৃত্তি করা।",
        syntax: `
#include<stdio.h>
int main() {
    int i = 1;
    while (i <= 5) {
        printf("%d\\n", i);
        i++;
    }
    return 0;
}`,
        examples: [
            "while লুপ ব্যবহার করা হয়েছে।",
            "1 থেকে 5 পর্যন্ত সংখ্যা প্রিন্ট করা হয়েছে।",
            "চলকটি (i) ইনক্রিমেন্ট হচ্ছে।"
        ]
    },
    {
        topic: "Do-While Loop",
        description: "do-while লুপের মাধ্যমে কোড একবার চলানো হয় এবং তারপর শর্ত পরীক্ষা করা হয়।",
        syntax: `
#include<stdio.h>
int main() {
    int i = 1;
    do {
        printf("%d\\n", i);
        i++;
    } while (i <= 5);
    return 0;
}`,
        examples: [
            "do-while লুপ ব্যবহার করা হয়েছে।",
            "প্রথমে কোড একবার চালানো হয়, তারপর শর্ত পরীক্ষা করা হয়।"
        ]
    },
    {
        topic: "Functions",
        description: "ফাংশন ব্যবহার করে কোডের পুনঃব্যবহারযোগ্য অংশ তৈরি করা।",
        syntax: `
#include<stdio.h>
void greet() {
    printf("Hello, World!");
}

int main() {
    greet();
    return 0;
}`,
        examples: [
            "একটি ফাংশন তৈরি করা হয়েছে `greet()` নামক।",
            "main() ফাংশন থেকে greet() কল করা হয়েছে।"
        ]
    },
    {
        topic: "Arrays",
        description: "একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য অ্যারে ব্যবহার করা।",
        syntax: `
#include<stdio.h>
int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        printf("%d\\n", numbers[i]);
    }
    return 0;
}`,
        examples: [
            "একটি অ্যারে তৈরি করা হয়েছে যার 5টি উপাদান।",
            "for লুপ ব্যবহার করে অ্যারের উপাদানগুলি প্রিন্ট করা হয়েছে।"
        ]
    },
    {
        topic: "Pointers",
        description: "পয়েন্টার ব্যবহার করে মেমরি অ্যাড্রেসে অ্যাক্সেস করা।",
        syntax: `
#include<stdio.h>
int main() {
    int num = 10;
    int *ptr = &num;
    printf("Value: %d, Address: %p", *ptr, ptr);
    return 0;
}`,
        examples: [
            "পয়েন্টার ব্যবহার করে একটি ভেরিয়েবলের মান এবং ঠিকানা প্রিন্ট করা হয়েছে।",
            "এখানে `ptr` পয়েন্টার দিয়ে `num` ভেরিয়েবলের ঠিকানায় অ্যাক্সেস করা হয়েছে।"
        ]
    },
    {
        topic: "Structures",
        description: "স্ট্রাকচার ব্যবহার করে বিভিন্ন ডেটা টাইপ একসাথে সংরক্ষণ করা।",
        syntax: `
#include<stdio.h>
struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person p = {"John", 25};
    printf("Name: %s, Age: %d", p.name, p.age);
    return 0;
}`,
        examples: [
            "স্ট্রাকচার ব্যবহার করে বিভিন্ন ডেটা টাইপ সংরক্ষণ করা হয়েছে।",
            "স্ট্রাকচারের সদস্য অ্যাক্সেস করা হয়েছে।"
        ]
    },
    {
        topic: "File Handling",
        description: "ফাইলের মাধ্যমে ডেটা পড়া এবং লেখা।",
        syntax: `
#include<stdio.h>
int main() {
    FILE *file = fopen("example.txt", "w");
    if (file != NULL) {
        fprintf(file, "Hello, File Handling!");
        fclose(file);
    }
    return 0;
}`,
        examples: [
            "ফাইল খুলে লেখা হয়েছে এবং পরে ফাইল বন্ধ করা হয়েছে।",
            "fopen(), fprintf(), fclose() ফাংশন ব্যবহার করা হয়েছে।"
        ]
    },
    {
        topic: "Dynamic Memory Allocation",
        description: "মেমরি রানটাইমে আলোকিত করা (malloc, free)।",
        syntax: `
#include<stdio.h>
#include<stdlib.h>
int main() {
    int *ptr = (int*)malloc(5 * sizeof(int));
    if (ptr != NULL) {
        for (int i = 0; i < 5; i++) {
            ptr[i] = i + 1;
            printf("%d\\n", ptr[i]);
        }
        free(ptr);
    }
    return 0;
}`,
        examples: [
            "malloc() ফাংশন দ্বারা মেমরি বরাদ্দ করা হয়েছে।",
            "free() ফাংশন দ্বারা মেমরি মুক্ত করা হয়েছে।"
        ]
    },
    {
        topic: "String Manipulation",
        description: "স্ট্রিং ব্যবহারের জন্য বিভিন্ন কার্যক্রম যেমন কনকাটেনেশন, কমপ্যারিসন।",
        syntax: `
#include<stdio.h>
#include<string.h>
int main() {
    char str1[50] = "Hello, ";
    char str2[50] = "World!";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`,
        examples: [
            "স্ট্রিং কনকাটেনেশন করা হয়েছে `strcat()` ফাংশন দিয়ে।",
            "স্ট্রিং প্রিন্ট করা হয়েছে।"
        ]
    },
    {
        topic: "Enum",
        description: "এনাম ব্যবহার করে নামকরণ করা কনস্ট্যান্ট ভ্যালু সংজ্ঞায়িত করা।",
        syntax: `
#include<stdio.h>
enum Weekdays {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
int main() {
    enum Weekdays day = Wednesday;
    printf("Day: %d", day);
    return 0;
}`,
        examples: [
            "enum ব্যবহার করে দিনের নামকরণ করা হয়েছে।",
            "এনাম ভ্যালু প্রিন্ট করা হয়েছে।"
        ]
    },
    {
        topic: "Recursion",
        description: "একটি ফাংশন নিজেই নিজে কল করে, যা রিকার্সন হিসেবে পরিচিত।",
        syntax: `
#include<stdio.h>
int factorial(int n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(5));
    return 0;
}`,
        examples: [
            "ফ্যাক্টোরিয়াল হিসাব করা হয়েছে রিকার্সনের মাধ্যমে।",
            "factorial() ফাংশন নিজেকে কল করছে।"
        ]
    },
    {
        topic: "Command Line Arguments",
        description: "প্রোগ্রামে আর্গুমেন্ট পাস করা।",
        syntax: `
#include<stdio.h>
int main(int argc, char *argv[]) {
    for (int i = 0; i < argc; i++) {
        printf("%s\\n", argv[i]);
    }
    return 0;
}`,
        examples: [
            "প্রোগ্রামে আর্গুমেন্ট পাস করা হয়েছে।",
            "argv[] ব্যবহার করে আর্গুমেন্ট গ্রহণ করা হয়েছে।"
        ]
    },
    {
        topic: "Typecasting",
        description: "ডেটা টাইপ পরিবর্তন করা (implicit, explicit)।",
        syntax: `
#include<stdio.h>
int main() {
    double d = 9.75;
    int i = (int)d; // explicit casting
    printf("%d", i);
    return 0;
}`,
        examples: [
            "ডাবল থেকে ইন্টিজারে টাইপকাস্ট করা হয়েছে।",
            "explicit casting ব্যবহৃত হয়েছে।"
        ]
    },
    {
        topic: "Memory Leaks",
        description: "মেমরি লিক্স সমাধান করা।",
        examples: [
            "মেমরি ব্যবহারের পর free() ফাংশন দিয়ে মেমরি মুক্ত করুন।",
            "malloc() দ্বারা বরাদ্দকৃত মেমরি ফ্রি না করলে মেমরি লিক্স হতে পারে।"
        ]
    }
];

// Display the topics dynamically
const displayCTopics = () => {
    const container = document.getElementById("syntax-container");
    container.innerHTML = "";

    cLanguageTopics.forEach(topic => {
        const card = document.createElement("div");
        card.classList.add("card");

        const heading = document.createElement("h3");
        heading.textContent = topic.topic;

        const description = document.createElement("p");
        description.textContent = topic.description;

        const syntaxBlock = document.createElement("pre");
        syntaxBlock.textContent = topic.syntax;

        const examplesList = document.createElement("ul");
        topic.examples.forEach(example => {
            const exampleItem = document.createElement("li");
            exampleItem.textContent = example;
            examplesList.appendChild(exampleItem);
        });

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(syntaxBlock);
        card.appendChild(examplesList);

        container.appendChild(card);
    });
};

// Load the content
window.onload = displayCTopics;
