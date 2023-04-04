import { RectNode, RectNodeModel, h } from '@logicflow/core';

class ApproveModel extends RectNodeModel {
    initNodeData(data) {
        super.initNodeData(data)
        this.radius = 10
    }
}

class ApproveView extends RectNode {
    getLabelShape() {
        const { model } = this.props;
        const { x, y, width, height } = model;
        const style = model.getNodeStyle();
        return h(
          "svg",
          {
            x: x - width / 2 + 5,
            y: y - height / 2 + 5,
            width: 25,
            height: 25,
            viewBox: "0 0 1024 1024"
          },
          h("path", {
            fill: style.stroke,
            d:
              "M287.507692 669.538462l108.091077-270.217847A216.457846 216.457846 0 0 1 295.384615 216.615385C295.384615 96.984615 392.369231 0 512 0s216.615385 96.984615 216.615385 216.615385c0 76.8-39.955692 144.246154-100.214154 182.70523L736.492308 669.538462H866.461538v236.307692H157.538462V669.538462h129.96923z m102.4 0h244.184616l-95.192616-237.961847a218.781538 218.781538 0 0 1-53.799384 0L389.907692 669.538462zM256 748.307692H236.307692v78.769231h551.384616v-78.769231H256z m256-393.846154a137.846154 137.846154 0 1 0 0-275.692307 137.846154 137.846154 0 0 0 0 275.692307zM157.538462 945.230769h708.923076v78.769231H157.538462v-78.769231z"
          })
        );
      }

      getShape() {
        const { model } = this.props;
        const { x, y, width, height, radius } = model;
        const style = model.getNodeStyle();
        return h("g", {}, [
          h("rect", {
            ...style,
            x: x - width / 2,
            y: y - height / 2,
            rx: radius,
            ry: radius,
            width,
            height
          }),
          this.getLabelShape()
        ]);
      }
}

export default {
  type: 'approve',
  view: ApproveView,
  model: ApproveModel
}
