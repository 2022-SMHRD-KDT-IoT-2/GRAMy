import React from "react";
import { Link } from "react-router-dom";
import SkeletonRow from "./ui/SkeletonRow";

const ReportTableBody = ({ posts, loading, offset, limit }) => {
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
                <td className="py-3 ">{info.report_seq}</td>
                {/* 실제 백엔드와 연동할땐 처리중 대신 info.progress < 이런식으로 대체 될 것 */}
                <td>고장접수</td>
                <td>
                  <Link
                    to={`${info.report_seq}`}
                    state={{
                      info: info,
                    }}
                  >
                    {info.report_title}
                  </Link>
                </td>
                <td>{info.user_name}</td>
                <td>{info.report_date}</td>
                <td>{info.report_cnt}</td>
              </tr>
            );
          })
        : null}
    </>
  );
};

export default ReportTableBody;
