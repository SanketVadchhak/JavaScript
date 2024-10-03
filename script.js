const themeToggleButton = document.getElementById('theme-toggle-button');
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change image based on theme
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'moon.png'; // Change to moon icon
    } else {
        themeIcon.src = 'sun.png'; // Change to sun icon
    }
});

const testimonials = [
    { name: "John Doe", text: "ACE helped me improve my interview skills tremendously! The mock interviews were realistic and provided me with the necessary feedback to excel." },
    { name: "Jane Smith", text: "The personalized feedback was a game changer for me! I appreciated the tailored advice that focused on my specific needs." },
    { name: "Alex Johnson", text: "I love how easy it is to track my progress. The insights provided after each mock interview helped me stay motivated." },
    { name: "Maria Garcia", text: "I landed my dream job thanks to ACE! The preparation and guidance were instrumental in my success." },
    { name: "Emily Davis", text: "ACE’s platform is user-friendly, and the resources available are incredibly helpful. I highly recommend it!" },
    { name: "Michael Brown", text: "The variety of mock interviews offered allowed me to practice different scenarios. I feel much more prepared now." },
    { name: "Linda Wilson", text: "ACE offers fantastic support! The team is always available to answer questions and provide guidance." },
    { name: "David Lee", text: "The interview simulation made me feel like I was in a real interview. I received constructive criticism that was very helpful." },
    { name: "Patricia Martinez", text: "I appreciate how ACE focuses on both technical and soft skills during preparation. It’s a well-rounded approach!" },
    { name: "Robert Anderson", text: "The feedback I received after my mock interviews was detailed and actionable. I can’t recommend ACE enough!" },
    { name: "Jessica Thomas", text: "ACE has a supportive community that motivates you to improve. It’s great to connect with fellow users." },
    { name: "William Taylor", text: "Every session was enlightening, and the tips I gained have already made a difference in my interview performance." },
    { name: "Barbara Moore", text: "I felt more confident going into my interviews after using ACE. The practice made a huge difference!" },
    { name: "Thomas Jackson", text: "The step-by-step approach helped me break down my preparation into manageable parts, making it less overwhelming." },
    { name: "Sarah White", text: "ACE provides an invaluable service to students. I wish I had this resource when I was job hunting!" },
    { name: "Liam Wilson", text: "The realistic interview scenarios helped me feel more prepared for the actual job market." },
    { name: "Olivia Brown", text: "The feedback after my mock interviews was insightful and helped me make significant improvements." },
    { name: "Ethan Davis", text: "ACE has given me the tools I need to succeed in interviews. The platform is a lifesaver!" },
    { name: "Sophia Martinez", text: "I was impressed by the range of topics covered during the mock interviews. It felt comprehensive." },
    { name: "Noah Anderson", text: "The coaching and resources provided by ACE helped me refine my skills tremendously." },
    { name: "Isabella Miller", text: "ACE helped me identify my weaknesses and provided me with targeted practice to improve." },
    { name: "Mason Garcia", text: "I love how user-friendly the platform is. It makes preparing for interviews a lot less stressful." },
    { name: "Charlotte Rodriguez", text: "The team at ACE is incredibly supportive and responsive to user needs." },
    { name: "James Smith", text: "Thanks to ACE, I feel more confident and prepared for my upcoming interviews!" },
    { name: "Amelia Johnson", text: "ACE’s resources are top-notch, and I truly appreciate the personalized guidance." },
    { name: "Ava Wilson", text: "The continuous feedback loop provided by ACE is invaluable for ongoing improvement." },
    { name: "Logan Lee", text: "I appreciate the emphasis on both technical skills and soft skills in the preparation process." },
    { name: "Mia Lewis", text: "The insights provided by ACE helped me land multiple interviews within weeks." },
    { name: "Lucas Hall", text: "I can't stress enough how beneficial ACE has been in my job search. Highly recommended!" },
    { name: "Harper Allen", text: "The platform is not only informative but also engaging. I looked forward to every session." },
    { name: "Evelyn Young", text: "I gained so much from the mock interviews. The team’s support was exceptional!" },
    { name: "Jackson Hernandez", text: "ACE transformed my approach to interviews. I now feel prepared and confident!" },
    { name: "Grace King", text: "I loved the variety of resources and mock interview options available on the platform." },
    { name: "Benjamin Wright", text: "I found the advice from ACE’s team to be practical and easy to implement." },
    { name: "Ella Scott", text: "Every interview prep session has been beneficial, and I've seen a huge improvement." },
    { name: "Aiden Adams", text: "ACE’s dedication to user success is evident in every interaction I've had with the platform." },
    { name: "Lily Baker", text: "The way ACE breaks down complex interview techniques is incredibly helpful." },
    { name: "Zoe Gonzalez", text: "I love how ACE keeps track of my progress and helps me set achievable goals." },
];

function displayRandomTestimonials() {
    const testimonialCards = document.getElementById('testimonial-cards');
    testimonialCards.innerHTML = ''; // Clear previous testimonials

    // Shuffle testimonials and select the first 6
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    const selectedTestimonials = shuffled.slice(0, 6);

    selectedTestimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `<p>"${testimonial.text}"</p><strong>- ${testimonial.name}</strong>`;
        testimonialCards.appendChild(card);
    });
}

// Call the function on page load
displayRandomTestimonials();
