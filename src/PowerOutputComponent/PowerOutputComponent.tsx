import React from 'react';
import './PowerOutputComponent.css';
import WorkoutData from '../data/workout-data.json';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



interface IBestEffortOption {
  [index: number]: { label: string; value: number; }
}

interface IBestEffortOptions {
  label: string;
  value: number;
}

interface IBestEffortState {}


interface ISamples {
  eventType: string;
  millisecondOffset: number;
  values: IValues;
}

interface IValues {
  heartRate: number;
  cadence: number;
  power: number;
  temperature: number;
  elevation: number;
  distance: number;
  speed: number;
}

interface IWorkoutData {
  channelSet: string[];
  isEventBased: boolean;
  samples: ISamples;
}

class PowerOutputComponent extends React.Component {
  state = {
    
  }

  onSelectOptionClick = () => {}

 render(){


    let bestEffortOptions = [
      { label: '1 minute', value: 1 },
      { label: '5 minute', value: 5 },
      { label: '10 minute', value: 10 },
      { label: '15 minute', value: 15 },
      { label: '20 minute', value: 20 }
    ];

    return (
    <div className="power-output-container">
      <h2 className="power-output">Power Output</h2>
      <div className="chart">
        <h4>Best effort</h4>

        <select>
          {bestEffortOptions.map((bestEffortOption, i) => {
            return <option onClick={this.onSelectOptionClick} label={bestEffortOptions[i].label}
                    value={bestEffortOptions[i].value} key={i}>
                   </option>
          })}
        </select>

      </div>
    </div>
  );
  }
}



export default PowerOutputComponent;
