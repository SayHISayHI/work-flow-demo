import { DiamondNode, DiamondNodeModel } from '@logicflow/core';

class GatewayModel extends DiamondNodeModel {
    initNodeData(data) {
        super.initNodeData(data)
        this.rx = 60
        this.ry = 30
    }
}

class GatewayView extends DiamondNode {}

export default {
    type: 'gateway',
    model: GatewayModel,
    view: GatewayView
}