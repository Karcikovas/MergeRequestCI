import React from 'react'
import PropTypes from 'prop-types'
import './AutoRefreshControl.scss';
// const AUTO_REFRESH_ENABLED = 'autoRefreshEnabled'
// const AUTO_REFRESH_TIME = 'autoRefreshTime'

const AutoRefreshControl = () => {
    // constructor(props) {
    //   super(props);
    //
    //   this.state = {};
    //
    //   this.toggleAutoRefresh = this.toggleAutoRefresh.bind(this);
    //   this.setAutoRefreshTime = this.setAutoRefreshTime.bind(this);
    //   this.scheduleAutoRefresh = this.scheduleAutoRefresh.bind(this);
    //   this.cancelAutoRefresh = this.cancelAutoRefresh.bind(this);
    // }

    // componentDidMount() {
    //   const autoRefreshEnabled = JSON.parse(
    //     localStorage.getItem(AUTO_REFRESH_ENABLED)
    //   );
    //   const autoRefreshInterval = JSON.parse(
    //     localStorage.getItem(AUTO_REFRESH_TIME)
    //   );
    //
    //   if (autoRefreshInterval) {
    //     // eslint-disable-next-line react/no-string-refs
    //     this.refs.autoRefreshTime.value = autoRefreshInterval;
    //   }
    //
    //   // eslint-disable-next-line react/no-string-refs
    //   this.refs.autoRefreshCheckbox.checked = autoRefreshEnabled;
    //
    //   this.toggleAutoRefresh();
    // }

    // const setAutoRefreshTime = () => {
        // eslint-disable-next-line react/no-string-refs
        // scheduleAutoRefresh(this.refs.autoRefreshTime.value)
        // eslint-disable-next-line react/no-string-refs
        // localStorage.setItem(AUTO_REFRESH_TIME, this.refs.autoRefreshTime.value)
    // }

    // const cancelAutoRefresh = () => {
        // if (this.state.interval) {
        //     clearInterval(this.state.interval)
        //     this.setState({ interval: undefined })
        // }
    // }

    // const scheduleAutoRefresh = minutes => {
        // cancelAutoRefresh()
        //
        // this.setState({
        //     interval: setInterval(this.props.onRefresh, minutes * 1000 * 60),
        // })
    // }

    // const toggleAutoRefresh = () => {
        // // eslint-disable-next-line react/no-string-refs
        // const select = this.refs.autoRefreshTime
        // // eslint-disable-next-line react/no-string-refs
        // const enabled = this.refs.autoRefreshCheckbox.checked
        // select.disabled = !enabled
        //
        // localStorage.setItem(AUTO_REFRESH_ENABLED, enabled)
        //
        // if (enabled) {
        //     scheduleAutoRefresh(select.value)
        // } else {
        //     cancelAutoRefresh()
        // }
    // }

    return (
        <div className="auto-refresh">
            <input
                type="checkbox"
                // ref="autoRefreshCheckbox"
                id="auto-refresh"
                // onClick={toggleAutoRefresh()}
            />
            <label htmlFor="auto-refresh">
                <strong>Auto-refresh every</strong>
            </label>
            {/* eslint-disable-next-line jsx-a11y/no-onchange */}
            <select
                // onChange={setAutoRefreshTime()}
                id="auto-refresh-time"
                // ref="autoRefreshTime"
                disabled="disabled"
            >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>30</option>
                <option>60</option>
            </select>
            <strong>minutes</strong>
        </div>
    )
}

AutoRefreshControl.propTypes = {
    onRefresh: PropTypes.func.isRequired,
}

export default AutoRefreshControl
