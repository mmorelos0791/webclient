import React from 'react';
import { MegaRenderMixin } from '../../../stores/mixins';

export default class Collapse extends MegaRenderMixin {
    state = {
        expanded: true
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { expanded } = this.state;
        const { heading, badge, children } = this.props;

        return (
            <div className="collapse">
                {heading && (
                    <div
                        className="collapse-head"
                        onClick={() => this.setState(state => ({ expanded: !state.expanded }))}>
                        <i
                            className={`
                                sprite-fm-mono
                                ${expanded ? 'icon-arrow-down' : 'icon-arrow-up'}
                            `}
                        />
                        <h5>{heading}</h5>
                        {badge !== undefined && badge > 0 && <span className="participants-count">{badge}</span>}
                    </div>
                )}
                {expanded && children}
            </div>
        );
    }
}
