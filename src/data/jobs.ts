export type H1BStatus = "YES" | "NO" | "NOT_SURE";
export type Source = "SerpAPI" | "JSearch";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  source: Source;
  postedDate: string;
  applyUrl: string;
  h1bStatus: H1BStatus;
  description: string;
  runId: string;
}

export interface RunHistory {
  id: string;
  timestamp: string;
  displayTime: string;
  totalJobs: number;
  yesCount: number;
}

export const sampleRuns: RunHistory[] = [
  { id: "run-1", timestamp: "2026-03-13T20:42:00", displayTime: "Mar 13 · 8:42 PM", totalJobs: 8, yesCount: 5 },
  { id: "run-2", timestamp: "2026-03-13T08:00:00", displayTime: "Mar 13 · 8:00 AM", totalJobs: 6, yesCount: 3 },
  { id: "run-3", timestamp: "2026-03-12T20:00:00", displayTime: "Mar 12 · 8:00 PM", totalJobs: 11, yesCount: 6 },
  { id: "run-4", timestamp: "2026-03-12T08:00:00", displayTime: "Mar 12 · 8:00 AM", totalJobs: 5, yesCount: 2 },
];

export const sampleJobs: Job[] = [
  {
    id: "j1",
    title: "Process Engineer",
    company: "Micron Technology",
    location: "Manassas, VA",
    source: "SerpAPI",
    postedDate: "2d ago",
    applyUrl: "https://micron.com/careers",
    h1bStatus: "YES",
    runId: "run-1",
    description: "Join Micron's DRAM fabrication team as a Process Engineer. You'll develop and optimize thin-film deposition processes for advanced memory nodes. Requires MS/PhD in Chemical Engineering, Materials Science, or related field. Experience with CVD/ALD tools preferred. Micron is an equal opportunity employer and sponsors H-1B visas for qualified candidates.",
  },
  {
    id: "j2",
    title: "Wet Etch Engineer",
    company: "Tower Semiconductor",
    location: "Newport Beach, CA",
    source: "JSearch",
    postedDate: "1d ago",
    applyUrl: "https://towersemi.com/careers",
    h1bStatus: "YES",
    runId: "run-1",
    description: "Tower Semiconductor is hiring a Wet Etch Engineer to support specialty analog fab operations. Responsibilities include managing wet bench processes, defect reduction, and chemical qualification. BS in Chemistry, ChemE, or EE required. 2+ years fab experience preferred. H-1B sponsorship available.",
  },
  {
    id: "j3",
    title: "Module Engineer",
    company: "TSMC",
    location: "Phoenix, AZ",
    source: "SerpAPI",
    postedDate: "3d ago",
    applyUrl: "https://tsmc.com/careers",
    h1bStatus: "YES",
    runId: "run-1",
    description: "TSMC Arizona is seeking Module Engineers for its advanced N4/N3 fab. You'll own integration of lithography, etch, and CMP modules. PhD in EE, Physics, or MSE strongly preferred. TSMC provides comprehensive immigration support including H-1B and green card sponsorship.",
  },
  {
    id: "j4",
    title: "Principal Semiconductor Engineer",
    company: "Raytheon",
    location: "Andover, MA",
    source: "SerpAPI",
    postedDate: "5d ago",
    applyUrl: "https://raytheon.com/careers",
    h1bStatus: "NO",
    runId: "run-1",
    description: "Raytheon is seeking a Principal Semiconductor Engineer for III-V compound semiconductor device development. This position requires U.S. citizenship due to ITAR regulations. Active Secret clearance preferred. MS in EE with 8+ years experience in GaAs/GaN fabrication.",
  },
  {
    id: "j5",
    title: "Process Engineer",
    company: "Keysight Technologies",
    location: "Santa Rosa, CA",
    source: "JSearch",
    postedDate: "1d ago",
    applyUrl: "https://keysight.com/careers",
    h1bStatus: "NOT_SURE",
    runId: "run-1",
    description: "Keysight is looking for a Process Engineer to support semiconductor test & measurement product manufacturing. BS in ME, EE, or related field. Experience with photolithography and plasma etch a plus. Competitive benefits package. Immigration sponsorship policy not specified in posting.",
  },
  {
    id: "j6",
    title: "Equipment Engineer",
    company: "Applied Materials",
    location: "Santa Clara, CA",
    source: "SerpAPI",
    postedDate: "4d ago",
    applyUrl: "https://appliedmaterials.com/careers",
    h1bStatus: "YES",
    runId: "run-1",
    description: "Applied Materials seeks an Equipment Engineer to support CVD chamber development and qualification. You'll work on next-gen deposition tools for leading-edge foundry customers. BS/MS in ME or ChemE. Applied Materials sponsors H-1B visas and provides relocation assistance.",
  },
  {
    id: "j7",
    title: "Yield Engineer",
    company: "Intel",
    location: "Hillsboro, OR",
    source: "JSearch",
    postedDate: "2d ago",
    applyUrl: "https://intel.com/careers",
    h1bStatus: "YES",
    runId: "run-1",
    description: "Intel's Technology Development group is hiring Yield Engineers to drive defect reduction and yield improvement on Intel 18A process. MS/PhD in EE, Physics, or Materials Science. Strong data analysis skills required. Intel is committed to workforce diversity and sponsors immigration visas.",
  },
  {
    id: "j8",
    title: "Process Engineering Lead",
    company: "Syenta",
    location: "Remote",
    source: "JSearch",
    postedDate: "6d ago",
    applyUrl: "https://syenta.com/careers",
    h1bStatus: "NOT_SURE",
    runId: "run-1",
    description: "Syenta, a startup developing novel photonic chips, is hiring a Process Engineering Lead. Remote-first role with occasional travel to partner fabs. 5+ years semiconductor process experience. Leadership experience preferred. Visa sponsorship details unclear — contact recruiter.",
  },
];
