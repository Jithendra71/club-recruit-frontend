import React from "react";
import { Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Slot = React.memo((props) => {
  const { id, hour1, minutes1, hour2, minutes2, count } = props;
  console.log(id, hour1, minutes1, hour2, minutes2, count);

  const label = `${hour1}:${minutes1} to ${hour2}:${minutes2} | Available Slots: ${count}`;
  return (
    <div>
      <Chip key={id} icon={<AccessTimeIcon />} label={label} />
    </div>
  );
});
export default Slot;
