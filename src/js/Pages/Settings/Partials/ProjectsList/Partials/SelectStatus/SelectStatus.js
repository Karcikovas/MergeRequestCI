import React from 'react' ;
import Select from '../../../../../../components/Select/Select'

const SelectStatus = () => {
    const options = [
        { label: 'Open', value: 100 },
        { label: 'Merged', value: 10 },
        { label: 'Closed', value: 20 },
        { label: 'All', value: 50 },
    ]

    return (
        <>
            <Select  options={options} />
        </>
    )
}

export default SelectStatus;
