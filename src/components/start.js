import { CircleNode, CircleNodeModel } from '@logicflow/core';

class StartModel extends CircleNodeModel {
    initNodeData(data) {
        super.initNodeData(data)
        this.r = 28
        this.targetRules.push({
            message: '开始节点只能作为起始点',
            validate: () => false
        })
    }
    getNodeStyle() {
        const style = super.getNodeStyle()
        style.strokeWidth = 3
        return style
    }
    getOutlineStyle() {
        const style = super.getOutlineStyle()
        return style
    }
    getAnchorLineStyle() {
        const style = super.getAnchorLineStyle()
        // console.log('style :>> ', style);
        return style
    }

}

class StratView extends CircleNode {

}

export default {
    type: 'start',
    model: StartModel,
    view: StratView
}