import Container from './Container.react';
import Heading from './heading/Heading.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';

export const HEADING_CONTAINER_KIND_HIRE_US = 'headingContainerKindHireUs';
export const HEADING_CONTAINER_KIND_WORK_TOGETHER = 'headingContainerKindWorkTogether';

@Radium
@translate()
export default class HeadingContainer extends PureComponent {

  static propTypes = {
    kind: PropTypes.oneOf([
      HEADING_CONTAINER_KIND_HIRE_US,
      HEADING_CONTAINER_KIND_WORK_TOGETHER
    ]),
    msg: PropTypes.func
  }

  render() {
    const { kind, msg } = this.props;

    if (!kind) return <div />;

    return (
      <Container
        style={styles.container}
      >
        {
          kind === HEADING_CONTAINER_KIND_HIRE_US &&
            <Heading>
              {msg('work.detail.meatandbones.hire')}
            </Heading>
        }
        {
          kind === HEADING_CONTAINER_KIND_WORK_TOGETHER &&
            <Heading>
              {msg('work.colaborate')}
            </Heading>
        }
      </Container>
    );
  }

}

const styles = {
  container: {
    margin: '140px auto 64px',
    maxWidth: '720px',
    textAlign: 'center'
  }
};
