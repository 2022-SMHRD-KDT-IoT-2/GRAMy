import React from "react";
import SkeletonUI from "./SkeletonUI";

const SkeletonRow = () => {
  return (
    <tr>
      <td>
        <SkeletonUI />
      </td>
      <td>
        <SkeletonUI />
      </td>
      <td>
        <SkeletonUI />
      </td>
      <td>
        <SkeletonUI />
      </td>
      <td>
        <SkeletonUI />
      </td>
    </tr>
  );
};

export default SkeletonRow;
