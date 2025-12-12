import React, { useState, useEffect } from 'react';
import catPawImg from '../assets/Cat - Paw gif.gif';
import { questions } from '../data/questions';

const QuestionCard: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [animatingScore, setAnimatingScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

    // Calculate score logic
    const calculateScore = () => {
        let score = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                score++;
            }
        });
        return Math.round((score / totalQuestions) * 100);
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    const handleOptionSelect = (optionId: string) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: optionId,
        }));
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setAnswers({});
        setIsSubmitted(false);
        setAnimatingScore(0);
    };

    // Score Animation Effect
    useEffect(() => {
        if (isSubmitted) {
            const finalScore = calculateScore();
            let start = 0;
            const duration = 1500;
            const intervalTime = 20;
            const steps = duration / intervalTime;
            const increment = finalScore / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= finalScore) {
                    setAnimatingScore(finalScore);
                    clearInterval(timer);
                } else {
                    setAnimatingScore(Math.floor(start));
                }
            }, intervalTime);

            return () => clearInterval(timer);
        }
    }, [isSubmitted]);

    // --- RENDER: SCORE SCREEN ---
    if (isSubmitted) {
        return (
            <div className="min-h-screen w-full bg-[linear-gradient(180deg,#BECFEE_0%,#71C6E2_40%,#D9F4FA_80%,#BECFEE_100%)] flex items-center justify-center p-6 font-sans">
                {/* Main Card Container with Outer Border Effect - UPDATED */}
                <div className="relative w-full max-w-[1000px] bg-white/40 rounded-[50px] p-4 shadow-xl backdrop-blur-sm border border-white/50">
                    <div className="bg-white w-full rounded-[40px] relative min-h-[650px] flex flex-col items-center justify-center p-12 shadow-sm">
                        <div className="text-center">
                            {/* Subtitle Badge */}
                            <div className="inline-block bg-white px-8 py-3 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] mb-12 border border-gray-50">
                                <p className="text-gray-500 text-sm font-medium tracking-wide">
                                    Keep Learning!
                                </p>
                            </div>

                            <h2 className="text-6xl font-serif font-bold text-[#1e4e6b] mb-4 italic tracking-tight">
                                Your Final score is
                            </h2>

                            <div className="text-[140px] leading-tight font-serif font-bold text-[#1e4e6b] mb-12 flex items-center justify-center">
                                {animatingScore}<span className="text-6xl ml-2">%</span>
                            </div>

                            <button
                                onClick={handleRestart}
                                className="bg-[#dcf6fe] text-[#1e4e6b] text-lg font-bold py-4 px-12 rounded-2xl hover:bg-[#bae6fd] hover:scale-105 transition-all shadow-sm"
                            >
                                Start Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- RENDER: QUIZ SCREEN ---
    return (
        <div className="min-h-screen w-full bg-[linear-gradient(180deg,#BECFEE_0%,#71C6E2_40%,#D9F4FA_80%,#BECFEE_100%)] flex items-center justify-center p-6 font-sans">

            {/* Main Card Wrapper - Creates the outer 'border' effect */}
            <div className="relative w-full max-w-[950px] bg-white/40 rounded-[50px] p-10 shadow-xl backdrop-blur-sm border border-white/50">

                {/* Actual Content Card */}
                <div className="bg-[#F4FDFF] w-full rounded-[32px] relative min-h-[500px] flex flex-col p-8 shadow-sm">

                    <div className="flex flex-col items-center z-10 w-full max-w-2xl mx-auto flex-grow">

                        {/* Header */}
                        <h1 className="text-[64px] font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#15313D] to-[#3CABDA] mb-2 text-center tracking-[-2px] leading-tight drop-shadow-sm pb-1">
                            Test Your Knowledge
                        </h1>

                        {/* Subtitle - Restored Badge Style */}
                        <div className="inline-block bg-white px-8 py-2 rounded-full shadow-[0_2px_15px_rgba(0,0,0,0.03)] mb-8 border border-blue-50/50">
                            <p className="font-sans font-medium text-[16px] leading-[20px] tracking-[-0.2px] text-[#15313D] text-center">
                                Answer all questions to see your results
                            </p>
                        </div>

                        {/* Progress Bar (Segmented) */}
                        <div className="flex gap-2 w-full max-w-xl mb-8 px-4 h-1.5">
                            {questions.map((q, index) => (
                                <div
                                    key={q.id}
                                    className={`flex-1 rounded-full transition-colors duration-300
                    ${index <= currentQuestionIndex ? 'bg-[#1e4e6b]' : 'bg-gray-100'}
                    `}
                                ></div>
                            ))}
                        </div>

                        {/* Question Box */}
                        <div className="w-full bg-[#dcf6fe] rounded-2xl py-6 px-6 mb-5 flex items-center justify-center border border-[#bce6ff] shadow-[0_2px_8px_rgba(0,0,0,0.02)] min-h-[100px]">
                            <h2 className="text-[#15313D] font-semibold text-center" style={{ fontFamily: '"Inter", sans-serif', fontSize: '22px', lineHeight: '24px', letterSpacing: '-0.31px' }}>
                                {currentQuestion.id}. {currentQuestion.question}
                            </h2>
                        </div>

                        {/* Options List */}
                        <div className="w-full space-y-3 flex flex-col items-center mb-6">
                            {currentQuestion.options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    className={`w-full py-4 rounded-xl text-[#15313D] font-medium transition-all duration-200 border
                    ${answers[currentQuestion.id] === option.id
                                            ? 'bg-[#ccecfc] border-[#9fdcfc] shadow-inner font-semibold'
                                            : 'bg-[#f0f9ff] border-[#e0f2fe] hover:bg-[#e6f6ff] hover:border-[#d0efff] hover:shadow-sm'
                                        }`}
                                    style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px' }}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* --- BOTTOM SECTION (Navigation & Cat) --- */}
                    <div className="w-full flex justify-between items-end relative z-20 mt-2 px-1 h-20">

                        {/* CAT PAW SECTION */}
                        <div className="relative w-40 h-full ml-4 mb-0 group cursor-pointer z-30">
                            {/* Speech Bubble - Organic CSS Shape */}
                            <div className="absolute -top-28 -left-8 animate-bounce delay-700 transition-transform group-hover:scale-110 z-40">
                                <div
                                    className="bg-white border-[3px] border-[#69C5E1] shadow-sm text-[#15313D] relative rotate-[-3deg] flex items-center justify-center px-4 py-2"
                                    style={{
                                        width: '160px',
                                        height: '80px',
                                        borderRadius: '30px 25px 35px 20px',
                                        fontFamily: '"Caveat Brush", cursive'
                                    }}
                                >
                                    <span style={{ fontSize: '32px', lineHeight: '20px', letterSpacing: '-0.8px' }}>
                                        Best of Luck !
                                    </span>

                                    {/* Tail - Pointing to Paw */}
                                    <div className="absolute -bottom-[14px] right-[40px] w-0 h-0 border-l-[12px] border-l-transparent border-t-[18px] border-t-[#69C5E1] border-r-[4px] border-r-transparent rotate-[10deg]"></div>
                                    <div className="absolute -bottom-[9px] right-[43px] w-0 h-0 border-l-[9px] border-l-transparent border-t-[14px] border-t-white border-r-[3px] border-r-transparent rotate-[10deg]"></div>
                                </div>
                            </div>
                            <img
                                src={catPawImg}
                                alt="Good Luck Cat"
                                className="absolute bottom-0 left-0 w-32 md:w-36 h-auto object-contain drop-shadow-md"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        {/* Navigation Buttons matched to Frame 9 */}
                        <div className="flex gap-[10px] mb-2 items-center">
                            {/* Previous Button */}
                            <button
                                onClick={handlePrev}
                                disabled={currentQuestionIndex === 0}
                                className={`w-[53px] h-[50px] rounded-xl flex items-center justify-center transition-all duration-200 border
                                    ${currentQuestionIndex === 0
                                        ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                        : 'bg-[#E5F6FD] text-[#15313D] border-[#CDEBFA] hover:bg-[#D6F1FC] hover:shadow-sm'
                                    }`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5" />
                                    <path d="M12 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {isLastQuestion ? (
                                <button
                                    onClick={handleSubmit}
                                    className="h-[50px] px-8 rounded-xl bg-[#e0f2fe] hover:bg-[#bae6fd] hover:scale-105 active:scale-95 flex items-center justify-center text-[#1e4e6b] font-bold transition-all shadow-sm"
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="w-[53px] h-[50px] rounded-xl bg-[#E5F6FD] text-[#15313D] border border-[#CDEBFA] hover:bg-[#D6F1FC] hover:shadow-sm flex items-center justify-center transition-all duration-200"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default QuestionCard;
