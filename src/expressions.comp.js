import React from 'react';
import {DropTarget} from 'react-dnd';
import {Icon} from 'react-materialize';
import './expressions.css';

const funcStack = [];

const spec = {
    drop: (props, monitor) => {},
    hover: props => {}
};

const collect = function (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        targetFunc: connect.dropTarget()
    };
};

const sourcer = DropTarget('func', spec, collect);

const ExprBloc = props => {
    console.log(funcStack);
    var expComps = [];
    // non-target
    expComps.push(
        <div className="exp-target" key="et-0">
            <Icon center>filter_center_focus</Icon>
        </div>
    );

    // target
    expComps.push(sourcer(props => {
        return props.connectDropTarget(
            <div className="exp-target" key="et-00">
                <Icon center>filter_center_focus</Icon>
            </div>
        )
    }));

    return <div className="">{expComps}</div>;
}

export default ExprBloc;