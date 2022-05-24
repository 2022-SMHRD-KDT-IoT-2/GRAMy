import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonUI() {
  return (
    <div className="flex justify-center px-3">
      <Box className="w-full">
        <Skeleton animation="wave" height={40} />
      </Box>
    </div>
  );
}
