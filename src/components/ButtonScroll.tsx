import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const ButtonScroll = () => {
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    if (buttonContainerRef.current) {
      buttonContainerRef.current.scrollLeft = 0; // Start at the first button
    }
  }, []);

  return (
    <div
      ref={buttonContainerRef}
      className="flex md:justify-center justify-start items-center overflow-x-auto scrollbar-hide space-x-4 px-6 md:py-14 py-10"
    >
      <Button variant={"outline"} size={"lg"}>
        Web Design
      </Button>
      <Button variant={"outline"} size={"lg"}>
        UI/UX Design
      </Button>

      <Button variant={"outline"} size={"lg"}>
        App Development
      </Button>
      <Button variant={"outline"} size={"lg"}>
        Mobile Development
      </Button>
      <Button variant={"outline"} size={"lg"}>
        Digital Marketing
      </Button>
    </div>
  );
};

export default ButtonScroll;
