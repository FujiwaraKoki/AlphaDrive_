import React, { useState, useEffect } from 'react';
import moment from "moment";
import axios from 'axios';

import Timeline from "react-calendar-timeline";

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

function App() {
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const db_data_custom_user = await axios.get('http://localhost:8000/users/CustomUser/');
        const db_data_shift_type = await axios.get('http://localhost:8000/manage/ShiftType/');
        const db_data_group_company = await axios.get('http://localhost:8000/manage/GroupCompany/');
        const db_data_employee_shift = await axios.get('http://localhost:8000/manage/EmployeeShift/');
        const db_data_max_office_hour = await axios.get('http://127.0.0.1:8000/manage/MaxOfficeHour/');

        const custom_user = db_data_custom_user.data;
        const shift_type = db_data_shift_type.data;
        const group_company = db_data_group_company.data;
        const employee_shift = db_data_employee_shift.data;
        const max_office_hour = db_data_max_office_hour.data;

        console.log("custom_user: ", custom_user);
        console.log("shift_type: ", shift_type);
        console.log("group_company: ", group_company);
        console.log("employee_shift: ", employee_shift);
        console.log("max_office_hour: ", max_office_hour);

        var group = [];
        for (let i = 0; i < custom_user.length; i++) {
          group.push({
            id: i + 1,
            title: custom_user[i].username,
            rightTitle: custom_user[i].username,
            bgColor: 'blue'
          })
        }
        setGroups(group);

        let item = [];
        for (let i = 0; i < employee_shift.length; i++) {
          let work_day = employee_shift[i].work_day;
          let start_time = shift_type[employee_shift[i].shift_type-1].start_time;
          let end_time = shift_type[employee_shift[i].shift_type-1].end_time;

          const startDate = moment(work_day + ' ' + start_time);
          const endDate = moment(work_day + ' ' + end_time);
          item.push({
            id: i + 1,
            group: employee_shift[i].user,
            title: shift_type[employee_shift[i].shift_type-1].name,
            start: startDate,
            end: endDate,
            className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend' : '',
            canMove: true,
            canResize: true
          })
        }
        setItems(item);

        console.log("groups: ", groups);
        console.log("items: ", items);

        } catch (error) {
          console.error("Fetch error: ", error);
        }
      }
      fetchData();
    }, []
  );

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const group = groups[newGroupOrder];
    setItems(items.map(item =>
      item.id === itemId
        ? Object.assign({}, item, {
          start: dragTime,
          end: dragTime + (item.end - item.start),
          group: group.id
        })
        : item
    ));
    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (itemId, time, edge) => {
    setItems(items.map(item =>
      item.id === itemId
        ? Object.assign({}, item, {
          start: edge === "left" ? time : item.start,
          end: edge === "left" ? item.end : time
        })
        : item
    ));
    console.log("Resized", itemId, time, edge);
  };

  if (groups.length !== 0 && items.length !== 0){
    return (
      <Timeline
        groups={groups}
        items={items}
        keys={keys}
        sidebarContent={<div>Above The Left</div>}
        itemsSorted
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        showCursorLine
        defaultTimeStart={moment().startOf('day')}
        defaultTimeEnd={moment().startOf('day').add(21, 'day')}
        onItemMove={handleItemMove}
        onItemResize={handleItemResize}
        timeUnit="day"
        timeSteps={{ day: 1 }}
      />
    );
  }
}

export default App;