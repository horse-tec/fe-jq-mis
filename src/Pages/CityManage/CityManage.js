/**
 * Created by xuyanjun on 17/12/26.
 */

import React from 'react'
import ep from '../../util/ep'

class CityManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                {this.state.count}
                ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
                <br /> ... <br />CityManage
            </div>
        )
    }

    onClick() {
        ep.emit('login', 'world');
    }
}

export default CityManage