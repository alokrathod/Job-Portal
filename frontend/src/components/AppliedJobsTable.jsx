import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <TableRow key={index}>
              <TableCell>12/06/2025</TableCell>
              <TableCell>Google</TableCell>
              <TableCell>Backend Developer</TableCell>
              <TableCell className="text-right">
                <Badge>Accepted</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
