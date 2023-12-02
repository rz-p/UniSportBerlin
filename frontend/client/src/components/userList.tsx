import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface RecordType {
  _id: string;
  name: string;
  position: string;
  level: string;
}

interface RecordProps {
  record: RecordType;
  deleteRecord: (id: string) => void;
}

const Record: React.FC<RecordProps> = ({ record, deleteRecord }) =>  (
  <tr>
    <td>{record.name}</td>
    <td>{record.position}</td>
    <td>{record.level}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          deleteRecord(record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

const RecordList: React.FC = () => {
  const [records, setRecords] = useState<RecordType[]>([]);
  // This method fetches the records from the database.

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch(`http://localhost:5000/record/`);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const recordsData = await response.json();
        setRecords(recordsData);
      } catch (error: any) {
        window.alert(error.message);
      }
    }
    getRecords();
  
  }, []);

  // This method will delete a record
  function deleteRecord(id: string): void {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })
      .then(() => {
      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);
    })
    .catch((error) => {
      window.alert(`An error occurred while deleting: ${error.message}`);
    });
}

  // This method will map out the records on the table
  function renderRecordList(): React.ReactNode {
    return records.map((record) => (
      <Record
      record={record}
      deleteRecord={() => deleteRecord(record._id)}
      key={record._id}
      />
    ));
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderRecordList()}</tbody>
      </table>
    </div>
  );
};

export default RecordList;
