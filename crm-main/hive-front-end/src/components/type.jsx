import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const MyTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
  },
}));
export default MyTooltip