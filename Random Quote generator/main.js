let btn = document.querySelector("#new-quote");
let quote = document.querySelector("#quote");
let person = document.querySelector("#person");

const quotes = [
  {
	quote: `“The best way to get started is to quit talking and begin doing.”`,
	person: `Walt Disney`,
  },
  {
	quote: `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”`,
	person: `Winston Churchill`,
  },
  {
	quote: `“Don't let yesterday take up too much of today.”`,
	person: `Will Rogers`,					
  },
  {
	quote: `“You learn more from failure than from success. Don't let it stop you. Failure builds character.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“It's not whether you get knocked down, it's whether you get up.”`,
	person: `Vince Lombardi`,
  },
  {
	quote: `“If you are working on something exciting, it will keep you motivated.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Success is not in what you have, but who you are.”`,
	person: `Bo Bennett`,
  },
  {
	quote: `“The harder you work for something, the greater you'll feel when you achieve it.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Dream bigger. Do bigger.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Don't watch the clock; do what it does. Keep going.”`,
	person: `Sam Levenson`,
  },
	    {
	quote: `“Great things never come from comfort zones.”`,
	person: `Neil Strauss`,
  },
  	    {
	quote: `“Push yourself, because no one else is going to do it for you.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Success doesn't just find you. You have to go out and get it.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“The harder the battle, the sweeter the victory.”`,
	person: `Les Brown`,
  },
	    {
	quote: `“Dream it. Wish it. Do it.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Success is not for the lazy.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Don't stop when you're tired. Stop when you're done.”`,
	person: `Marilyn Monroe`,
	  },
	    {
	quote: `“Wake up with determination. Go to bed with satisfaction.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Do something today that your future self will thank you for.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Little things make big days.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“It's going to be hard, but hard does not mean impossible.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Don't wait for opportunity. Create it.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Sometimes we're tested not to show our weaknesses, but to discover our strengths.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“The key to success is to focus on goals, not obstacles.”`,
	person: `Unknown`,
	  },
	    {
	quote: `“Dreams don't work unless you do.”`,
	person: `John C. Maxwell`,
	  },
	    {
	quote: `“Success is walking from failure to failure with no loss of enthusiasm.”`,
	person: `Winston Churchill`,
	  },
	    {
	quote: `“Opportunities don't happen. You create them.”`,
	person: `Chris Grosser`,
	  },
	    {
	quote: `“Try not to become a person of success, but rather try to become a person of value.”`,
	person: `Albert Einstein`,
	  },
	    {
	quote: `“Success usually comes to those who are too busy to be looking for it.”`,
	person: `Henry David Thoreau`,
	  },
	    {
	quote: `“Don't be afraid to give up the good to go for the great.”`,
	person: `John D. Rockefeller`,
	  },
	    {
	quote: `“I find that the harder I work, the more luck I seem to have.”`,
	person: `Thomas Jefferson`,
	  },
	    {
	quote: `“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.”`,
	person: `Albert Schweitzer`,
	  },
	    {
	quote: `“Success is getting what you want. Happiness is wanting what you get.”`,
	person: `Dale Carnegie`,
	  },
	    {
	quote: `“The only place where success comes before work is in the dictionary.”`,
	person: `Vidal Sassoon`,
	  },
	    {
	quote: `“Success is how high you bounce when you hit bottom.”`,
	person: `George S. Patton`,
	  },
	    {
	quote: `“Success is not final; failure is not fatal: It is the courage to continue that counts.”`,
	person: `Winston S. Churchill`,
	  },
	    {
	quote: `“Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.”`,
	person: `Zig Ziglar`,
	  },
	    {
	quote: `“Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.”`,
	person: `Conrad Hilton`,
	  },
	    {
	quote: `“The road to success and the road to failure are almost exactly the same.”`,
	person: `Colin R. Davis`,
	  },
	    {
	quote: `“Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.”`,
	person: `Orison Swett Marden`,
	  },
	    {
	quote: `“Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.”`,
	person: `Booker T. Washington`,
	  },
	    {
	quote: `“The secret of success is to do the common thing uncommonly well.”`,
	person: `John D. Rockefeller Jr.`,
	  },
	    {
	quote: `“I never dreamed about success. I worked for it.”`,
	person: `Estee Lauder`,
	  },
	  {
	quote: `“Success is not about how much money you make; it's about the difference you make in people's lives.”`,
	person: `Michelle Obama`,
	  },
	  {
	quote: `“Success is liking yourself, liking what you do, and liking how you do it.”`,
	person: `Maya Angelou`,
	  },
	  {
	quote: `“Success is not the absence of failure; it's the persistence through failure.”`,
	person: `Aisha Tyler`,
	  },
	  {
	quote: `“Success is not just about making money. It's about making a difference.”`,
	person: `Unknown`,
	  },
	  {
	quote: `“Success is not for the chosen few, but for the few who choose it.”`,
	person: `Unknown`,
	  },
	  {
	quote: `“Success is not a destination, but a journey.”`,
	person: `Zig Ziglar`,
	  },
	  {
	quote: `“Success is not about being the best. It's about always getting better.”`,
	person: `Behance 99U`,
	  },
	  {
	quote: `“Success is not about what you have, but what you give.”`,
	person: `Unknown`,
	  },
	  {
	quote: `“Success is not about winning, but about learning and growing.”`,
	person: `Unknown`,
	  },
	  {
	quote: `“Success is not about luck, but about hard work and determination.”`,
	person: `Unknown`,
	  },
	  {
	quote: `“Success is not about the destination, but the journey and the lessons learned along the way.”`,
	person: `Unknown`,
	  },
];


btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})

