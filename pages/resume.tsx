import { useEffect } from "react";
import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#experience");
  }, [router]);

  return null;
};

export default Resume;
