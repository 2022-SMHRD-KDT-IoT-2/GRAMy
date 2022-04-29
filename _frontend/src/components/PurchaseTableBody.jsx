import React from "react";
import { Link } from "react-router-dom";

const PurchaseTableBody = ({ articleInfo }) => {
  return (
    <>
      {articleInfo
        ? articleInfo.map((info, key) => {
            return (
              <tr key={key} className="border border-slate-500">
                <td className="py-3 ">{info.id}</td>
                <td>
                  <Link
                    to={`${info.id}`}
                    state={{
                      info: info,
                    }}
                  >
                    {info.name}
                  </Link>
                </td>
                <td>{info.username}</td>
                <td>2022-04-29</td>
                <td>0</td>
              </tr>
            );
          })
        : null}
    </>
  );
};

export default PurchaseTableBody;
