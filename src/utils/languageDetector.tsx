import { useParams } from "next/navigation";

const languageDetector = (text?: string | null) => {
  const farsiChars = new Set("ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی");

  const { locale } = useParams();
  if (!text || text === undefined) {
    if (locale === "fa") {
      return true;
    } else {
      return false;
    }
  }
  for (const char of text.toString()) {
    if (farsiChars.has(char)) {
      return true;
    }
  }

  return false;
};

export default languageDetector;
