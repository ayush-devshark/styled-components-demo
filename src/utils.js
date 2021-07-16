export const colors = {
    primary: 'rgb(255, 174, 231)',
    secondary: 'rgb(255, 14, 231)',
};

export const setupBorder = ({ width, type = 'solid', color }) =>
    `${width}px ${type} ${color}`;
