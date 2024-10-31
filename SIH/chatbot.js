// chatbot.js
const chatMessages = document.querySelector(".chat-messages");
const chatInput = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".send-btn");

const faqData = [
    { question: "What is anti-doping?", answer: "Anti-doping is a set of rules aimed at preventing the use of prohibited substances in sports to ensure fair competition." },
    { question: "Why is doping prohibited?", answer: "Doping is banned because it provides an unfair advantage and poses health risks to athletes." },
    { question: "What is WADA?", answer: "WADA stands for World Anti-Doping Agency, which oversees anti-doping rules and enforces standards." },
    { question: "What is anti-doping?", answer: "Anti-doping is a set of rules aimed at preventing the use of prohibited substances in sports to ensure fair competition." },
    { question: "Why is doping prohibited?", answer: "Doping is banned because it provides an unfair advantage and poses health risks to athletes." },
    { question: "What is WADA?", answer: "WADA stands for World Anti-Doping Agency, which oversees anti-doping rules and enforces standards." },
    { question: "What are prohibited substances?", answer: "Prohibited substances are drugs or compounds that enhance performance and are banned by WADA." },
    { question: "What are the consequences of doping?", answer: "Consequences of doping include suspension, fines, loss of medals, and damage to an athlete's reputation." },
    { question: "How are athletes tested for doping?", answer: "Athletes undergo urine, blood, and sometimes hair tests to check for banned substances." },
    { question: "What is the athlete biological passport?", answer: "The athlete biological passport monitors changes in biological markers to detect doping over time." },
    { question: "Are recreational drugs prohibited in sports?", answer: "Yes, some recreational drugs like cannabis and cocaine are prohibited during competitions." },
    { question: "What is therapeutic use exemption (TUE)?", answer: "A TUE allows athletes with medical conditions to use necessary medications that would otherwise be prohibited." },
    { question: "What is blood doping?", answer: "Blood doping is increasing the blood's oxygen-carrying capacity to enhance performance, often through blood transfusions or EPO." },
    { question: "What is EPO?", answer: "Erythropoietin (EPO) is a hormone that boosts red blood cell production, commonly used in endurance sports." },
    { question: "Can caffeine be considered doping?", answer: "Caffeine is monitored by WADA but is not prohibited. However, excessive consumption is discouraged." },
    { question: "What are anabolic steroids?", answer: "Anabolic steroids are synthetic substances that mimic testosterone and are used to build muscle mass." },
    { question: "What happens if an athlete refuses a doping test?", answer: "Refusing a doping test is considered a violation and can lead to the same penalties as a positive test." },
    { question: "What is out-of-competition testing?", answer: "Out-of-competition testing is conducted randomly to catch athletes using banned substances outside of events." },
    { question: "Are supplements safe for athletes?", answer: "Not all supplements are safe; some may contain banned substances. Athletes should consult professionals before use." },
    { question: "Can an athlete appeal a doping decision?", answer: "Yes, athletes can appeal to the Court of Arbitration for Sport (CAS) if they feel they were unfairly penalized." },
    { question: "How can an athlete avoid accidental doping?", answer: "Athletes should consult team doctors, avoid unverified supplements, and stay updated on banned substances." },
    { question: "What is gene doping?", answer: "Gene doping is the use of gene therapy to enhance performance, which is illegal and detectable by WADA." },
    { question: "What is a doping control officer?", answer: "A Doping Control Officer (DCO) is responsible for administering doping tests to athletes." },
    { question: "How long do banned substances stay in the body?", answer: "The detection time varies by substance, ranging from a few hours to months." },
    { question: "What is a whereabouts requirement?", answer: "Athletes in testing pools must provide WADA with regular updates on their location for random testing." },
    { question: "What is micro-dosing?", answer: "Micro-dosing involves taking small amounts of performance-enhancing drugs to avoid detection while still boosting performance." },
    { question: "Is alcohol a banned substance?", answer: "In some sports, alcohol is banned in-competition, as it can impair judgment and is seen as performance-altering." },
    { question: "What is masking?", answer: "Masking is the use of certain drugs to hide or mask the presence of banned substances in the body." },
    { question: "Are there sanctions for coaches involved in doping?", answer: "Yes, coaches and staff involved in doping can face penalties, as they influence athletes' choices." },
    { question: "What is the difference between in-competition and out-of-competition testing?", answer: "In-competition testing occurs during events, while out-of-competition testing is random, often unannounced, to ensure year-round compliance." },
    { question: "What is hGH?", answer: "Human Growth Hormone (hGH) promotes cell growth and regeneration. It is banned for its performance-enhancing effects." },
    { question: "Are asthma medications banned?", answer: "Some asthma medications are allowed, but athletes may need a TUE for higher doses." },
    { question: "What is the role of a chaperone in doping control?", answer: "A chaperone escorts the athlete during the sample collection process to prevent tampering." },
    { question: "Are natural stimulants allowed in sports?", answer: "While some natural stimulants are allowed, those with performance-enhancing effects, like ephedrine, are prohibited." },
    // Add more FAQs here as needed

    { question: "What is anti-doping", answer: "Anti-doping is a set of rules aimed at preventing the use of prohibited substances in sports to ensure fair competition." },
    { question: "anti doping", answer: "Anti-doping is a set of rules aimed at preventing the use of prohibited substances in sports to ensure fair competition." },
    { question: "Why is doping prohibited", answer: "Doping is banned because it provides an unfair advantage and poses health risks to athletes." },
    { question: "What is anti doping", answer: "Anti-doping is a set of rules aimed at preventing the use of prohibited substances in sports to ensure fair competition." },
    { question: "hi", answer: "Hyy, Ask Your Quaries Regarding Anti-Doping." },
    { question: "hello", answer: "Hyy, Ask Your Quaries Regarding Anti-Doping." },
    { question: "hy", answer: "Hyy, Ask Your Quaries Regarding Anti-Doping." },
    { question: "What is WADA", answer: "WADA stands for World Anti-Doping Agency, which oversees anti-doping rules and enforces standards." },
    { question: "What are prohibited substances", answer: "Prohibited substances are drugs or compounds that enhance performance and are banned by WADA." },
    { question: "What are the consequences of doping", answer: "Consequences of doping include suspension, fines, loss of medals, and damage to an athlete's reputation." },
    { question: "How are athletes tested for doping", answer: "Athletes undergo urine, blood, and sometimes hair tests to check for banned substances." },
    { question: "What is the athlete biological passport", answer: "The athlete biological passport monitors changes in biological markers to detect doping over time." },
    { question: "Are recreational drugs prohibited in sports", answer: "Yes, some recreational drugs like cannabis and cocaine are prohibited during competitions." },
    { question: "What is therapeutic use exemption (TUE)", answer: "A TUE allows athletes with medical conditions to use necessary medications that would otherwise be prohibited." },
    { question: "What is therapeutic use exemption ", answer: "A TUE allows athletes with medical conditions to use necessary medications that would otherwise be prohibited." },
    { question: "Thanks", answer: "No Problem, If you have any other quaries. Feel free to ask" },
    { question: "by", answer: "Have a Good Day, Take Care" },
    { question: "What is blood doping", answer: "Blood doping is increasing the blood's oxygen-carrying capacity to enhance performance, often through blood transfusions or EPO." },
    { question: "What is EPO", answer: "Erythropoietin (EPO) is a hormone that boosts red blood cell production, commonly used in endurance sports." },
    { question: "Can caffeine be considered doping", answer: "Caffeine is monitored by WADA but is not prohibited. However, excessive consumption is discouraged." },
    { question: "What are anabolic steroids", answer: "Anabolic steroids are synthetic substances that mimic testosterone and are used to build muscle mass." },
    { question: "What happens if an athlete refuses a doping test", answer: "Refusing a doping test is considered a violation and can lead to the same penalties as a positive test." },
    { question: "What is out-of-competition testing", answer: "Out-of-competition testing is conducted randomly to catch athletes using banned substances outside of events." },
    { question: "Are supplements safe for athletes", answer: "Not all supplements are safe; some may contain banned substances. Athletes should consult professionals before use." },
    { question: "Can an athlete appeal a doping decision", answer: "Yes, athletes can appeal to the Court of Arbitration for Sport (CAS) if they feel they were unfairly penalized." },
    { question: "How can an athlete avoid accidental doping", answer: "Athletes should consult team doctors, avoid unverified supplements, and stay updated on banned substances." },
    { question: "What is gene doping", answer: "Gene doping is the use of gene therapy to enhance performance, which is illegal and detectable by WADA." },
    { question: "What is a doping control officer", answer: "A Doping Control Officer (DCO) is responsible for administering doping tests to athletes." },
    { question: "How long do banned substances stay in the body", answer: "The detection time varies by substance, ranging from a few hours to months." },
    { question: "What is a whereabouts requirement", answer: "Athletes in testing pools must provide WADA with regular updates on their location for random testing." },
    { question: "What is micro-dosing", answer: "Micro-dosing involves taking small amounts of performance-enhancing drugs to avoid detection while still boosting performance." },
    { question: "Is alcohol a banned substance", answer: "In some sports, alcohol is banned in-competition, as it can impair judgment and is seen as performance-altering." },
    { question: "What is masking", answer: "Masking is the use of certain drugs to hide or mask the presence of banned substances in the body." },
    { question: "Are there sanctions for coaches involved in doping", answer: "Yes, coaches and staff involved in doping can face penalties, as they influence athletes' choices." },
    { question: "What is the difference between in-competition and out-of-competition testing", answer: "In-competition testing occurs during events, while out-of-competition testing is random, often unannounced, to ensure year-round compliance." },
    { question: "What is hGH", answer: "Human Growth Hormone (hGH) promotes cell growth and regeneration. It is banned for its performance-enhancing effects." },
    { question: "Are asthma medications banned", answer: "Some asthma medications are allowed, but athletes may need a TUE for higher doses." },
    { question: "What is the role of a chaperone in doping control", answer: "A chaperone escorts the athlete during the sample collection process to prevent tampering." },
    { question: "Are natural stimulants allowed in sports", answer: "While some natural stimulants are allowed, those with performance-enhancing effects, like ephedrine, are prohibited." },
];

// Function to add messages to chat
function addMessage(text, isBot = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isBot ? "bot-message" : "user-message"}`;
    messageDiv.innerText = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to find FAQ answer
function getAnswer(question) {
    const faq = faqData.find(faq => question.toLowerCase().includes(faq.question.toLowerCase()));
    return faq ? faq.answer : "Sorry, I don't have an answer to that. Try asking something else about anti-doping.";
}

// Event listener for sending messages
sendBtn.addEventListener("click", () => {
    const userText = chatInput.value.trim();
    if (userText) {
        addMessage(userText);
        chatInput.value = "";
        const botReply = getAnswer(userText);
        setTimeout(() => addMessage(botReply, true), 500);
    }
});

// Send message on pressing Enter
chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") sendBtn.click();
});