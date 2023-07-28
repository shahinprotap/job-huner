import { Slider } from "@mui/material";
import mystyle from "../Style.module.css";
import { useState } from "react";
import usePasswordGenerater from "../hooks/use-password-generater";

const PasswordGenaretor = () => {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handalCheckbox = (i) => {
    const updateCheckboxData = [...checkboxData];
    updateCheckboxData[i].state = !updateCheckboxData[i].state;
    setCheckboxData(updateCheckboxData);
  };

  const { password, error, generatePassword } = usePasswordGenerater();

  return (
    <>
      <div className={mystyle.container}>
        {password && (
          <div className={mystyle.header}>
            <div className="title">{password} </div>
            <button className={mystyle.copyBtn} onClick={() => {}}>
              Copy
            </button>
          </div>
        )}

        <div className={mystyle.characterlength}>
          <span>
            <label>Character Length</label>
            <label> {length} </label>
          </span>
        </div>
        <Slider
          defaultValue={4}
          step={1}
          min={4}
          max={20}
          valueLabelDisplay="auto"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <div className={mystyle.checkbox}>
          {checkboxData.map((checkbox, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={() => handalCheckbox(index)}
                  checked={checkbox.state}
                />
                <label> {checkbox.title} </label>
              </div>
            );
          })}
        </div>
        <button
          className={mystyle.gnaretorBtn}
          onClick={() => generatePassword(checkboxData, length)}
        >
          Generate Password
        </button>
      </div>
    </>
  );
};

export default PasswordGenaretor;
