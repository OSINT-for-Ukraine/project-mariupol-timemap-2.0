export const getClusterDisplayValue = (
  pointCount: number,
  minValue: number,
  maxValue: number
) => {
  const upperBound = 50;
  const pointCountBounded = pointCount > upperBound ? upperBound : pointCount;
  const normalizedValue = pointCountBounded / upperBound;
  const value = minValue + normalizedValue * (maxValue - minValue);

  return value;
};
