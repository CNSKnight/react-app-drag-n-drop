import React from 'react';
import {DragSource} from 'react-dnd';
import {Button, Icon} from 'react-materialize';
import './functions.css';
// import {map, keys, values} from 'lodash'; const onDrag = e => {
// e.preventDefault();     let idx = +e         .target
// .getAttribute('data-idx');     idx > -1 && this         .props
// .onContactSelect(idx); }

const FuncBloc = props => {
    console.log('FuncBloc', props);
    let func = props.func;
    let btn = (
        <Button key={func.name} name={func.name}>
            <Icon left>{func.icon}</Icon>
            <span>{func.name}</span>
        </Button>
    );

    return props.connectDragSource
        ? props.connectDragSource(btn)
        : btn;
};

const spec = {
    beginDrag(props, monitor) {
        return {name: props.name};
    }
};

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource()
    };
};

const sourcer = DragSource('func', spec, collect);

const FuncsBar = props => {
    let funcs = [];
    if (!props.functions || !props.functions.length) {
        funcs.push(
            <p>No Functions to Display</p>
        );
    } else {
        funcs = props
            .functions
            .map((func, idx) => {
                return <FuncBloc func={func} key={func.name} {...props}/>;
                // the below fails to render any FuncBlocs
                var ds = DragSource('func', spec, (connect, monitor) => {
                    return {
                        connectDragSource: connect.dragSource(),
                        func: func,
                        ...props
                    };
                });
                return ds(FuncBloc);
            });
    }

    return <div className="funcsBar">{funcs}</div>;
}

export default FuncsBar;