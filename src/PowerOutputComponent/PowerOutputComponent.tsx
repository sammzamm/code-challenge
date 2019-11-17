import React from 'react';
import './PowerOutputComponent.css';
import WorkoutData from '../data/workout-data.json';

interface Samples {
  eventType: string;
  millisecondOffset: number;
  values: Values;
}

interface Values {
  heartRate: number;
  cadence: number;
  power: number;
  temperature: number;
  elevation: number;
  distance: number;
  speed: number;
}

interface WorkoutData {
  channelSet: string[];
  isEventBased: boolean;
  samples: Samples;
};


class PowerOutputComponent extends React.Component {
  render() {
    return (
    <div className="power-output">
      <h2>Power Output</h2>
      <div className="chart">
      </div>
    </div>
  );
  }


}

export default PowerOutputComponent;
