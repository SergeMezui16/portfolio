import { RESUME_FILE_NAME_EN, RESUME_FILE_NAME_FR } from "@/config/constants";

export const getResumeUrl = (locale: string = "en") => {
  return `/resume/${locale === "fr" ? RESUME_FILE_NAME_FR : RESUME_FILE_NAME_EN}`;
};
