'use client';

import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function ReactExample() {
  return <>
    <CalculatorFrame calculator="tdee" locale="uk" theme="auto" campaign="react-example" />
    <CalculatorFrame calculator="water" locale="kk" theme="light" />
    <NutritionCalculatorFrame locale="uz" theme="auto" />
  </>;
}
