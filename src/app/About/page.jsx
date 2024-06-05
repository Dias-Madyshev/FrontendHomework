import React from "react";
import Headerlayout from "../layout/Header";

export default function About() {
  return (
    <div>
      <Headerlayout>
        <div className="flex items-center justify-center">
          <div className="w-[600px] mt-[100px] text-gray font-bold text-[30px] text-justify">
            Станьте разработчиком или дата-аналитиком вместе с командой
            профессиональных разработчиков. Наши выпускники работают в Google,
            Apple и Meta.
          </div>
        </div>
      </Headerlayout>
    </div>
  );
}
