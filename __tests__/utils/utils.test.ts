import { getResumeUrl } from "@/lib/utils";

const RESUME_FILE_NAME_FR = "serge-mezui-fullstack-dev-resume-fr.pdf";
const RESUME_FILE_NAME_EN = "serge-mezui-fullstack-dev-resume-en.pdf";

describe("getResumeUrl", () => {
  test("returns the French resume URL when locale is \"fr\"", () => {
    expect(getResumeUrl("fr")).toBe(`/resume/${RESUME_FILE_NAME_FR}`);
  });

  test("returns the English resume URL when locale is \"en\"", () => {
    expect(getResumeUrl("en")).toBe(`/resume/${RESUME_FILE_NAME_EN}`);
  });

  test("defaults to the French resume URL when no locale is provided", () => {
    expect(getResumeUrl()).toBe(`/resume/${RESUME_FILE_NAME_FR}`);
  });

  test("returns the English resume URL when locale is not \"fr\" or \"en\"", () => {
    expect(getResumeUrl("es")).toBe(`/resume/${RESUME_FILE_NAME_EN}`);
  });
});
