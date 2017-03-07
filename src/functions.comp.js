import React from 'react';
import {Button, Icon} from 'react-materialize';
import './functions.css';
import {map, keys, values} from 'lodash';

const FuncBloc = props => {
    let func = props.func;
    return <Button
        data-idx={props.idx}
        key={props.idx}
        onDrag={e => {
        e.preventDefault();
        let idx = +e
            .target
            .getAttribute('data-idx');
        idx > -1 && props.onContactSelect(idx);
    }}>
        <Icon left>{func.icon}</Icon>
        <span>{func.name}</span>
    </Button>
};

const FuncsBar = props => {
    let funcs;
    if (!props.functions || !props.functions.length) {
        funcs = <p text="No Functions to Display" idx="-1"/>;
    } else {
        let sets = props.sets || [];
        funcs = props
            .functions
            .map(function (func, idx) {
                return <FuncBloc func={func} idx={func.name} key={func.name}/>;
            }, props);
    }

    return <div className="funcsBar">{funcs}</div>;

}

export default FuncsBar;