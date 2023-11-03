export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}

const today = new Date();
export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: "Martin Ordegaard",
    role: "Midfilder",
    skills: ["Dribbling", "Passing", "Vission"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Playing",
  },
  {
    id: 2,
    name: "Gabriel Jesus",
    role: "Striker",
    skills: ["Dribbling", "Scoring", "Vission", "Holdup"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Injury",
  },
  {
    id: 3,
    name: "Willian Saliba",
    role: "Defender",
    skills: ["Defending", "Passing"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Bench",
  },
  {
    id: 4,
    name: "Declan Rice",
    role: "Defensive Midfilder",
    skills: ["Dribbling", "Defending", "Running", "Passing", "Vission"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Playing",
  },
];
