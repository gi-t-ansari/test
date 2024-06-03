import React from "react";
import TableHeader from "../../common/components/tableHeader/TableHeader";
import MailRow from "../../common/components/mailRow/MailRow";

const Inbox = ({ expanded }) => {
  return (
    <>
      <TableHeader />
      <table className="w-full">
        {Array(15)
          .fill(0)
          .map((item, i) => (
            <MailRow expanded={expanded} i={i} />
          ))}
      </table>
    </>
  );
};

export default Inbox;
