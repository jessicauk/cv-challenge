let enviroment = '';
if (process.env.NODE_ENV === 'development') {
    enviroment = 'https://fake-json-server-app.herokuapp.com';
} else {
    enviroment = 'https://fake-json-server-app.herokuapp.com';
}
export const EDUCATION = `${enviroment}/education`;
export const CERTIFICATIONS = `${enviroment}/certifications`;
export const PROFILE = `${enviroment}/profile`;
export const JOBS = `${enviroment}/jobs`;
export const BRIEFCASE = `${enviroment}/briefcase`;
export const LANGUAGES = `${enviroment}/languages`; 
export const SKILLS = `${enviroment}/skills`; 
export const ERROR_GET = "Error get endpoint";
export const ERROR_POST = "Error post endpoint";
export const ERROR_PUT = "Error put endpoint";
export const ERROR_DELETE = "Error delete endpoint";
export const ERROR_PATCH = "Error error endpoint";
export const EN = "en";
export const US = "us";
export const ES = "es";
export const EMPTY_ID = 999999999;
export const MESSAGES = {
  en: {
    EDUCATION: "Education",
    JOB: "Job",
    BRIEFCASE: "Briefcase",
    SKILLS: "Briefcase",
  },
  es: {
    EDUCATION: "Educación",
    JOB: "Experiencia",
    BRIEFCASE: "Portafolio",
    SKILLS: "Conocimientos y Habilidades",
  },
};
