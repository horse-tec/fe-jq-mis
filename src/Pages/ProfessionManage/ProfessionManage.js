/**
 * Created by xuyanjun on 17/12/26.
 */

import React from 'react'
import {Table} from "antd";
import {Link} from "react-router-dom";

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="">{text}</a>,
    width: 150
}, {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    width: 150
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
          <Link to="/school/edit">Edit</Link>
        </span>
    ), width: 150
}];

class ProfessionManage extends React.Component {


    render() {
        const data = [];
        for (let i = 0; i < 20; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                rank: i + 1,
                address: `London, Park Lane no. ${i}`,
            });
        }
        return (
            <div style={{backgroundColor: "#FFFFFF"}}>
                <Table columns={columns} dataSource={data} pagination={{pageSize: 50}}/>
            </div>
        )
    }
}

export default ProfessionManage