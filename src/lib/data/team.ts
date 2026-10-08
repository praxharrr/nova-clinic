export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string | null; // e.g. "/images/team/name.jpg", or null for initials
};

// TODO: replace with the real team before launch.
export const team: TeamMember[] = [
  {
    name: "Physiotherapist name",
    role: "Physiotherapist",
    bio: "Add a short biography here: qualifications, experience and areas of interest.",
    photo: null,
  },
];