import type { ServiceSlug } from "./services";

export type ServiceDetail = {
  intro: string;
  helpsWith: string[];
  approach: string[];
  firstVisit: string;
};

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "low-back-pain": {
    intro:
      "Back pain is one of the most common reasons people see a physiotherapist, and most episodes can be managed well with the right advice and a gradual return to movement. We start by working out what is driving your pain, then build a plan around your life and goals.",
    helpsWith: [
      "Sudden (acute) back pain",
      "Persistent or recurring back pain",
      "Sciatica and leg pain linked to the back",
      "Stiffness after sitting or first thing in the morning",
      "Pain when lifting, bending or playing sport",
      "Discomfort linked to desk work and posture",
    ],
    approach: [
      "A thorough assessment of how your back moves, how strong it is and how it behaves day to day",
      "Hands-on techniques to ease pain and stiffness, where appropriate",
      "Targeted exercises to rebuild strength and confidence in movement",
      "Clear advice on activity, work set-up and how to avoid flare-ups",
    ],
    firstVisit:
      "Your first session includes a full assessment, an explanation of what we find and a plan for your next steps. Wear comfortable clothing that lets us see and move the area being assessed.",
  },
  "musculoskeletal-pain": {
    intro:
      "Muscle, joint and tendon problems can affect anything from your neck and shoulders to your hips, knees and feet. We identify the cause, ease your symptoms and help you get back to the things you enjoy.",
    helpsWith: [
      "Neck, shoulder and elbow pain",
      "Hip, knee, ankle and foot problems",
      "Sprains, strains and sports injuries",
      "Tendon problems and overuse injuries",
      "Arthritis and joint stiffness",
      "Repetitive strain and work-related aches",
    ],
    approach: [
      "A detailed assessment to find the source of the problem, not just the sore spot",
      "Manual therapy and movement techniques to settle pain",
      "Progressive strengthening and mobility exercises",
      "Guidance on pacing, training and returning to sport or work",
    ],
    firstVisit:
      "We start by listening to your story, then examine the area and the joints and muscles around it. You'll leave with an explanation of what is going on and a plan you can start straight away.",
  },
  "post-operative-rehab": {
    intro:
      "Good rehabilitation after surgery helps you recover movement, strength and confidence safely. We work alongside the guidance from your surgical team and set goals that matter to you.",
    helpsWith: [
      "Recovery after joint replacement",
      "Ligament and tendon repair or reconstruction",
      "Rehabilitation after fractures",
      "Recovery after spinal or other orthopaedic surgery",
      "Preparing for planned surgery",
    ],
    approach: [
      "A staged plan that follows your surgeon's guidance and protocol",
      "Gentle early movement, then progressive strengthening",
      "Walking, balance and function work for everyday life",
      "Regular reviews so your plan moves on as you improve",
    ],
    firstVisit:
      "Please bring any discharge letters or surgical instructions you have. We'll review them with you, assess where you are now and agree the next steps together.",
  },
  "neurological-conditions": {
    intro:
      "Living with a neurological condition can change how you move, balance and carry out daily tasks. Our rehabilitation focuses on what you want to achieve, supporting independence and quality of life.",
    helpsWith: [
      "Recovery and rehabilitation after stroke",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Nerve injuries and weakness",
      "Balance problems and falls risk",
      "Changes in walking and mobility",
    ],
    approach: [
      "Goal-focused plans built around your priorities",
      "Exercises for strength, balance, walking and coordination",
      "Practical strategies to make everyday tasks easier",
      "Support and guidance for family members and carers",
    ],
    firstVisit:
      "Your first session is a relaxed, detailed conversation and assessment. Feel free to bring a family member or carer, and any reports or medication lists that you have.",
  },
  "womens-health": {
    intro:
      "Physiotherapy can support women through pregnancy, after birth and at other stages of life. We create a private, respectful space where you can ask anything, and nothing happens without your consent.",
    helpsWith: [
      "Back and pelvic pain during pregnancy",
      "Recovery after childbirth",
      "Pelvic floor concerns",
      "Bladder and bowel symptoms",
      "Returning to exercise after having a baby",
      "Aches and joint pain at different life stages",
    ],
    approach: [
      "A private, unhurried assessment where everything is explained first",
      "Practical exercises, including pelvic floor training where it's right for you",
      "Advice on posture, movement and everyday activities",
      "A gradual plan for returning to the exercise you want to do",
    ],
    firstVisit:
      "We'll talk through your symptoms and goals and explain every step before we start. You decide what you are comfortable with at all times.",
  },
  "paediatric-conditions": {
    intro:
      "Children move, play and grow in their own way. Our gentle, play-based physiotherapy supports children's movement and development, with parents and carers involved every step of the way.",
    helpsWith: [
      "Delays in reaching movement milestones",
      "Coordination and balance difficulties",
      "Toe walking and changes in how a child walks",
      "Growing pains and sports injuries",
      "Postural concerns",
      "Support for children with neurological or genetic conditions",
    ],
    approach: [
      "Assessment through play, so your child feels at ease",
      "Fun, age-appropriate activities that build strength and skills",
      "Simple home programmes that fit family life",
      "Clear explanations for parents, carers and, where helpful, schools",
    ],
    firstVisit:
      "A parent or carer stays with your child throughout. We'll talk with you both, then watch your child move and play before explaining what we've seen.",
  },
};