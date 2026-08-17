import { useEffect } from "react";
import { useRouter } from "next/router";

const Portofolio = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#work");
  }, [router]);

  return null;
};

export default Portofolio;
