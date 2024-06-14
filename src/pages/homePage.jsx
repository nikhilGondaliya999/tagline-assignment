import React, { useEffect, useState } from "react";
import TableComponent from "../components/tableComponents/tableComponent";
import "./homePage.css";
import FilterComponent from "../components/fillterComponents/filterComponent";
import data from "../assests/data.json";

function HomePage() {
  // const [tableData, setTableData] = useState({
  //   dallas: false,
  //   sanfrancisco: false,
  //   denver: false,
  //   one: false,
  //   two: false,
  //   a: false,
  //   b: false,
  //   c: false,
  //   false: false,
  //   true: false,
  //   name: "",
  // });
  // console.log("tableData", tableData);

  // const [filteredData, setFilteredData] = useState(data);

  // const handleTableData = (e, keyName) => {
  //   if (keyName === "name") {
  //     setTableData({ ...tableData, [keyName]: e.target.value });
  //   } else {
  //     setTableData({ ...tableData, [keyName]: e.target.checked });
  //   }
  // };

  // useEffect(() => {
  //   handleFilterMethod();
  // }, [tableData]);

  // const handleFilterMethod = () => {
  //   let updatedData = data;
  //   if (tableData.name) {
  //     updatedData = updatedData.filter((item) =>
  //       item.name.toLowerCase().includes(tableData.name.toLowerCase())
  //     );
  //   }

  //   if (tableData.dallas) {
  //     updatedData = updatedData.filter(
  //       (item) => item.city.toLowerCase() === "dallas"
  //     );
  //   }
  //   if (tableData.sanfrancisco) {
  //     updatedData = updatedData.filter(
  //       (item) => item.city.toLowerCase() === "san francisco"
  //     );
  //   }
  //   if (tableData.denver) {
  //     updatedData = updatedData.filter(
  //       (item) => item.city.toLowerCase() === "denver"
  //     );
  //   }

  //   if (tableData.one) {
  //     updatedData = updatedData.filter(
  //       (item) => item.category.toLowerCase() === "one"
  //     );
  //   }
  //   if (tableData.two) {
  //     updatedData = updatedData.filter(
  //       (item) => item.category.toLowerCase() === "two"
  //     );
  //   }

  //   if (tableData.a) {
  //     updatedData = updatedData.filter(
  //       (item) => item.type.toLowerCase() === "a"
  //     );
  //   }
  //   if (tableData.b) {
  //     updatedData = updatedData.filter(
  //       (item) => item.type.toLowerCase() === "b"
  //     );
  //   }
  //   if (tableData.c) {
  //     updatedData = updatedData.filter(
  //       (item) => item.type.toLowerCase() === "c"
  //     );
  //   }

  //   if (tableData.true) {
  //     updatedData = updatedData.filter((item) => item.active === true);
  //   }
  //   if (tableData.false) {
  //     updatedData = updatedData.filter((item) => item.active === false);
  //   }
  //   setFilteredData(updatedData);
  // };
  // console.log("tableData", tableData);
  // console.log("data", filteredData);

  const [tableData, setTableData] = useState({
    cities: [],
    categories: [],
    types: [],
    activeStates: [],
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
  }, [tableData]);

  const handleFilterMethod = () => {
    let updatedData = data;

    if (tableData.name) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(tableData.name.toLowerCase())
      );
    }

    if (tableData.cities.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.cities.includes(item.city.toLowerCase())
      );
    }

    if (tableData.categories.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.categories.includes(item.category.toLowerCase())
      );
    }

    if (tableData.types.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.types.includes(item.type.toLowerCase())
      );
    }

    if (tableData.activeStates.length > 0) {
      updatedData = updatedData.filter((item) =>
        tableData.activeStates.includes(item.active.toString())
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
