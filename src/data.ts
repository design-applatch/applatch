export const U = 'https://i0.wp.com/applatch.com/applatchkids/wp-content/uploads/';
export const LINKS = {
  visit: 'https://www.applatchkids.com/',
  ios: 'https://apps.apple.com/gb/app/applatch-kids-app/id6476143813',
  android: 'https://play.google.com/store/apps/details?id=net.apptimist.applatchkidsandroid',
  androidFilter: 'https://play.google.com/store/apps/details?id=com.applatch.applatchapp',
};
export const nav = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About us', href: 'https://applatch.com/applatchkids/about-us/' },
  { label: 'Blog', href: 'https://applatch.com/applatchkids/blog/' },
  { label: 'Contact us', href: 'https://applatch.com/applatchkids/contacts-us/' },
];
export const problems = [
  { t: 'Low interest to study & do assignments', b: '56% of children aged 8-18 don’t read in their free time, leading to a 20% drop in standardized test scores.', s: 'National Literacy Trust, 2023; Education Metrics, 2023' },
  { t: 'Entertainment over learning', b: '60% of kids prioritize entertainment screen time over learning, and excessive entertainment screen time leads to short attention span.', s: 'NLT, 2023; Microsoft, 2015' },
  { t: 'Exposed to dangers online', b: '8 out of 10 children experience cyberbullying online, exposed to online predators and inappropriate content, leading to emotional distress and compromised well-being.', s: 'UNICEF, 2022' },
];
export const features = [
  { t: 'Quizzes unlock entertainment apps', b: 'Children engage in age-appropriate quizzes with 15 questions per session in Maths, English, and Science. Achieving a minimum of 8/15 unlocks apps for 15 minutes to 1 hour. Additional access requires completing another set of 15 questions.', img: '2026/04/Features-section-3.png?fit=1320%2C940&ssl=1', w: 1320, h: 940, stores: true },
  { t: 'Educational performance analysis report', b: 'Receive comprehensive academic progress reports regularly to track your child\u2019s learning journey effectively. We share the report to your email on a weekly basis, showing their performance in Mathematics, English and Science.', img: '2026/07/Group-1000003136.png?fit=1062%2C788&ssl=1', w: 1062, h: 788 },
  { t: 'Unlock pops (points) per quiz', b: 'Earn pops (points) as rewards for playing quizzes, making learning both fun and rewarding.', img: '2026/07/Group-1000003136-1.png?fit=1062%2C788&ssl=1', w: 1062, h: 788 },
];
export const how = [
  { t: 'We lock selected fun apps for Micheal', img: 'elementor/thumbs/C1-19-1-rrd2y7bg0t21sszxn6s0gtqfh1jz0mdqgrgbecmtek.png?w=980&ssl=1' },
  { t: 'Play an educational quiz to unlock apps', img: 'elementor/thumbs/C1-19-1-1-rrd2y4hwudk999pb28gryuxvd525olg9t7y6warv5g.png?w=980&ssl=1' },
  { t: 'Apps are unlocked for limited time', img: 'elementor/thumbs/C1-19-1-2-rrd3dnrvsstv594xcg7soft4tehjwi4ka443fxqmb8.png?w=980&ssl=1' },
  { t: 'You get real-time updates on your device', img: 'elementor/thumbs/Hand-1-rtq1qgkorqz5lby1ug772xv8mu4ubk735v1cxqa7pa.png?w=980&ssl=1' },
];
export const screens = [1, 2, 3, 4, 5].map((n) => `2026/04/H.I.W-Screen-${n}.png?w=328&ssl=1`);
export const faqs = [
  ['What is Applatch Kids', 'Applatch Kids is an educational and parental control app that helps your child learn through fun, curriculum-based quizzes while promoting healthy screen time by locking apps until quizzes are completed successfully.'],
  ['How does learning work on Applatch Kids?', 'Children learn through fun, curriculum-based quizzes that reinforce what they\u2019ve learned.'],
  ['How do I sign up correctly?', 'You can sign up on either your device (parent\u2019s device) or your child\u2019s device using your email (parent\u2019s email only). Then log in on the other device using the same email and password set during sign up, or simply scan the QR code to link both devices.\n\nTip: Don\u2019t sign up with your child\u2019s email, it may cause issues linking your family account.'],
  ['What subjects are available?', 'Applatch Kids currently covers key subjects like Mathematics, English, and Science, with more extracurricular topics coming soon, such as, PSHE, Baking, etc. coming soon'],
  ['What happens if my child fails a quiz?', 'If your child doesn\u2019t reach the pass mark, they can retry. The system automatically adjusts the quiz difficulty to match their learning pace. However, to avoid frustration, Applatch Kids unlocks their apps after their second attempt on a quiz.'],
  ['How does the Learning Buddy help?', 'Our AI-powered mascot explains tricky questions using voice and animation, guiding your child just like a friendly classroom helper'],
  ['Can I track my child\u2019s learning progress?', 'Yes! You can track your child\u2019s subject performance, progress, and achievements directly from your Parent App and weekly email updates.'],
  ['How does screen time control work?', 'You can set daily screen time limits (e.g., 45 mins, 1 hour, 3 hours per day) on the parent\u2019s side of the app. Once the daily limit is reached, Applatch Kids automatically locks your child\u2019s apps for the rest of the day.'],
];
export const price = {
  perks: ['Monitor your child’s location', 'Add up to 4 devices', 'Lock apps and filter content', 'Premium chat and email support'],
  // Confirmed £3.99/month. Annual figure assumed to match "Save 16%" — CONFIRM real annual price.
  month: '£3.99', year: '£39.99', save: 'Save 16%',
};
// Wording below is lifted directly from staging's "Age appropriate quizzes
// following National curriculum standard; Maths, English & Science." line —
// not invented subject descriptions.
export const subjects = [
  { icon: '➕', t: 'Maths' },
  { icon: '📖', t: 'English' },
  { icon: '🔬', t: 'Science' },
];
const P = 'https://applatch.com/applatchkids/';
export const posts = [
  ['March 27, 2025', 'Introducing healthy tech habits early.', 'introducing-healthy-tech-habits-early/'],
  ['March 25, 2025', 'The Role of Schools in Managing Juvenile Smartphone Usage and Promoting Smart Education', 'the-role-of-schools-in-managing-juvenile-smartphone-usage-and-promoting-smart-education/'],
  ['March 24, 2025', 'How to Have an Open Conversation About Smartphone Usage with Your Child.', 'how-to-have-an-open-conversation-about-smartphone-usage-with-your-child/'],
  ['March 21, 2025', 'Smartphone addiction quiz for parents.', 'smartphone-addiction-quiz-for-parents/'],
  ['March 18, 2025', 'How smartphone usage impacts children’s social skills.', 'how-smartphone-usage-impacts-childrens-social-skills/'],
  ['March 18, 2025', 'Family digital detox.', 'family-digital-detox/'],
].map(([d, t, s]) => ({ d, t, href: P + s }));
