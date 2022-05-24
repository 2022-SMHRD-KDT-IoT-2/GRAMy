import React from "react";
import { Link } from "react-router-dom";
import SkeletonRow from "./ui/SkeletonRow";

const PurchaseTableBody = ({ posts, loading, offset, limit }) => {
  return (
    <>
      {loading
        ? new Array(10).fill(1).map((i, key) => {
            return <SkeletonRow key={key} />;
          })
        : posts
        ? posts.slice(offset, offset + limit).map((info, key) => {
            return (
              <tr key={key} className="border border-slate-500">
                <td className="py-3 ">{info.purchase_seq}</td>
                <td>
                  <Link
                    to={`${info.purchase_seq}`}
                    state={{
                      info: info,
                    }}
                  >
                    {info.purchase_title}
                  </Link>
                </td>
                <td>{info.user_name}</td>
                <td>{info.purchase_date.substring(0, 11)}</td>
                <td>{info.purchase_cnt}</td>
              </tr>
            );
          })
        : null}
    </>
  );
};

export default PurchaseTableBody;
