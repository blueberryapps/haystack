import React, { PropTypes as RPT, PureComponent } from 'react';
import { colors } from '../globals';
import { Range } from 'immutable';

export const CURVE_POINT_ID = 'historyCurvePoint';

export const CURVE_CONTROL_POINTS = [
  [0, 0],
  [0.512286623256592433, 0.512286623256592433],
  [1, 1.002313685767898599],
  [1, 1.570796326794896619]
];
export const CURVE_LENGTH = CURVE_CONTROL_POINTS[3][1];
export const CURVE_OFFSET = -3;
export const POINT_RADIUS = 5;
export const SCALE_X = 40;
export const SCALE_Y = 250;


export default class Curve extends PureComponent {

  static propTypes = {
    height: RPT.number.isRequired,
    itemTops: RPT.array.isRequired,
  }

  state = {}

  getSineXForY = y => Math.sin(y / SCALE_Y) * SCALE_X;

  renderCurve = (scaleX = 1, scaleY = 1, repeat = 1, offset = 0) => (
    Range(offset, repeat - offset).toArray().map((index) => {
      const inverse = index < 0;
      const repeatBasis = Math.abs(index) % 4;
      const origin = [0, CURVE_LENGTH * scaleY * (Math.abs(index) - repeatBasis)];

      switch (repeatBasis) {
        case (0): {
          return this.renderPath(
            origin,
            CURVE_CONTROL_POINTS[1],
            CURVE_CONTROL_POINTS[2],
            CURVE_CONTROL_POINTS[3],
            scaleX,
            scaleY,
            inverse
          );
        }
        case (1): {
          return this.renderPath(
            [origin[0], origin[1] + (CURVE_LENGTH * scaleY * 2)],
            CURVE_CONTROL_POINTS[1],
            CURVE_CONTROL_POINTS[2],
            CURVE_CONTROL_POINTS[3],
            scaleX,
            -scaleY,
            inverse
          );
        }
        case (2): {
          return this.renderPath(
            [origin[0], origin[1] + (CURVE_LENGTH * scaleY * 2)],
            CURVE_CONTROL_POINTS[1],
            CURVE_CONTROL_POINTS[2],
            CURVE_CONTROL_POINTS[3],
            -scaleX,
            scaleY,
            inverse
          );
        }
        case (3): {
          return this.renderPath(
            [origin[0], origin[1] + (CURVE_LENGTH * scaleY * 4)],
            CURVE_CONTROL_POINTS[1],
            CURVE_CONTROL_POINTS[2],
            CURVE_CONTROL_POINTS[3],
            -scaleX,
            -scaleY,
            inverse
          );
        }
        default: return null;
      }
    })
  )

  renderPath = (c0, c1, c2, c3, scaleX = 1, scaleY = 1, inverse = false) => {
    if (inverse) {
      return (
        <path
          key={`M${-c0[0]},${-c0[1]} c${-c1[0] * scaleX},${-c1[1] * scaleY} ${-c2[0] * scaleX},${-c2[1] * scaleY} ${-c3[0] * scaleX},${-c3[1] * scaleY}`}
          d={`M${-c0[0]},${-c0[1]} c${-c1[0] * scaleX},${-c1[1] * scaleY} ${-c2[0] * scaleX},${-c2[1] * scaleY} ${-c3[0] * scaleX},${-c3[1] * scaleY}`}
          style={styles.path}
        />
      );
    }

    return (
      <path
        key={`M${c0[0]},${c0[1]} c${c1[0] * scaleX},${c1[1] * scaleY} ${c2[0] * scaleX},${c2[1] * scaleY} ${c3[0] * scaleX},${c3[1] * scaleY}`}
        d={`M${c0[0]},${c0[1]} c${c1[0] * scaleX},${c1[1] * scaleY} ${c2[0] * scaleX},${c2[1] * scaleY} ${c3[0] * scaleX},${c3[1] * scaleY}`}
        style={styles.path}
      />
    );
  }

  renderPoint = (x, y, index) => {
    const pointId = index !== undefined && `${CURVE_POINT_ID}${index}`;

    return (
      <circle cx={x} cy={y} id={pointId} r={POINT_RADIUS} style={styles.point} />
    );
  }

  render() {
    const { height, itemTops } = this.props;
    const curveOffsetY = CURVE_OFFSET * CURVE_LENGTH * SCALE_Y;
    const curveSegments = Math.ceil(height / (CURVE_CONTROL_POINTS[3][1] * SCALE_Y));
    const renderHeight = height + (POINT_RADIUS * 2);
    const renderWidth = (SCALE_X * 2) + (POINT_RADIUS * 2);
    const pointPositions = itemTops && itemTops.map(y => [this.getSineXForY(y - curveOffsetY - POINT_RADIUS), y - curveOffsetY - POINT_RADIUS]);

    return (
      <svg width={renderWidth} height={renderHeight}>
        <g transform={`translate(${SCALE_X + POINT_RADIUS}, ${curveOffsetY + POINT_RADIUS})`}>
          {this.renderCurve(SCALE_X, SCALE_Y, curveSegments, CURVE_OFFSET)}
          {this.renderPoint(this.getSineXForY(-curveOffsetY), -curveOffsetY)}
          {pointPositions.map((point, index) => this.renderPoint(point[0], point[1], index))}
          {this.renderPoint(this.getSineXForY(height - curveOffsetY), height - curveOffsetY)}
        </g>
      </svg>
    );
  }
}

const styles = {
  path: {
    fill: 'transparent',
    stroke: colors.light
  },
  point: {
    fill: colors.light
  }
};
