import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./NumbersSection.css"; // لتصميمك الخاص

export default function NumbersSection() {
  const [projects, setProjects] = useState(0);
  const [area, setArea] = useState(0);
  const [units, setUnits] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // تأخير بسيط لظهور الحركة
    setTimeout(() => {
      setProjects(42);
      setArea(1800000);
      setUnits(2100);
      setValue(649700000);
    }, 800);
  }, []);

  return (
    <div className="numbers-container">
      <div className="number-item">
        <h3><Odometer value={projects} format="(,ddd)" />+</h3>
        <p>مشـــــــــروع</p>
      </div>

      <div className="number-item">
        <h3><Odometer value={area} format="(,ddd)" />+</h3>
        <p>متر مــــــــــربع</p>
      </div>

      <div className="number-item">
        <h3><Odometer value={units} format="(,ddd)" />+</h3>
        <p>وحــــــــــدة</p>
      </div>

      <div className="number-item">
        <p className="highlight">قيــمة المــشــاريــع</p>
        <h3><Odometer value={value} format="(,ddd)" /> <span>ريـــال</span></h3>
      </div>
    </div>
  );
}
