import React from "react"

import { SectionWrapper } from "../hoc"
import { stacks } from "../constants"

const Stack = () => {
  const [tooltipVisibility, setTooltipVisibility] = React.useState({})

  const toggleTooltip = (technologyName, isVisible) => {
    setTooltipVisibility(prevVisibility => ({
      ...prevVisibility,
      [technologyName]: isVisible
    }))
  }

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {stacks.map(technology => (
          <div
            key={technology.name}
            data-tooltip-placement="top"
            data-tooltip-target={`tooltip-top-${technology.name}`}
            onMouseEnter={() => toggleTooltip(technology.name, true)}
            onMouseLeave={() => toggleTooltip(technology.name, false)}
          >
            <figure
              className="bg-slate-100 rounded-full p-6 transform transition-transform duration-300 shadow-2xl hover:-translate-y-4 hover:shadow-2xl"
              style={{ borderColor: technology.color, borderWidth: "thick" }}
            >
              <img
                className="w-16"
                src={technology.icon}
                alt={technology.name}
                style={{
                  height: "2.5rem",
                  width: "3rem"
                }}
              />
            </figure>
            {tooltipVisibility[technology.name] && (
              <div
                id={`tooltip-top-${technology.name}`}
                role="tooltip"
                className="absolute z-10 visible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
              >
                {technology.name}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Stack, "")
