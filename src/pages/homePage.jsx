import React, { useEffect, useState } from "react";
import TableComponent from "../components/tableComponents/tableComponent";
import "./homePage.css";
import FilterComponent from "../components/fillterComponents/filterComponent";
import data from "../assests/data.json";

function HomePage() {
  const [tableData, setTableData] = useState({
    city: [],
    category: [],
    type: [],
    active: [],
    name: "",
  });
  const [filteredData, setFilteredData] = useState(data);

  const handleTableData = (e, keyName, value) => {
    if (keyName === "name") {
      setTableData({ ...tableData, [keyName]: e.target.value });
    } else {
      const updatedArray = tableData[keyName].includes(value)
        ? tableData[keyName].filter((item) => item !== value)
        : [...tableData[keyName], value];
      setTableData({ ...tableData, [keyName]: updatedArray });
    }
  };

  useEffect(() => {
    handleFilterMethod();
    // eslint-disable-next-line
  }, [tableData]);

  const handleFilterMethod = () => {
    let updatedData = data;

    if (tableData.name) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(tableData.name.toLowerCase())
      );
    }

    if (tableData.city.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.city.includes(item.city.toLowerCase())
      );
    }

    if (tableData.category.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.category.includes(item.category.toLowerCase())
      );
    }

    if (tableData.type.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.type.includes(item.type.toLowerCase())
      );
    }

    if (tableData.active.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.active.includes(item.active.toString())
      );
    }

    setFilteredData(updatedData);
  };
  return (
    <div className="mainBox">
      <div className="subBox">
        <FilterComponent
          tableData={tableData}
          handleTableData={handleTableData}
        />
      </div>
      <div className="subBox">
        <TableComponent data={filteredData} />
      </div>
    </div>
  );
}

export default HomePage;
