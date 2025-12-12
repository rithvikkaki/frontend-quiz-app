export interface Option {
    id: string;
    text: string;
}

export interface Question {
    id: number;
    question: string;
    options: Option[];
    correctAnswer: string;
}

export const questions: Question[] = [
    {
        id: 1,
        question: "What sound does a cat make?",
        options: [
            { id: "A", text: "Bhau-Bhau" },
            { id: "B", text: "Meow-Meow" },
            { id: "C", text: "Oink-Oink" },
        ],
        correctAnswer: "B",
    },
    {
        id: 2,
        question: "What would you probably find in your fridge?",
        options: [
            { id: "A", text: "Shoes" },
            { id: "B", text: "Ice Cream" },
            { id: "C", text: "Books" },
        ],
        correctAnswer: "B",
    },
    {
        id: 3,
        question: "What color are bananas?",
        options: [
            { id: "A", text: "Blue" },
            { id: "B", text: "Yellow" },
            { id: "C", text: "Red" },
        ],
        correctAnswer: "B",
    },
    {
        id: 4,
        question: "How many stars are in the sky?",
        options: [
            { id: "A", text: "Two" },
            { id: "B", text: "Infinite" },
            { id: "C", text: "One Hundred" },
        ],
        correctAnswer: "B",
    },
];
