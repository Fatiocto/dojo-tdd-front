import { Radio } from "../Radio/Radio";
import { useCallback, useId, useState } from "react";
import './CustomSelect.css';

export const CustomSelect = ({ value, onSelect }) => {
  const labelledBy = useId();
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const isCurrentItemSelected = useCallback((value) => {
    return selectedValue === value;
  }, [selectedValue]);

  const optionList = [
    {
      value: "fr",
      label: "Français"
    },
    {
      value: "ja",
      label: "Japonais"
    },
    {
      value: "ch",
      label: "Chinois"
    },
    {
      value: "it",
      label: "Italien"
    },
    {
      value: "co",
      label: "Coréen"
    },
    {
      value: "an",
      label: "Anglais"
    }


];

  return(
    <div className="selectWrapper">
      <label htmlFor="restaurant-select" className="label" id={labelledBy}>Type de restaurant:</label>

      <div className="container">
        <button
          aria-haspopup="listbox"
          aria-expanded={isOptionListOpen}
          aria-labelledby={labelledBy}
          className="button"
          type="button"
          onClick={() => setIsOptionListOpen(!isOptionListOpen)}>
          Choisir un restaurant
        <input hidden value={selectedValue} className="input" id="restaurant-select" onChange={() => ({})}/>
        </button>
      </div>


      {isOptionListOpen && (
        <ul className="options">
          {optionList.map((option) =>
          (<li className="option">
            <Radio
              label={option.label}
              value={option.value}
              checked={isCurrentItemSelected(option.value)}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue(option.value);
                onSelect(option.label);
              }}/>
          </li>)
        )}

      </ul>)}
    </div>
  )
}
