export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string | null; // e.g. "/images/team/saniya.jpg", or null for initials
};

export const team: TeamMember[] = [
  {
    name: "Saniya Sultana Shaikh",
    role: "Physiotherapist",
    bio: "Saniya is an HCPC-registered physiotherapist and CSP member dedicated to helping patients regain mobility, independence and confidence in daily life. She has over two years of hands-on clinical experience across the UK healthcare system, spanning musculoskeletal, neurological, orthopaedic, acute and rehabilitation care. She takes a holistic, evidence-based approach, tailoring each plan around the person's goals, lifestyle and wellbeing. Saniya has also delivered remote care as a Virtual Service Physiotherapist and continues to develop her skills in pain management, safe patient mobilisation and specialised care support.",
    photo: "/images/team/saniya.jpg",
  },
];