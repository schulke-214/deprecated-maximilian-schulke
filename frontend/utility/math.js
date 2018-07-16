export const Median = ( arr ) => {
    return arr.reduce( (accumulator, currentValue) => accumulator + currentValue ) / arr.length;
}