//creates the lines between the components
import SectionSVG from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  customPaddings,
  crossesOffest,
  children,
}) => {
  return (
    <div
      //  className={className}
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      }
      ${className || ""}`}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block  lg:rght-7.5 xl:right-10" />
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffest && crossesOffest
            } pointer-events-none lg:block xl:left-10 right-10`}
          ></div>
          {/* pass crosses offset if it exist */}
          <SectionSVG crossesOffset={crossesOffest} />
        </>
      )}
    </div>
  );
};

export default Section;
