import { CircleNode, CircleNodeModel } from '@logicflow/core';

class EndModel extends CircleNodeModel {
    initNodeData(data) {
        super.initNodeData(data)
        this.r = 28
        this.sourceRules.push({
            message: '结束节点不能作为起始点',
            validate: () => false
        })
    }
    getNodeStyle() {
        const style = super.getNodeStyle()
        // console.log('style :>> ', style);
        style.strokeWidth = 5
        return style
    }
    getOutlineStyle() {
        const style = super.getOutlineStyle()
        return style
    }
    getAnchorLineStyle() {
        const style = super.getAnchorLineStyle()
        // console.log('style :>> ', style);
        style.strokeWidth = 0
        return style
    }

}

class EndView extends CircleNode {

}

export default {
    type: 'end',
    model: EndModel,
    view: EndView
}